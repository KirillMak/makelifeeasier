<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\TaskRepository")
 */
class Task
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    // add your own fields
     /**
     * @ORM\Column(type="integer")
     */
    private $owner_id;

    // add your own fields
     /**
     * @ORM\Column(type="integer")
     */
    private $priority;
    /**
     * @ORM\Column(type="string", length=100)
     */
    private $title;

   
    /**
     * @ORM\Column(type="string",length=100)
     */
    private $category;

    /**
     * @ORM\Column(type="datetime")
     */
    private $created;
    /**
     * @ORM\Column(type="datetime")
     */
    private $deadline;
    /**
     * @ORM\Column(type="text",length=5000)
     */
    private $content;
    /**
     * @ORM\Column(type="string",length=300)
     */
    private $additional;

    /**
     * @ORM\Column(type="boolean")
     */
    private $is_deleted;
    

    public function getId()
    {
        return $this->id;
    }

    public function getOwnerId()
    {
        return $this->ownerId;
    }
    public function getPriority()
    {
        return $this->priority;
    }
    public function getTitle()
    {
        return $this->title;
    }
    public function getCategory()
    {
        return $this->category;
    }
    public function getCreated()
    {
        return $this->created;
    }
    public function getDeadline()
    {
        return $this->deadline;
    }
    public function getContent()
    {
        return $this->content;
    }
    public function getAdditional()
    {
        return $this->additional;
    }

    public function getIsDeleted()
    {
        return $this->is_deleted;
    }

    public function getOwner_id()
    {
        return $this->owner_id;
    }

    public function setPriority($priority)
    {
        $this->priority = $priority;
    }

    public function setTitle($title)
    {
        $this->title = $title;
    }

    public function setCategory($category)
    {
        $this->category = $category;
    }

    public function setCreated($created)
    {
        $this->created = $created;
    }

    public function setDeadline($deadline)
    {
        $this->deadline = $deadline;
    }

    public function setContent($content)
    {
       $this->content = $content;
    }
    public function setAdditional($additional)
    {
       $this->additional = $additional;
    }

    public function setIsDeleted($IdDeleted)
    {
       $this->is_deleted = $IdDeleted;
    }
    public function setOwner($owner_id)
    {
       $this->owner_id = $owner_id;
    }

}
