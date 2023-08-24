package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DatabaseLoader implements CommandLineRunner {

	private final AlumnoRepository repositoryAlumno;
	private final CursoRepository repositoryCurso;
	private final MatriculaRepository repositorioMatricula;
	private final SeccionRepository repositorioSeccion;


	@Autowired
	public DatabaseLoader(AlumnoRepository repositoryAlumno, CursoRepository repositoryCurso,
						  MatriculaRepository repositorioMatricula, SeccionRepository repositorioSeccion) {
		this.repositoryAlumno = repositoryAlumno;
		this.repositoryCurso = repositoryCurso;
		this.repositorioMatricula = repositorioMatricula;
		this.repositorioSeccion = repositorioSeccion;
	}

	@Override
	public void run(String... strings) throws Exception {
		this.repositoryAlumno.save(new Alumno("David", "Salinas", "PI73117002"));
		this.repositoryAlumno.save(new Alumno("Juan", "Sandoval", "SM65329874"));

		//Alumno
		Alumno a1 = new Alumno("David", "Salinas Portilla", "PI73117002");
		this.repositoryAlumno.save(a1);
		Alumno a2 = new Alumno("Jose", "Portocarrero Mio", "SM79541238");
		this.repositoryAlumno.save(a2);

		this.repositoryAlumno.save(new Alumno("Alvaro", "Perez", "CH12548936"));
		this.repositoryCurso.save(new Curso("Servicios WEB", "5"));
		this.repositoryCurso.save(new Curso("Aplicaciones Móviles", "4"));
		
		//Curso
		Curso c1 = new Curso("Aplicaciones con enfoque orientado a servicios", "4");
		this.repositoryCurso.save(c1);

		//Seccion
		Seccion s = new Seccion("V.05.2023-IIE");
		this.repositorioSeccion.save(s);

		//Matricula
		this.repositorioMatricula.save(new Matricula(s,a1,c1));
	}
}