const React = require('react');
const {useState, useEffect} = require('react')
const { Link, useParams } = require('react-router-dom');
const client = require('../client');


const EditarAlumnoPage = () => {

    const [alumno, setAlumno] = useState({})
    let {id} = useParams();

    useEffect( () => {
        client({
            method: 'GET',
            path: '/api/alumnos/' + id,
        }).done((response) => setAlumno(response.entity))
    }, [] )

    const handleSubmit = (evento) => {
        evento.preventDefault();
        client({
            method: 'PATCH',
            path:'/api/alumnos/' + id,
            entity: alumno,
            headers: {'Content-Type': 'application/json'}
        }).done(() => window.location = '/')
    }

    return (
        <>
            <h1>Editar Alumno</h1>
            <form onSubmit={handleSubmit}>
                <label>Nombre</label><br/>
                <input type='text' id='nombre' name='nombre' value={alumno.nombre} 
                onChange={e=>setAlumno({...alumno, nombre: e.target.value})}/><br/> 
                <label>Apellido</label><br/> 
                <input type='text' id='apellido' name='apellido' value={alumno.apellido} 
                onChange={e=>setAlumno({...alumno, apellido: e.target.value})}/><br/>
                <label>Código</label><br/>
                <input type='text' id='codigo' name='codigo' value={alumno.codigo} 
                onChange={e=>setAlumno({...alumno, codigo: e.target.value})}/><br/>

                <input type='submit' value="Guardar" />
            </form>
            <Link to="/">Volver</Link>
        </>
    )
}

module.exports = EditarAlumnoPage;