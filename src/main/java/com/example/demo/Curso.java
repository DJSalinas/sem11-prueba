package com.example.demo;

import java.util.Objects;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class Curso {

	private @Id @GeneratedValue Long id;
	private String nombre;
	private String creditos;

	private Curso() {}

	public Curso(String nombre, String creditos) {
		this.nombre = nombre;
		this.creditos = creditos;
	}


	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getCreditos() {
		return creditos;
	}

	public void setCreditos(String creditos) {
		this.creditos = creditos;
	}

	@Override
	public boolean equals(Object o) {
		if (this == o) return true;
		if (o == null || getClass() != o.getClass()) return false;
		Curso curso = (Curso) o;
		return Objects.equals(id, curso.id) &&
			Objects.equals(nombre, curso.nombre) &&
			Objects.equals(creditos, curso.creditos);
	}

	@Override
	public int hashCode() {

		return Objects.hash(id, nombre, creditos);
	}


	@Override
	public String toString() {
		return "Instrumento{" +
			"id=" + id +
			", nombre='" + nombre + '\'' +
			", creditos='" + creditos + '\'' +
			'}';
	}

	
}