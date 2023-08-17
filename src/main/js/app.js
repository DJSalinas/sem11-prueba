const React = require('react');
const ReactDOM = require('react-dom');
const {createBrowserRouter, RouterProvider} = require('react-router-dom');

const HomePage = require('./pages/home');
const NuevoAlumnoPage = require('./pages/nuevo-alumno');
const VerAlumnoPage = require('./pages/ver-alumno');
const NuevoCursoPage = require('./pages/nuevo-curso');
const VerCursoPage = require('./pages/ver-curso');

const router = createBrowserRouter([
	{ path: '/', element:<HomePage /> },
	{ path: '/ver-alumno/:id', element:<VerAlumnoPage /> },
	{ path: '/nuevo-alumno', element:<NuevoAlumnoPage /> },
	{ path: '/nuevo-curso', element:<NuevoCursoPage /> },
	{ path: '/ver-curso/:id', element:<VerCursoPage /> },
])

ReactDOM.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>, 
	document.getElementById('react'))
