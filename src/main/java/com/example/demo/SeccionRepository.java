package com.example.demo;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "secciones", path = "secciones")
public interface SeccionRepository extends CrudRepository<Seccion, Long> {
    
}
