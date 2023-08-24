package com.example.demo;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "matriculas", path = "matriculas")
public interface MatriculaRepository extends PagingAndSortingRepository<Matricula, Long> ,CrudRepository<Matricula, Long> {
    
   // List<Matricula> findByNombre(@Param("nombre") String nombre);
}
