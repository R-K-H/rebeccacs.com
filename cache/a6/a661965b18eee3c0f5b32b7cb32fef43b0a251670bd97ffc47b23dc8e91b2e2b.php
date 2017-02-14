<?php

/* layout.html */
class __TwigTemplate_1a1225df340cc6921434f75e10e057b6ff75cbc1192a6ca127fd7b7541948c4b extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = array(
            'head' => array($this, 'block_head'),
            'title' => array($this, 'block_title'),
            'content' => array($this, 'block_content'),
            'footer' => array($this, 'block_footer'),
        );
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        // line 1
        echo "<html>
<head>
    ";
        // line 3
        $this->displayBlock('head', $context, $blocks);
        // line 7
        echo "</head>
<body>
    <div id=\"content\">";
        // line 9
        $this->displayBlock('content', $context, $blocks);
        echo "</div>
    <div id=\"footer\">
        ";
        // line 11
        $this->displayBlock('footer', $context, $blocks);
        // line 14
        echo "    </div>
</html>";
    }

    // line 3
    public function block_head($context, array $blocks = array())
    {
        // line 4
        echo "            <link rel=\"stylesheet\" href=\"style.css\" />
            <title>";
        // line 5
        $this->displayBlock('title', $context, $blocks);
        echo " - My Webpage</title>
        ";
    }

    public function block_title($context, array $blocks = array())
    {
    }

    // line 9
    public function block_content($context, array $blocks = array())
    {
    }

    // line 11
    public function block_footer($context, array $blocks = array())
    {
        // line 12
        echo "            &copy; Copyright 2011 by <a href=\"http://domain.invalid/\">you</a>.
        ";
    }

    public function getTemplateName()
    {
        return "layout.html";
    }

    public function getDebugInfo()
    {
        return array (  69 => 12,  66 => 11,  61 => 9,  51 => 5,  48 => 4,  45 => 3,  40 => 14,  38 => 11,  33 => 9,  29 => 7,  27 => 3,  23 => 1,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Twig_Source("", "layout.html", "/home/vagrant/Code/rebeccacs.com/templates/layout.html");
    }
}
