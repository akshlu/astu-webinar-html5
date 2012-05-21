<?php

namespace Webinar\HelloBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Webinar\HelloBundle\Entity\Application;

class WebinarApplicationController extends Controller
{
    public function webinarAction($id_webinar) {
        return $this->render('WebinarHelloBundle:Webinar:webinar.html.twig');
    }

    public function getSettingsAction($id_webinar) {

        $webinar = $this->getDoctrine()->getRepository('WebinarHelloBundle:Webinar')->find($id_webinar);
        if (!$webinar) {
            throw $this->createNotFoundException('No webinar found');
        }

        return $this->render('WebinarHelloBundle:Webinar:getsettings.json.twig', array('id_webinar' => $id_webinar));
    }
}