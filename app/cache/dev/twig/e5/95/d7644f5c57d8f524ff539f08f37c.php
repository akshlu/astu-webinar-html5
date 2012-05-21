<?php

/* WebinarHelloBundle:Webinar:webinar.html.twig */
class __TwigTemplate_e595d7644f5c57d8f524ff539f08f37c extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        $this->parent = $this->env->loadTemplate("::base.html.twig");

        $this->blocks = array(
            'stylesheets' => array($this, 'block_stylesheets'),
            'body' => array($this, 'block_body'),
            'javascripts' => array($this, 'block_javascripts'),
        );
    }

    protected function doGetParent(array $context)
    {
        return "::base.html.twig";
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        $this->parent->display($context, array_merge($this->blocks, $blocks));
    }

    // line 3
    public function block_stylesheets($context, array $blocks = array())
    {
        // line 4
        echo "    ";
        $this->displayParentBlock("stylesheets", $context, $blocks);
        echo "
    <link rel=\"stylesheet\" href=\"";
        // line 5
        echo twig_escape_filter($this->env, $this->env->getExtension('assets')->getAssetUrl("/bundles/webinarhello/scripts/extjs/resources/css/ext-all.css"), "html", null, true);
        echo "\">
";
    }

    // line 8
    public function block_body($context, array $blocks = array())
    {
        // line 9
        echo "    ";
        $this->displayBlock('javascripts', $context, $blocks);
        // line 12
        echo "<!--Flash-->
<script type=\"text/javascript\" src=\"";
        // line 13
        echo twig_escape_filter($this->env, $this->env->getExtension('assets')->getAssetUrl("/bundles/webinarhello/scripts/swfobject.js"), "html", null, true);
        echo "\"></script>
<!--ExtJS-->
<script type=\"text/javascript\" src=\"";
        // line 15
        echo twig_escape_filter($this->env, $this->env->getExtension('assets')->getAssetUrl("/bundles/webinarhello/scripts/extjs/ext-all-debug-w-comments.js"), "html", null, true);
        echo "\"></script>
<!--Webinar application-->
<script type=\"text/javascript\" src=\"";
        // line 17
        echo twig_escape_filter($this->env, $this->env->getExtension('assets')->getAssetUrl("/bundles/webinarhello/scripts/app/app.js"), "html", null, true);
        echo "\"></script>

";
    }

    // line 9
    public function block_javascripts($context, array $blocks = array())
    {
        // line 10
        echo "        ";
        $this->displayParentBlock("javascripts", $context, $blocks);
        echo "
    ";
    }

    public function getTemplateName()
    {
        return "WebinarHelloBundle:Webinar:webinar.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  71 => 10,  68 => 9,  61 => 17,  56 => 15,  51 => 13,  48 => 12,  45 => 9,  42 => 8,  36 => 5,  31 => 4,  28 => 3,);
    }
}
