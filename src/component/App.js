import React, { Component } from 'react'
import { Route, BrowserRouter } from 'react-router-dom'

import Register from './Register'
import Login from './Login'
import Header from './Header'
import Home from './Home'
import ManagerProduck from './ManagerProduck'

class App extends Component{
    render(){
        return(
            <BrowserRouter>
                <div>
                    <Header/>
                    <Route path="/" exact component={Home}/>
                    <Route path="/register" component={Register}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/managerproduck" component={ManagerProduck}/>
                </div>
            </BrowserRouter>
        )
    }
} 

export default App