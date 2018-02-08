<?php

namespace App\Repository;

use App\Entity\Category;
use App\Entity\Task;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

class CategoryRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, Category::class);
    }

    /*
    public function findBySomething($value)
    {
        return $this->createQueryBuilder('c')
            ->where('c.something = :value')->setParameter('value', $value)
            ->orderBy('c.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;

        $query = $this->createQueryBuilder('c')
        ->select('c')
        ->innerJoin('MyBundleName:ChildOne', 'co', 'WITH', 'co.id = c.id')
        ->innerJoin('MyBundleName:ChildTwo', 'ct', 'WITH', 'ct.id = c.id')
        ->orderBy('c.createdAt', 'DESC')
        ->where('co.group = :group OR ct.group = :group')
        ->setMaxResults(20);
        ->getQuery()
        ->getResult()
    }
    */

    public function findTasks()

    {
        return $this->getEntityManager()
        ->createQueryBuilder()
        ->select('t','c.cat_title')
        ->from(Task::class, 't')
        ->innerJoin(Category::class, 'c', 'with', 't.category = c.cat_id')
        ->where('t.is_deleted = 0')
       // ->orderBy('t.id', 'ASC')
        ->getQuery()
        ->getResult();
    }
    public function findCategory($id)

    {
        $em = $this->getEntityManager();

        $query = $em->createQuery(
            'SELECT *
            FROM App\Entity\Task t
            INNER JOIN App\Entity\Category c on  t.id = c.id
            WHERE t.id = :id'
        )->setParameter('id', $id);

        // returns an array of objects
        return $query->execute();
    }

  
}
