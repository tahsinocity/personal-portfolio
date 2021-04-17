import React from 'react';
import './customStyles.css';
import { Nav } from './components/Nav.jsx';
import { Projects } from './components/Projects.jsx';
import { About } from './components/About.jsx';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
const App = () => {
	return (
		<Router>
			<Nav />
			<Route path="/about" component={About} />
			<Route path="/projects" component={Projects} />
		</Router>
	);
};

export default App;
