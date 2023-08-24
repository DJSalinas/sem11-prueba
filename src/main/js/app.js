const React = require('react');
const ReactDOM = require('react-dom');
const {createBrowserRouter, RouterProvider} = require('react-router-dom');

const HomePage = require('./pages/home');
const NuevoAlumnoPage = require('./pages/nuevo-alumno');
const VerAlumnoPage = require('./pages/ver-alumno');
const NuevoCursoPage = require('./pages/nuevo-curso');
const VerCursoPage = require('./pages/ver-curso');
const EditarAlumnoPage = require('./pages/editar-alumno');
const EditarCursoPage = require('./pages/editar-curso');

const router = createBrowserRouter([
	{ path: '/', element:<HomePage /> },
	{ path: '/ver-alumno/:id', element:<VerAlumnoPage /> },
	{ path: '/nuevo-alumno', element:<NuevoAlumnoPage /> },
	{ path: '/editar-alumno/:id', element:<EditarAlumnoPage /> },
	{ path: '/nuevo-curso', element:<NuevoCursoPage /> },
	{ path: '/ver-curso/:id', element:<VerCursoPage /> },
	{ path: '/editar-curso/:id', element:<EditarCursoPage />}
])

ReactDOM.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>, 
	document.getElementById('react'))
