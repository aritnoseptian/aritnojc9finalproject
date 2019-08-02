import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class Register extends Component{
    render(){
        return(
            <div>
                
                <div className = 'mt-5 row'>
                    <div className = 'col-sm-4 mx-auto card'>
                        <div className = 'card-body'>
                            <div className = ' border-bottom border-secondary card-title'>
                                <h1>Register</h1>
                            </div>

                            <div className='card-title'>
                                <h4>Username</h4>
                            </div>
                            <from className='input-group'>
                                <input className='form-control' type='text'
                                    
                                />
                            </from>

                            <div className='card-title'>
                                <h4>Usia</h4>
                            </div>
                            <from className='input-group'>
                                <input className='form-control'
                                    
                                />
                            </from>

                            <div className='card-title'>
                                <h4>Jenis kelamin</h4>
                            </div>
                            <from className='input-group'>
                                <input className='form-control'
                                    
                                />
                            </from>


                            <div className='card-title'>
                                <h4>email</h4>
                            </div>
                            <from className='input-group'>
                                <input className='form-control'
                                    
                                />
                            </from>

                            
                            <div className='card-title'>
                                <h4>password</h4>
                            </div>
                            <from className='input-group'>
                                <input className='form-control' type='password'
                                    
                                />
                            
                                
                            </from>
                            <button  className='btn btn-success'>Click for Register</button>
                                <p>Sudah Punya akun ?</p> 
                                <p><Link to="/login" >Login Disini</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Register