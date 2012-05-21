<?php

/* WebinarHelloBundle:Webinar:getsettings.json.twig */
class __TwigTemplate_242018326bf4c6508f31b5e61e816a2f extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = array(
        );
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        // line 1
        echo "{
    'id_user': '123',
    'status': 'owner',
    'id_webinar': '";
        // line 4
        echo twig_escape_filter($this->env, $this->getContext($context, "id_webinar"), "html", null, true);
        echo "',
    'nameOfUser': 'Алексей Устинов',
    'nodeServer': 'http://192.168.1.3:8123',
    'socketIOURL': 'http://192.168.1.3:8123/socket.io/socket.io.js'
}";
    }

    public function getTemplateName()
    {
        return "WebinarHelloBundle:Webinar:getsettings.json.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  22 => 4,  17 => 1,);
    }
}
