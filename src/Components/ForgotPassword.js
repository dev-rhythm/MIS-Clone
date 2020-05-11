import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import {MyContext} from './CustomProvider';

export class ForgotPassword extends Component {
    render() {
        const ForgotPasswordFormStyle = {
            display: 'flex',
            alignItems: 'center',
            marginTop: '20vh'
        }
        return (
            <>
                <MyContext.Consumer>
                    {(context) => 
                        <div className="splash-container" style={ForgotPasswordFormStyle}>
                            <div className="card" style={{width: '400px'}}>
                                <div className="card-header text-center">
                                    <img className="logo-img mb-4" src="../assets/images/logo.png" alt="logo"/>
                                    <span className="splash-description">Please enter your user information.</span>
                                </div>
                                <div className="card-body">
                                    <form>
                                        <p className="text-center">Don't worry, we'll send you an email to reset your password.</p>
                                        <div className="form-group">
                                            <input className="form-control form-control-lg" type="email" name="email" required="" placeholder="Your Email" autoComplete="off"/>
                                        </div>
                                        <div className="form-group pt-1">
                                            <input type="button" className="btn btn-block btn-primary btn-xl" value="Reset Password"/>
                                        </div>
                                    </form>
                                </div>
                                <div className="card-footer text-center">
                                    <NavLink to="/">Back to Login</NavLink>
                                </div>
                            </div>
                        </div>
                    }
                </MyContext.Consumer>
            </>
        )
    }
}

export default ForgotPassword
