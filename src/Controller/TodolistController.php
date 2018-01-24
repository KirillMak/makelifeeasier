<?php
    //namespace App;
    namespace App\Controller;
    use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
    use Symfony\Bundle\FrameworkBundle\Controller\Controller;
    use Symfony\Component\HttpFoundation\Request;
    use Symfony\Component\HttpFoundation\Response;

   class TodolistController extends Controller 
   {
       /**
        * @Route("/", name = "homepage")
        */
       public function IndexAction()
       {
           return $this->render('index.html.twig');
       }
   }
?>