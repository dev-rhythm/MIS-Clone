import React, { Component } from 'react';
import {MyContext} from './CustomProvider';

class MarkDailyAttendance extends Component {
    render() {
        return (
            <>  
                <MyContext.Consumer>
                    {(context) =>
                        <div className="row" className={context.state.darkMode ? 'darkMode' : ''}>
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                <div className="page-header">
                                    <h2 className="pageheader-title"><i className="fas fa-id-badge mx-2"></i>Mark Daily Attendance</h2>
                                    <hr/>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                                <div className="card">
                                    <h5 className="card-header">Attendance Report</h5>
                                    <div className="card-body">
                                        <form>
                                            <div class="form-group">
                                                <label for="input-select">Example Select</label>
                                                <select class="form-control" id="input-select">
                                                    <option>Full Day</option>
                                                    <option>Half Day (1st Half)</option>
                                                    <option>Half Day (2nd Half)</option>
                                                </select>
                                            </div>
                                            <div className="form-group">
                                                <label for="exampleFormControlTextarea1">Example textarea</label>
                                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                            </div>
                                            <div className="form-group">
                                                <button type="button" className="form-control btn btn-mini btn-primary">Submit</button>
                                            </div>
                                        </form>
                                    </div>
                                    {/* <div className="card-body border-top">
                                        <h3>Sizing</h3>
                                        <form>
                                            <div className="form-group">
                                                <label for="inputSmall" className="col-form-label">Small</label>
                                                <input id="inputSmall" type="text" value=".form-control-sm" className="form-control form-control-sm"/>
                                            </div>
                                            <div className="form-group">
                                                <label for="inputDefault" className="col-form-label">Default</label>
                                                <input id="inputDefault" type="text" value="Default input" className="form-control"/>
                                            </div>
                                            <div className="form-group">
                                                <label for="inputLarge" className="col-form-label">Large</label>
                                                <input id="inputLarge" type="text" value=".form-control-lg" className="form-control form-control-lg"/>
                                            </div>
                                        </form>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    }
                </MyContext.Consumer>
            </>
        )
    }
}

export default MarkDailyAttendance
