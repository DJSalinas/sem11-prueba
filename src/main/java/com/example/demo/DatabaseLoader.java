package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DatabaseLoader implements CommandLineRunner {

	private final AlumnoRepository repositoryAlumno;
	private final CursoRepository repositoryCurso;

	@Autowired
	public DatabaseLoader(AlumnoRepository repositoryAlumno, CursoRepository repositoryCurso) {
		this.repositoryAlumno = repositoryAlumno;
		this.repositoryCurso = repositoryCurso;
	}

	@Override
	public void run(String... strings) throws Exception {
		this.repositoryAlumno.save(new Alumno("David", "Salinas", "PI73117002"));
		this.repositoryAlumno.save(new Alumno("Juan", "Sandoval", "SM65329874"));
		this.repositoryAlumno.save(new Alumno("Alvaro", "Perez", "CH12548936"));
		this.repositoryCurso.save(new Curso("Servicios WEB", "5"));
		this.repositoryCurso.save(new Curso("Aplicaciones Móviles", "4"));
	}
}