package com.example.demo;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class Matricula {

    private @Id @GeneratedValue Long id;
    
    @ManyToOne()
    @JoinColumn(name = "id_seccion")
    private Seccion seccion;

    @ManyToOne()
    @JoinColumn(name = "id_alumno")
    private Alumno alumno;

    @ManyToOne()
    @JoinColumn(name = "id_curso")
    private Curso curso;

    public Matricula(){}

    public Matricula(Seccion seccion, Alumno alumno, Curso curso) {
        this.seccion = seccion;
        this.alumno = alumno;
        this.curso = curso;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Seccion getSeccion() {
        return seccion;
    }

    public void setSeccion(Seccion seccion) {
        this.seccion = seccion;
    }

    public Alumno getAlumno() {
        return alumno;
    }

    public void setAlumno(Alumno alumno) {
        this.alumno = alumno;
    }

    public Curso getCurso() {
        return curso;
    }

    public void setCurso(Curso curso) {
        this.curso = curso;
    }
    
}
