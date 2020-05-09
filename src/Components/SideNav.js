import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import {MyContext} from './CustomProvider'

class SideNav extends Component {
    render() {
        const sideBarDarkMode = {
			backgroundColor: "black"
        }
        const sideBarLightMode = {
			background: "white"
		}
        return (
            <MyContext.Consumer>
                {(context) => 
                    context.state.authenticated ? 
                        <div className="nav-left-sidebar sidebar-dark" style={context.state.darkMode ? sideBarDarkMode: sideBarLightMode}>
                            <div className="menu-list">
                                <nav className="navbar navbar-expand-lg navbar-light">
                                    <a className="d-xl-none d-lg-none" href="#">Welcome!</a>
                                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                    </button>
                                    <div className="collapse navbar-collapse" id="navbarNav">
                                        <ul className="navbar-nav flex-column">
                                            <li className="nav-divider">
                                                Menu
                                            </li>
                                            {/* <li className="nav-item my-1">
                                                <a className="nav-link active" href="#" data-toggle="collapse" aria-expanded="false" data-target="#submenu-1" aria-controls="submenu-1"><i className="fa fa-fw fa-user-circle"></i>Dashboard <span className="badge badge-success">6</span></a>
                                                <div id="submenu-1" className="collapse submenu" style={{}}>
                                                    <ul className="nav flex-column">
                                                        <li className="nav-item">
                                                            <NavLink className='nav-link' to='/working-report'>Home</NavLink>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li> */}

                                            <li className="nav-item my-1">
                                                <NavLink className='nav-link' to='/dashboard'><i className="fas fa-tachometer-alt"></i>Dashboard<span className="badge badge-success">6</span></NavLink>
                                            </li>

                                            <li className="nav-item my-1">
                                                <NavLink className='nav-link' to='/working-report'><i className="fas fa-tasks"></i>Daily Working Report<span className="badge badge-success">6</span></NavLink>
                                            </li>

                                            <li className="nav-item my-1 ">
                                                <NavLink className='nav-link' to='/leave-management'><i className="fas fa-calendar-minus"></i>Leave Management<span className="badge badge-success">6</span></NavLink>
                                            </li>

                                            <li className="nav-item my-1 ">
                                                <NavLink className='nav-link' to='/daily-attendance'><i className="fas fa-id-badge"></i>Mark Daily Attendance<span className="badge badge-success">6</span></NavLink>
                                            </li>
                                            
                                        </ul>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    : null 
                }
            </MyContext.Consumer>
        )
    }
}

export default SideNav
