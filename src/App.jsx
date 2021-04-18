import React from 'react';
import './customStyles.css';
import { LandingPage } from './components/LandingPage.jsx';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
const App = () => {
	return (
		<Router>
			<LandingPage />
		</Router>
	);
};

export default App;
