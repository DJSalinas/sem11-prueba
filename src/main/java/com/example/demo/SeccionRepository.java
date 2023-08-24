package com.example.demo;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "secciones", path = "secciones")
public interface SeccionRepository extends PagingAndSortingRepository<Seccion,Long> ,CrudRepository<Seccion, Long> {
    
    List<Seccion> findByNombre(@Param("nombre") String nombre);
}
