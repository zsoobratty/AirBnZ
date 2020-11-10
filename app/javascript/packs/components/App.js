import React from 'react'
import { hot } from 'react-hot-loader/root'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import NavBar from './NavBar'
import Home from './Home'
import Spaces from './Space/Spaces'
import '../main.css'

const App = () => {

    return (
        <div className='App'>
            <Router>
            <NavBar/>
                <Route exact path='/'>
                    <Home />
                </Route>
                <Route path='/spaces'>
                    <Spaces />
                </Route>
            </Router>
        </div>
    )
}

export default hot(App)
