<?php
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;

require '../vendor/autoload.php';

spl_autoload_register(function ($classname) {
    require ("../lib/" . $classname . ".php");
});

$config['displayErrorDetails'] = true;
$config['addContentLengthHeader'] = false;

$config['db']['host']   = "localhost";
$config['db']['user']   = "user";
$config['db']['pass']   = "password";
$config['db']['dbname'] = "exampleapp";


$app = new \Slim\App(["settings" => $config]);

$container = $app->getContainer();

$container['dir'] = __DIR__ . '/../data/';

$container['logger'] = function($c) {
    $logger = new \Monolog\Logger('my_logger');
    $file_handler = new \Monolog\Handler\StreamHandler("../logs/app.log");
    $logger->pushHandler($file_handler);
    return $logger;
};

// $container['db'] = function ($c) {
//     $db = $c['settings']['db'];
//     $pdo = new PDO("mysql:host=" . $db['host'] . ";dbname=" . $db['dbname'],
//         $db['user'], $db['pass']);
//     $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
//     $pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
//     return $pdo;
// };

$container['view'] = function ($container) {
    $view = new \Slim\Views\Twig('../templates', [
        'cache' => false,//'../cache'
        'debug' => true,
    ]);
    $view->addExtension(new Twig_Extension_Debug());
    
    // Instantiate and add Slim specific extension
    $basePath = rtrim(str_ireplace('index.php', '', $container['request']->getUri()->getBasePath()), '/');
    $view->addExtension(new Slim\Views\TwigExtension($container['router'], $basePath));

    return $view;
};

// Get Blogs
$app->get('/', function (Request $request, Response $response) {
    $dir = $this->dir;
    $ignored = array('..', '.', 'index.php','.gitignore','backup'); 
    foreach (scandir($dir) as $file) {
        if (in_array($file, $ignored)) 
            continue;

        $content = file_get_contents('../data/'.$file);

        $hero = '';
        if(preg_match('/<img.+src=[\'"](?P<src>.+?)[\'"].*>/i', $content, $image)){
            $hero = $image['src'];
        }

        $title = ucwords(str_replace("-", " ",str_replace('.html','',$file)));
        if(preg_match("/<title>(.+)<\/title>/i", $content, $matches)){
            $title = $matches[1];
        }
        
        $link = $file;
        
        $file_structure = [
            'title' => $title,
            'hero' => $hero,
            'link' => $link,
            'content' => $content,
        ];
        $formatted_files[$file] = $file_structure;
        $files[$file] = filemtime($dir . '/' . $file);
    }

    arsort($formatted_files);
    return $this->view->render($response, 'home.html', [
        'blogs' => $formatted_files
    ]);
})->setName('home');


$app->get('/work', function (Request $request, Response $response) {
    return $this->view->render($response, 'work.html', [
        'name' => 'Kollan'
    ]);
})->setName('work');


$app->get('/about', function (Request $request, Response $response) {
    return $this->view->render($response, 'about.html', [
        'name' => 'Kollan'
    ]);
})->setName('about');

$app->get('/blog/{title}', function (Request $request, Response $response) {
    $data = $request->getUri();
    $data = preg_replace("+\/blog/+", '', $data->getPath());
    return $this->view->render($response, 'post.html', [
        'content' => file_get_contents('../data/'.$data)
    ]);
});

$app->get('/create', function (Request $request, Response $response) {
    return $this->view->render($response, 'design.html', [
    ]);
});

$app->post('/blog/create/{id}', function (Request $request, Response $response) {
});


$app->post('/about', function (Request $request, Response $response) {
    $data = $request->getParsedBody();
    $submit = [];
    $submit['email'] = filter_var($data['req-email'], FILTER_SANITIZE_STRING);
    $submit['description'] = filter_var($data['description'], FILTER_SANITIZE_STRING);
    $submit['message'] = filter_var($data['message'], FILTER_SANITIZE_STRING);
    $submit['name'] = filter_var($data['req-name'], FILTER_SANITIZE_STRING);

    $ip = $_SERVER['REMOTE_ADDR'];
    $ref = $_SERVER['HTTP_REFERER'];

    $usrAgent = $_SERVER['HTTP_USER_AGENT'];
    $myfile = file_put_contents('../data/logs.txt', $usrAgent .' '. $ip.PHP_EOL , FILE_APPEND);

    if(isset($data['pot']) && $data['pot'] != ''){
        $myfile = file_put_contents('../data/logs.txt', 'BOT'.PHP_EOL , FILE_APPEND);
        $message = array(
            'message' => "I'm sorry something went wrong, please try again.",
            'type' => 'failure'
            );
    } else {

        if(!isset($_POST) || empty($data['req-name'])) {
            $myfile = file_put_contents('../data/logs.txt', 'Empty Post'.PHP_EOL , FILE_APPEND);
            return;
        }
        $reff =  $data['ref'];
        $to = 'hello@rebeccacs.com, rcselvig@gmail.com';

        $subject = 'Website Form Submission';

        $headers = "From: hello@rebeccacs.com\r\n";
        $headers .= "Reply-To: ". $submit['email'] . "\r\n";
        $headers .= "MIME-Version: 1.0\r\n";
        $headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";

        $message = '<html><body><table>';
        $message .= "<tr><td><strong>Name:</strong> </td><td>" . $submit['name'] . "</td></tr>";
        $message .= "<tr><td><strong>Email:</strong> </td><td>" . $submit['email'] . "</td></tr>";
        $message .= "<tr><td><strong>Message:</strong> </td><td>" . $submit['message'] . "</td></tr>";
        $message .= "<tr><td><strong>Server Referrer:</strong> </td><td>" . $ref . "</td></tr>";
        $message .= "<tr><td><strong>Website Referrer:</strong> </td><td>" . $reff . "</td></tr>";
        $message .= "<tr><td><strong>IP:</strong> </td><td>" . $ip . "</td></tr>";
        $message .= "</table>";
        $message .= "</body></html>";


        if(mail($to, $subject, $message, $headers)) {
            $message = array(
                'message' => "Thank you, I'll be in touch soon!",
                'type' => 'success'
                );
            $myfile = file_put_contents('../data/logs.txt','worked'.PHP_EOL , FILE_APPEND);
        } else {
            $message = array(
                'message' => "I'm sorry something went wrong, please try again.",
                'type' => 'failure'
                );
            $myfile = file_put_contents('../data/logs.txt', 'failed'.PHP_EOL , FILE_APPEND);
        }
    }

    $message = json_encode($message);
    echo $message;
});


$app->run();