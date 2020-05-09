import React, { Component } from 'react';
import {MyContext} from './CustomProvider';

class LeaveManagament extends Component {
    render() {
        return (
            <>  
                <MyContext.Consumer>
                    {(context) =>
                        <div className="row" className={context.state.darkMode ? 'darkMode' : ''}>
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                <div className="page-header">
                                    <h2 className="pageheader-title"><i className="fas fa-calendar-minus mx-2"></i>Leave Management</h2>
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

export default LeaveManagament
