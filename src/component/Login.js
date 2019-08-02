import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class Login extends Component{
    render(){
        return(
            <div>
                    <div className = 'mt-5 row'>
                        <div className = 'col-sm-4 mx-auto card'>
                            <div className = 'card-body'>
                                <div className = ' border-bottom border-secondary card-title'>
                                    <h1>Login User</h1>
                                </div>
    
                                <div className='card-title'>
                                    <h4>Username</h4>
                                </div>
                                <form className='input-group'>
                                    <input className='form-control' type='text'
                                
                                    />
                                </form>
    
                                <div className='card-title'>
                                    <h4>Password</h4>
                                </div>
                                <form className='input-group'>
                                    <input className='form-control' type='password'
                                        
                                    />
                                </form>
    
                                <button className='btn btn-success'>Click for Login</button>
                                <p>Belum memiliki akun ?</p> 
                                <p><Link to="/register">Daftar disini</Link></p>
                            </div>
                        </div>
                    </div>
    
                </div>
        )
    }
}

export default Login