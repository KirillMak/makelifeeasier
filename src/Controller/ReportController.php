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
    
    use Symfony\Component\Form\Extension\Core\Type\TextType;
    use Symfony\Component\Form\Extension\Core\Type\TextareaType;
    use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
    use Symfony\Component\Form\Extension\Core\Type\DateTimeType;
    use Symfony\Component\Form\Extension\Core\Type\SubmitType;

    class ReportController extends Controller {
        public function showReportAction(Request $request){
            return $this->render('report/report.html.twig'); 
        }
    }
?>