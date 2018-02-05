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
     

 
     class AjaxController extends Controller 
     {
        public function ajaxAction(Request $request)    
        {
            /*if ($request->isXMLHttpRequest()) {         
                return new JsonResponse(array('data' => 'this is a json response'));
            }
            */
           $data = $request -> request -> get('id');
            //var_dump($data);

           // var_dump($data);

            //var_dump($_POST);
           // var_dump($_GET);
            
            $em = $this->getDoctrine()->getManager();
            $task = $this->get('doctrine.orm.entity_manager')->getRepository(Task::class)->find($data);

            $isDeleted = true;
            $task-> setIsDeleted($isDeleted);
            
            $em -> persist($task);
            $em ->flush();
            
            
            return new Response('success!');
        }
    }

?>