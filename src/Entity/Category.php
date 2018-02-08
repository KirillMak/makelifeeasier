<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\CategoryRepository")
 */
class Category
{
    /**
     * @ORM\id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $cat_id;

    // add your own fields
    /**
     * @ORM\Column(type="string", unique=true)
     */
    private $cat_title;

    public function getId(){
        return $this->$cat_id;
    }
    public function getTitle(){
        return $this->$category;
    }

    public function setId($cat_id){
         $this->cat_id = $cat_id;
    }

    public function setTitle($cat_title){
        $this->cat_title = $cat_title;
   }
}
