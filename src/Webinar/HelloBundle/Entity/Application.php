<?php

namespace Webinar\HelloBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity
 * @ORM\Table(name="application")
 */
class Application
{
    /**
     * @ORM\Id
     * @ORM\Column(type="integer")
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    protected $id_application;

    /**
     * @ORM\Column(type="text")
     */
    protected $name;

    /**
     * @ORM\Column(type="text")
     */
    protected $alias;

    /**
     * Get id_application
     * @return integer 
     */
    public function getIdApplication()
    {
        return $this->id_application;
    }

    /**
     * Set name
     * @param {text} $name
     */
    public function setName($name)
    {
        $this->name = $name;
    }

    /**
     * Get name
     * @return {text}
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * Set alias
     * @param {text} $alias
     */
    public function setAlias($alias)
    {
        $this->alias = $alias;
    }

    /**
     * Get alias
     * @return {text}
     */
    public function getAlias()
    {
        return $this->alias;
    }
}