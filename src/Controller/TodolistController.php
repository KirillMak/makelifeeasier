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


   class TodolistController extends Controller 
   {
       
       public function indexAction()
       {
                $em = $this->getDoctrine()->getManager();
                //$tasks = $this -> getDoctrine()
                //-> getRepository($em, 'Task::class')
               // ->findAll();
                $tasks = $this->get('doctrine.orm.entity_manager')->getRepository(Task::class)->findByDeleted(0);
               // var_dump( $tasks[1]);
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
             
            
             return $this->render('base/index.html.twig', array( 
                 'tasks' => $tasks
             ));   
       }

       
       public function editAction($id, Request $request)
       {
            $task = $this->get('doctrine.orm.entity_manager')->getRepository(Task::class)->find($id);
            //var_dump ($task);

            //$task-> SetOwner($task -> getOwnerId());
            //var_dump($task);
            $task-> setTitle($task -> getTitle());
            $task-> setDeadline($task -> getDeadline());
            $task-> setContent($task-> getContent());
            $task-> setAdditional($task ->getAdditional());
            $task-> setCategory($task-> getCategory());
            $task-> setPriority($task -> getPriority());
            //$task-> setCreated($now);
            //$task-> setIsDeleted($isDeleted);*/

            $form = $this ->createFormBuilder($task)
            ->add('title', TextType::class,array('attr'=> array('class' => 'form-control')))
            ->add('deadline',DateTimeType::class,array('attr'=>array('class'=>'form-control')))
            ->add('content',TextareaType::class, array('attr'=>array('class'=>'form-control','rows' => '10')))
            ->add('additional',TextType::class, array('attr'=>array('class'=>'form-control')))
            ->add('category',TextType::class, array('attr'=>array('class'=>'form-control')))
            ->add('priority',ChoiceType::class, array('choices'=>array('Low'=>'1','Medium'=>'2','High'=>'3'),'attr'=>array('class'=>'form-control')))
            ->add('save',SubmitType::class,array('label'=>'Редактировать задание','attr'=>array('class'=>'form-control')))
            ->getForm();

            //array('class'=>array('form-control','class'=> 'btn-success','class'=>'btn'))))

            $form -> handleRequest($request);

            if($form->isSubmitted() && $form->isValid() ){
                //var_dump($_POST);
               // var_dump($_SERVER);
               $title = $form['title']->getData();
               $deadline = $form['deadline']->getData();
               $content = $form['content']->getData();
               $additional = $form['additional']->getData();
               $priority = $form['priority']->getData();
               $category = $form['category']->getData();
    
               $isDeleted = false;
               $owner_id = 1;
               $now = new\DateTime('now');
    
               $task-> SetOwner($owner_id);
               $task-> setTitle($title);
               $task-> setDeadline($deadline);
               $task-> setContent($content);
               $task-> setAdditional($additional);
               $task-> setCategory($category);
               $task-> setPriority($priority);
               $task-> setCreated($now);
               $task-> setIsDeleted($isDeleted);
              // var_dump($task);
               $em = $this->getDoctrine()->getManager();
    
               $em->persist($task);
               //var_dump($em);
               $em->flush();
               //var_dump($_POST);
               //die ('test');
            }

            //return $this->render('test.html.twig'); 
           
            return $this->render('crud/edit.html.twig', array(
                'form'=> $form->createView(),'task' => $task
            )); 
       }

       public function addAction(Request $request )
       {
        //var_dump($request);
        $task = new Task;
        $form = $this ->createFormBuilder($task)
            ->add('title', TextType::class,array('attr'=> array('class' => 'form-control')))
            ->add('deadline',DateTimeType::class,array('attr'=>array('class'=>'form-control')))
            ->add('content',TextareaType::class, array('attr'=>array('class'=>'form-control')))
            ->add('additional',TextType::class, array('attr'=>array('class'=>'form-control')))
            ->add('category',TextType::class, array('attr'=>array('class'=>'form-control')))
            ->add('priority',ChoiceType::class, array('choices'=>array('Low'=>'1','Medium'=>'2','High'=>'3'),'attr'=>array('class'=>'form-control')))
            ->add('save',SubmitType::class,array('label'=>'Добавить задание','attr'=>array('class'=>'form-control'))) 
            ->getForm();
        $form -> handleRequest($request);
       
        if($form->isSubmitted() && $form->isValid() ){
            //var_dump($_POST);
           // var_dump($_SERVER);
           $title = $form['title']->getData();
           $deadline = $form['deadline']->getData();
           $content = $form['content']->getData();
           $additional = $form['additional']->getData();
           $priority = $form['priority']->getData();
           $category = $form['category']->getData();

           $isDeleted = false;
           $owner_id = 1;
           $now = new\DateTime('now');

           $task-> SetOwner($owner_id);
           $task-> setTitle($title);
           $task-> setDeadline($deadline);
           $task-> setContent($content);
           $task-> setAdditional($additional);
           $task-> setCategory($category);
           $task-> setPriority($priority);
           $task-> setCreated($now);
           $task-> setIsDeleted($isDeleted);
          // var_dump($task);
           $em = $this->getDoctrine()->getManager();

           $em->persist($task);
           //var_dump($em);
           $em->flush();
           //var_dump($_POST);
           //die ('test');
        }
            
            return $this->render('crud/add.html.twig',array(
                'form'=> $form->createView()
            )); 
       }

       public function showAction($id, Request $request){
            $task = $this->get('doctrine.orm.entity_manager')->getRepository(Task::class)->find($id);


            return $this ->render('crud/show.html.twig',array('task' => $task));
       }
   }
?>