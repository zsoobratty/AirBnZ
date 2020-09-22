import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './Home/Home'

const App = () => {

    return (
        <div>
            <Router>
                <Route path='/'>
                    <Home />
                </Route>
            </Router>
        </div>
    )
}

export default App
