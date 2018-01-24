<?php
    //namespace App;
    namespace App\Controller;
    use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
    use Symfony\Bundle\FrameworkBundle\Controller\Controller;
    use Symfony\Component\HttpFoundation\Request;
    use Symfony\Component\HttpFoundation\Response;

    use App\Entity\Product;
    use Doctrine\ORM\EntityManagerInterface;
    use Doctrine\Common\Persistence\ManagerRegistry;
    


   class TodolistController extends Controller 
   {
       
       public function IndexAction()
       {
                 $em = $this->getDoctrine()->getManager();
        
                $product = new Product();
                $product->setName('Keyboard');
                $product->setPrice(19.99);
               
        
                // tell Doctrine you want to (eventually) save the Product (no queries yet)
                $em->persist($product);
        
                // actually executes the queries (i.e. the INSERT query)
                $em->flush();
        
             return $this->render('index.html.twig');   
       }
   }
?>