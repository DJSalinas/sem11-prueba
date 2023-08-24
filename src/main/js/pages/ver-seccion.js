const React = require('react');
const { Link, useParams } = require('react-router-dom');
const { useState, useEffect } = require('react');
const client = require('../client');

const VerSeccionPage = () => {

    let { id } = useParams();
    const [seccion, setSeccion] = useState({});
    const [matriculas, setMatriculas] = useState([]);

    useEffect(() => {
        client({
            method: 'GET',
            path: '/api/secciones/' + id
        }).done(response => setSeccion(response.entity))
        client({
            method: 'GET',
            path: '/api/secciones/' + id + '/formacion'
        }).done(response => setMatriculas(response.entity))
    }, [])


    return (
        <>
            <h1>Ver Seccion</h1>
            <hr />

            <table border="1">
                <tbody>
                    <tr>
                        <th>Nombre</th>
                        <td>{seccion.nombre}</td>
                    </tr>
                </tbody>
            </table>
            <hr />

            <h2>Alumnos</h2>
            <table border="1">
                <thead>
                    <tr>
                        <th>Alumno</th>
                        <th>Curso</th>
                    </tr>
                </thead>
                <tbody>

                    {matriculas.map(matricula=>{
                        return(
                            <tr key={matricula.ID}>
                                <td>{matricula.ALUMNO}</td>
                                <td>{matricula.CURSO}</td>
                            </tr>
                        )
                    })}

                </tbody>

            </table>

            <hr />
            <Link to={`/ver-seccion/${id}/nuevo-matricula`}>Nuevo Alumno</Link> |
            <Link to="/">Volver</Link>
        </>
    )

}

module.exports = VerSeccionPage;