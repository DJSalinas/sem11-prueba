const React = require('react');
const {useState} = require('react')
const { Link } = require('react-router-dom');
const client = require('../client');


const NuevoCursoPage = () => {

    const [nombre, setNombre] = useState('')
    const [creditos, setCreditos] = useState('')

    const handleSubmit = (evento) => {
        evento.preventDefault();
        client({
            method: 'POST',
            path:'/api/cursos',
            entity:{nombre:nombre, creditos:creditos},
            headers: {'Content-Type': 'application/json'}
        }).done(() => {
            window.location = '/';
        })
    }

    return (
        <>
            <h1>Nuevo Alumno</h1>
            <form onSubmit={handleSubmit}>
                <label>Nombre</label><br/>
                <input type='text' id='nombre' name='nombre' onChange={e=>setNombre(e.target.value)}/><br/>
                <label>Créditos</label><br/>
                <input type='text' id='creditos' name='creditos' onChange={e=>setCreditos(e.target.value)}/><br/>
                
                <input type='submit' value="Guardar Curso" />
            </form>
            <Link to="/">Volver</Link>
        </>
    )
}

module.exports = NuevoCursoPage;