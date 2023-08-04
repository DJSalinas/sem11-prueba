package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DatabaseLoader implements CommandLineRunner {

	private final AlumnoRepository repository;

	@Autowired
	public DatabaseLoader(AlumnoRepository repository) {
		this.repository = repository;
	}

	@Override
	public void run(String... strings) throws Exception {
		this.repository.save(new Alumno("David", "Salinas", "PI73117002"));
		this.repository.save(new Alumno("Juan", "Sandoval", "SM65329874"));
		this.repository.save(new Alumno("Alvaro", "Perez", "CH12548936"));
	}
}