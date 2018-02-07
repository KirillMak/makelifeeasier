<?php

namespace App\Entity;

use Symfony\Component\Security\Core\User\UserInterface;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity
 * @ORM\Table(name="user")
 */
class User implements UserInterface
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", unique=true)
     */
    private $username;
     /**
     * @ORM\Column(type="string", unique=true)
     */
    private $surname;
    /**
     * @ORM\Column(type="string", unique=true)
     */
    private $lastname;

    /**
     * @ORM\Column(type="string", unique=true)
     */
    private $mail;
     /**
     * @ORM\Column(type="string")
     */
    private $password;
    /**
     * @ORM\Column(type="string", unique=true)
     */
    private $apiKey;

    public function getUsername()
    {
        return $this->username;
    }

    public function getRoles()
    {
        return array('ROLE_USER');
    }

    public function getPassword()
    {
        return $this->password;
    }
    public function getSalt()
    {
    }
    public function eraseCredentials()
    {
    }

    public function getSurname(){
        return $this->$surname;
    }

    public function getLastname(){
        return $this->$surname;
    }

    public function setUsername($username){
        $this -> username = $username;
    }
    public function setSurname($surname){
        $this -> surname = $surname;
    }
    public function setLastname($lastname){
        $this -> lastname = $lastname;
    }
    public function setMail($mail){
        $this -> mail = $mail;
    }
    public function setPassword($password){
        $this -> password = $password;
    }
    public function setApikey($apiKey){
        $this -> apiKey = $apiKey;
    }
    // more getters/setters
}
