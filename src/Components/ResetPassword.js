import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import {MyContext} from './CustomProvider';

class ResetPassword extends Component {
    render() {
        const ResetPasswordStyle = {
            display: "flex",
            justifyContent: 'center',
            alignItems: "center",
            verticalAlign: 'center'
        }
        return (
            <>
                <MyContext.Consumer>
                    {(context) =>
                        <div className={context.state.darkMode ? 'darkMode' : ''}>
                            <div className="page-header">
                                <h2 className="pageheader-title">Reset Password</h2>
                                <p>Set new password for your account.</p>
                                <hr/>
                            </div>
                            <div style={ResetPasswordStyle}>
                                <div className="card" style={{width: '600px'}}>
                                    <div className="card-header text-center">
                                        <h4>Please enter the details.</h4>
                                    </div>
                                    <div className="card-body">
                                        <form>
                                            <div className="form-group">
                                                <input className="form-control form-control-lg" id="old_password" type="password" placeholder="Old Password" autoComplete="off"/>
                                            </div>
                                            <hr/>
                                            <div className="form-group">
                                                <input className="form-control form-control-lg" id="password" type="password" placeholder="Password" autoComplete="off"/>
                                            </div>
                                            <div className="form-group">
                                                <input className="form-control form-control-lg" id="confirm_password" type="password" placeholder="Confirm New Password"/>
                                            </div>
                                            <div className="form-group">
                                                <button type="submit" className="btn btn-primary btn-md mx-1">Submit</button>
                                                <button type="reset" className="btn btn-primary btn-md mx-1">Reset</button>
                                            </div>
                                        </form>
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

export default ResetPassword
