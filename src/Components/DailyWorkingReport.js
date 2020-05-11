import React, { Component } from 'react';
import {MyContext} from './CustomProvider';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment';
import { Editor } from '@tinymce/tinymce-react';
import './../Custom.css';

class DailyWorkingReport extends Component {
    
    state = {
        timepicker1 : new Date('Fri, 26 Sep 2014 09:30:00 GMT+0530'),
        timepicker2 : new Date(),
        extractTime: moment('Fri, 26 Sep 2014 09:30:00 GMT+0530').format('LT'),
        tableRows: ['new-row']
    }

    getInput = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    setStartDate = (date) => {
        this.setState({
            timepicker1: date,
            extractTime: moment(date).format('LT')
        })
    }

    setEndDate = (date) => {
        this.setState({
            timepicker2: date
        })
    }

    handleEditorChange = (content, editor) => {
        console.log('Content was updated:', content);
    }
    
    handleAddRow = (e) => {
        e.preventDefault();

        let totalRows = this.state.tableRows
        totalRows.push('new-row')

        this.setState({tableRows: totalRows})
    }


    render() {
        const tableParentStyle = {
            height: '300px',
            overflowY: 'auto',
        }
        const tableStyle = {
            width: '2400px',
        }

        let newRow = this.state.tableRows.map((item, index) => {
            return (
                <tr id={"row_"+(index+1)}>
                    <th scope="row">{(index+1)}</th>
                    <td>
                        <div className="form-group"> 
                            <select className="form-control" id="input-select">
                                <option>Choose Example</option>
                                <option>Choose Example</option>
                                <option>Choose Example</option>
                            </select>
                        </div>
                    </td>
                    <td>
                        <div className="form-group" style={{display: 'flex'}}>
                            <textarea className="form-control" id="exampleFormControlTextarea1" style={{resize: 'both', minWidth:"250px", minHeight: '100px'}}></textarea>
                        </div>
                    </td>
                    <td >
                        <div className="form-group">                                                                       
                            <select className="form-control" id="input-select">
                                <option>Choose Example</option>
                                <option>Choose Example</option>
                                <option>Choose Example</option>
                            </select>
                        </div>
                    </td>
                    <td>
                        <div className="form-group">                                                                      
                            <select className="form-control" id="input-select">
                                <option>Choose Example</option>
                                <option>Choose Example</option>
                                <option>Choose Example</option>
                            </select>
                        </div>
                    </td>
                    <td>
                        <div className="form-group">                                                                       
                            <select className="form-control" id="input-select">
                                <option>Choose Example</option>
                                <option>Choose Example</option>
                                <option>Choose Example</option>
                            </select>
                        </div>
                    </td>
                    <td>
                        <div className="form-group">
                                <select className="form-control" id="input-select">
                                <option>Choose Example</option>
                                <option>Choose Example</option>
                                <option>Choose Example</option>
                            </select>
                        </div>
                    </td>
                    <td>
                        <div className="form-group">
                            <select className="form-control" id="input-select">
                                <option>Choose Example</option>
                                <option>Choose Example</option>
                                <option>Choose Example</option>
                            </select>
                        </div>
                    </td>
                    <td>
                        <div className="form-group input-checkbox text-center">
                            <input type="checkbox" checked="true" className="text-center"/>
                        </div>
                    </td>
                    <td>
                        <div className="form-group">
                            <textarea className="form-control" id="exampleFormControlTextarea1" style={{minHeight: '100px', minWidth: '300px', maxWidth: '500px', resize: 'both'}}></textarea>
                        </div>
                    </td>
                </tr>
            )
        })
       
        return (
            <>  
                <MyContext.Consumer>
                    {(context) => 
                        <div className={context.state.darkMode ? 'row darkMode' : 'row'}>
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                <div className="page-header">
                                    <h2 className="pageheader-title"><i className="fas fa-tasks mx-2"></i>Daily Working Report</h2>
                                    <hr/>
                                </div>
                            </div>
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                            <form>
                                <div className="card p-0">
                                    <h3 className="card-header">Enter Reporting Details</h3>
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                                                <div className="form-group">
                                                    <label for="input-select">Time In</label>
                                                    <DatePicker
                                                        selected= {this.state.timepicker1}
                                                        className= "form-control"
                                                        onChange={date => this.setStartDate(date)}
                                                        showTimeSelect
                                                        showTimeSelectOnly
                                                        timeIntervals={15}
                                                        timeCaption="Time"
                                                        timeFormat="p"
                                                        dateFormat="p"
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <label for="input-select">Time Out</label>
                                                    <DatePicker
                                                        selected= {this.state.timepicker2}
                                                        className= "form-control"
                                                        onChange={date => this.setEndDate(date)}
                                                        showTimeSelect
                                                        showTimeSelectOnly
                                                        timeIntervals={15}
                                                        timeCaption="Time"
                                                        timeFormat="p"
                                                        dateFormat="p"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                                                <div className="form-group">
                                                    <label for="exampleFormControlTextarea1">Reason for Early Leave</label>
                                                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="4"></textarea>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 my-5 report-container" style={tableParentStyle}>
                                                <div className="table-responsive" style={{overflow: 'unset'}}>
                                                    <table className="table table-bordered " style={tableStyle}>
                                                        <thead>
                                                            <tr style={{textAlign: 'center'}}>
                                                                <th scope="col" width="40px">No.</th>
                                                                <th scope="col">Project Code</th>
                                                                <th scope="col" style={{width: '220px'}}>Task</th>
                                                                <th scope="col">Work Type</th>
                                                                <th scope="col">Hours</th>
                                                                <th scope="col">Worked Hours</th>
                                                                <th scope="col">Status</th>
                                                                <th scope="col">Work Done(%)</th>
                                                                <th scope="col">Offline</th>
                                                                <th scope="col" style={{width: '300px'}}>Comments</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {newRow}
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row comment-container">
                                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 my-3">
                                                <h3 className="mb-4">Additional Comment</h3>
                                                <Editor
                                                    apiKey="5clo0u53bwwin3biqxq0z2friwcxpgjyq6hp291hivqwgumm"
                                                    initialValue="<p>This is the initial content of the editor</p>"
                                                    init={{
                                                    height: 300,
                                                    menubar: false,
                                                    plugins: ['advlist autolink lists link image charmap print preview anchor','searchreplace visualblocks code fullscreen', 'insertdatetime media table paste code help wordcount'],
                                                    toolbar:'undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help'
                                                    }}
                                                    onEditorChange={() => this.handleEditorChange}
                                                />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-xl-4 col-lg-12 col-md-12 col-sm-12 col-12 my-3">
                                                <div className="form-group">
                                                    <button type="button" class="btn btn-primary mx-2" onClick={(e) => this.handleAddRow(e)}>Add More</button>
                                                    <button type="submit" class="btn btn-primary mx-2 px-4">Submit</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                                
                    </div>
                        </div>
                    }
                </MyContext.Consumer>
            </>
        )
    }
}

export default DailyWorkingReport
