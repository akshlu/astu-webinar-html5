<?php

namespace Webinar\HelloBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Webinar\HelloBundle\Entity\Application;

class HelloController extends Controller {
    public function indexAction($name) {
        return $this->render('WebinarHelloBundle:Hello:index.html.twig', array('name' => $name));
    }

    public function getappAction() {
        $apps = $this->getDoctrine()->getRepository('WebinarHelloBundle:Application')->findAll();
        if (!$apps) {
            throw $this->createNotFoundException('No applications found');
        }

        print_r($apps);
        return $this->render('WebinarHelloBundle:Hello:getapp.html.twig', array('apps' => $apps));
    }
}