<?php
$ip = $_SERVER['REMOTE_ADDR'];
$ref = $_SERVER['HTTP_REFERER'];

$usrAgent = $_SERVER['HTTP_USER_AGENT'];
$myfile = file_put_contents('logs.txt', $usrAgent .' '. $ip.PHP_EOL , FILE_APPEND);

if(isset($_POST['pot']) && $_POST['pot'] != ''){
	$myfile = file_put_contents('logs.txt', 'BOT'.PHP_EOL , FILE_APPEND);
	$message = array(
		'message' => "I'm sorry something went wrong, please try again.",
		'type' => 'failure'
		);
} else {

	if(!isset($_POST) || empty($_POST['req-name'])) {
		$myfile = file_put_contents('logs.txt', 'Empty Post'.PHP_EOL , FILE_APPEND);
		break;
	}
	$reff = $_POST['ref'];
	$to = 'hello@rebeccacs.com, rcselvig@gmail.com';

	$subject = 'Website Form Submission';

	$headers = "From: hello@rebeccacs.com\r\n";
	$headers .= "Reply-To: ". strip_tags($_POST['req-email']) . "\r\n";
	$headers .= "MIME-Version: 1.0\r\n";
	$headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";

	$message = '<html><body><table>';
	$message .= "<tr><td><strong>Name:</strong> </td><td>" . strip_tags($_POST['req-name']) . "</td></tr>";
	$message .= "<tr><td><strong>Email:</strong> </td><td>" . strip_tags($_POST['req-email']) . "</td></tr>";
	$message .= "<tr><td><strong>Message:</strong> </td><td>" . strip_tags($_POST['message']) . "</td></tr>";
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
		$myfile = file_put_contents('logs.txt','worked'.PHP_EOL , FILE_APPEND);
	} else {
		$message = array(
			'message' => "I'm sorry something went wrong, please try again.",
			'type' => 'failure'
			);
		$myfile = file_put_contents('logs.txt', 'failed'.PHP_EOL , FILE_APPEND);
	}
}

$message = json_encode($message);
echo $message;
