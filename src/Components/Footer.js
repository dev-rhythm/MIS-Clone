import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import {MyContext} from './CustomProvider';

class Footer extends Component {
    render() {
        return (
            <MyContext.Consumer>
				{(context) => 
					context.state.authenticated ?  
                        <footer className={context.state.darkMode ? 'footer darkMode' : 'footer'}>
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-xl-9 col-lg-9 col-md-9 col-sm-12 col-12">
                                    <h5>Copyright © 2020 <NavLink className="text-primary" to="/">MangoITSolutions.</NavLink> All rights reserved.</h5>
                                    </div>
                                    <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12">
                                        <h5><span className="text-primary">MangoITSolutions</span> Admin System</h5>
                                        {/* <div className="text-md-right footer-links d-none d-sm-block">
                                            <a href="">About</a>
                                            <a href="">Support</a>
                                            <a href="">Contact Us</a>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        </footer>
                    : null 
                }
            </MyContext.Consumer>
        )
    }
}

export default Footer
