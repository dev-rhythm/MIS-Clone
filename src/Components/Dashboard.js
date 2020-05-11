import React, { Component } from 'react';
import {MyContext} from './CustomProvider';

class Dashboard extends Component {
    render() {
        return (
            <>
                <MyContext.Consumer>
                    {(context) => 
                        <div className={context.state.darkMode ? 'row darkMode' : 'row'}>
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                <div className="page-header">
                                    <h2 className="pageheader-title"><i className="fas fa-tachometer-alt mx-2"></i>Dashboard</h2>
                                    <p className="pageheader-text">Welcome! User</p>
                                    <hr/>
                                </div>
                            </div>
                        </div>
                    }
                </MyContext.Consumer>      
            </>
        )
    }
}

export default Dashboard
