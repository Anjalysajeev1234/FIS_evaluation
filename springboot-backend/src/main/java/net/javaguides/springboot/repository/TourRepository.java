package net.javaguides.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import net.javaguides.springboot.model.tourpackage;

public interface TourRepository extends JpaRepository<tourpackage,Long>{

}
