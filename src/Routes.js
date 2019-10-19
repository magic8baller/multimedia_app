import React from 'react'
import {Route, Switch} from 'react-router-dom'
import App from './App'
import Home from './components/Home.js'
import Poems from './components/Poems'
const Routes = () => {
	return (
		<div>
			<Switch>

				<Route exact path="/" component={App} />
				<Route path='/poems' component={Poems} />
				<Route path='/home' component={Home} />
			</Switch>
		</div>
	)
}

export default Routes
