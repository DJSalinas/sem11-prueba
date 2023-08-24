const React = require('react');
const client = require('../client');
const {Link} = require('react-router-dom')

class HomePage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {alumnos: [], cursos: []};
	}
	componentDidMount() {
		client({method: 'GET', path: '/api/alumnos'}).done(response => {
			this.setState({alumnos: response.entity._embedded.alumnos});
		});

		client({method: 'GET', path: '/api/cursos'}).done(response => {
			this.setState({cursos: response.entity._embedded.cursos});
		});
	}
	render() {
		return (
			<>
				<h1>Hola!! Mi Aplicativo</h1>
				<Titulo entidad="Alumnos" emoji="👨‍🎓" />
				<AlumnoList alumnos={this.state.alumnos}/>
                <Link to="/nuevo-alumno">Nuevo Alumno</Link>
				<Titulo entidad="Cursos" emoji="📝" />
				<CursoList cursos={this.state.cursos}/>
				<Link to="/nuevo-curso">Nuevo Curso</Link>
			</>
		)
	}
}

//Funcion de flecha
const Titulo = (props) => {
	return (
		<>
			<hr />
			<h2>{props.emoji} - {props.entidad}</h2>
			<hr />
			Lista completa de {props.entidad.toLowerCase()}
		</>
	)
}

class AlumnoList extends React.Component{
	render() {
		const alumnos = this.props.alumnos.map(alumno =>
			<Alumno key={alumno._links.self.href} alumno={alumno}/>
		);
		return (
			<table border="1">
				<tbody>
					<tr>
						<th>Nombre</th>
						<th>Apellido</th>
						<th>Acciones</th>
					</tr>
					{alumnos}
				</tbody>
			</table>
		)
	}
}

class CursoList extends React.Component{
	render() {
		const cursos = this.props.cursos.map(curso =>
			<Curso key={curso._links.self.href} curso={curso}/>
		);
		return (
			<table border="1">
				<tbody>
					<tr>
						<th>Nombre</th>
						<th>Acciones</th>
					</tr>
					{cursos}
				</tbody>
			</table>
		)
	}
}

class Alumno extends React.Component{
	render() {
		//split omite el separador  -- slice obtiene el ultimo valor
		const id = this.props.alumno._links.self.href.split("/").slice(-1)
		return (
			<tr>
				<td>{this.props.alumno.nombre}</td>
				<td>{this.props.alumno.apellido}</td>
				<td>
					<Link to={"/ver-alumno/" + id}>Detalle</Link> | 
					<Link to={"/editar-alumno/" + id}>Editar</Link>
				</td>
			</tr>
		)
	}
}

class Curso extends React.Component{
	render() {
		const id = this.props.curso._links.self.href.split("/").slice(-1)
		return (
			<tr>
				<td>{this.props.curso.nombre}</td>
				<td>
					<Link to={"ver-curso/" + id}>Detalle</Link> | 
					<Link to={"editar-curso/" + id}>Editar</Link>
				</td>
			</tr>
		)
	}
}

module.exports = HomePage