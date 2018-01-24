<?php

namespace App\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Response;

class ProductController extends Controller
{
    
    public function index()
    {
      
        // you can fetch the EntityManager via $this->getDoctrine()
        // or you can add an argument to your action: index(EntityManagerInterface $em)
        $em = $this->getDoctrine()->getManager();
        
                $product = new Product();
                $product->setName('Keyboard');
                $product->setPrice(19.99);
                $product->setDescription('Ergonomic and stylish!');
        
                // tell Doctrine you want to (eventually) save the Product (no queries yet)
                $em->persist($product);
        
                // actually executes the queries (i.e. the INSERT query)
                $em->flush();
        
                //return new Response('Saved new product with id '.$product->getId());

                return $this->render('test.html.twig');
    }
}
?>