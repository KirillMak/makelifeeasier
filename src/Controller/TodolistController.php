<?php
    //namespace App;
    namespace App\Controller;
    use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
    use Symfony\Bundle\FrameworkBundle\Controller\Controller;
    use Symfony\Component\HttpFoundation\Request;
    use Symfony\Component\HttpFoundation\Response;

    use App\Entity\Task;
    use Doctrine\ORM\EntityManagerInterface;
    use Doctrine\Common\Persistence\ManagerRegistry;
    


   class TodolistController extends Controller 
   {
       
       public function IndexAction()
       {
                $em = $this->getDoctrine()->getManager();
                //$tasks = $this -> getDoctrine()
                //-> getRepository($em, 'Task::class')
               // ->findAll();
                $tasks = $this->get('doctrine.orm.entity_manager')->getRepository(Task::class)->findAll();
               // $product = new Product();
               // $product->setName('Keyboard');
               // $product->setPrice(19.99);
               //var_dump($tasks);
        
                // tell Doctrine you want to (eventually) save the Product (no queries yet)
               // $em->persist($product);
        
                // actually executes the queries (i.e. the INSERT query)
              //  $em->flush();
        
             // $task = new Task;
             // $task->getId();
              //$task->getOwnerId();
             
            
             return $this->render('index.html.twig', array( 
                 'tasks' => $tasks
             ));   
       }

       /**
        * 
        */
       public function EditAction()
       {
        return $this->render('test.html.twig'); 
       }
   }
?>