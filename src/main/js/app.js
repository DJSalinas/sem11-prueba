const React = require('react');
const ReactDOM = require('react-dom');

const client = require('./client');

class App extends React.Component {
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
				<h2>Lista de Alumnos</h2>
				<AlumnoList alumnos={this.state.alumnos}/>
				<hr />
				<h2>Lista de Cursos</h2>
				<CursoList cursos={this.state.cursos}/>
			</>
		)
	}
}

class AlumnoList extends React.Component{
	render() {
		const alumnos = this.props.alumnos.map(alumno =>
			<Alumno key={alumno._links.self.href} alumno={alumno}/>
		);
		return (
			<table>
				<tbody>
					<tr>
						<th>Nombre</th>
						<th>Apellido</th>
						<th>Código</th>
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
			<table>
				<tbody>
					<tr>
						<th>Nombre</th>
						<th>Creditos</th>
					</tr>
					{cursos}
				</tbody>
			</table>
		)
	}
}

class Alumno extends React.Component{
	render() {
		return (
			<tr>
				<td>{this.props.alumno.nombre}</td>
				<td>{this.props.alumno.apellido}</td>
				<td>{this.props.alumno.codigo}</td>
			</tr>
		)
	}
}

class Curso extends React.Component{
	render() {
		return (
			<tr>
				<td>{this.props.curso.nombre}</td>
				<td>{this.props.curso.creditos}</td>
			</tr>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('react'))
