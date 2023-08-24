package com.example.demo;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class HomeController {

	@Autowired
	private JdbcTemplate jdbcTemplate;

	@RequestMapping(value = "/")
	public String index() {
		return "index";
	}

	@GetMapping(path = "/api/secciones/{id}/formacion")
	public @ResponseBody List<Map<String, Object>> formacion(@PathVariable Integer id){
		String sql = "SELECT matricula.id as ID, alumno.nombre as ALUMNO, curso.nombre as CURSO FROM matricula JOIN alumno ON matricula.id_alumno=alumno.id JOIN curso ON matricula.id_curso=curso.id WHERE matricula.id_seccion = ?";
		List<Map <String, Object>> queryResult = jdbcTemplate.queryForList(sql, id);
		return queryResult;
	}

}