<?php

namespace Webinar\HelloBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity
 * @ORM\Table(name="webinar")
 */
class Webinar
{
    /**
     * @ORM\Id
     * @ORM\Column(type="integer")
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    protected $id_webinar;

    /**
     * @ORM\Column(type="text")
     */
    protected $name;

    /**
     * Get id_webinar
     *
     * @return integer 
     */
    public function getIdWebinar()
    {
        return $this->id_webinar;
    }

    /**
     * Set name
     *
     * @param text $name
     */
    public function setName($name)
    {
        $this->name = $name;
    }

    /**
     * Get name
     *
     * @return text 
     */
    public function getName()
    {
        return $this->name;
    }
}