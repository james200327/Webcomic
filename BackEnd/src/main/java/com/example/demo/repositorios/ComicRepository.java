package com.example.demo.repositorios;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entidades.Comic;

public interface ComicRepository extends JpaRepository<Comic, Long>{
	
	
}
