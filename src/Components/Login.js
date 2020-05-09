import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import {MyContext} from './CustomProvider';

class Login extends Component {
    render() {
        const LoginFormStyle = {
            display: "flex",
            alignItems: "center",
            marginTop: "20vh",
        }
        return (
            <>
                <MyContext.Consumer>
                    {(context) => 
                        <div className="splash-container" style={LoginFormStyle}>
                            <div className="card" style={{width: '400px'}}>
                                <div className="card-header text-center">
                                    <img className="logo-img mb-4" src="../assets/images/logo.png" alt="logo"/>
                                    <span className="splash-description">Please enter your crenditials.</span>
                                </div>
                                <div className="card-body">
                                    <form>
                                        <div className="form-group">
                                            <input className="form-control form-control-lg" id="username" type="text" placeholder="Username" autoComplete="off"/>
                                        </div>
                                        <div className="form-group">
                                            <input className="form-control form-control-lg" id="password" type="password" placeholder="Password"/>
                                        </div>
                                        <button type="button" onClick={context.handleLogin} className="btn btn-primary btn-lg btn-block">Sign in</button>
                                    </form>
                                </div>
                                <div className="card-footer bg-white p-0">
                                    <div className="card-footer-item card-footer-item-bordered text-center" style={{width: '100%'}}>
                                        <NavLink to="forgot-password" className="footer-link">Forgot Password</NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                </MyContext.Consumer>
            </>
        )
    }
}

export default Login
