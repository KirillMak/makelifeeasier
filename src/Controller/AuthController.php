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
    


   class AuthController extends Controller 
   {
       
       public function SigninAction()
       {

             return $this->render('auth/signin.html.twig');   
       }

     
   }
?>