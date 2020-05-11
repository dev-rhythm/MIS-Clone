import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'
import {MyContext} from './CustomProvider'

class Header extends Component {
    render() {
		const headerDarkMode = {
			background: "black",
			borderBottom: '1px solid #3a3a3a'
		}

		const headerLightMode = {
			background: "white"
		}
        return (
			<MyContext.Consumer>
				{(context) => 
					context.state.authenticated ? 
						<div className="dashboard-main-wrapper">
							<div className="dashboard-header">
								<nav className="navbar navbar-expand-lg fixed-top" style={context.state.darkMode ? headerDarkMode: headerLightMode} >
									<NavLink className="navbar-brand" to="/dashboard">
										<img 
											className="logo-img img-responsive" 
											src={"../assets/images/" + (context.state.darkMode ? 'logodarkmode.png' : 'logo.png')} 
											alt="logo" 
											style={{height: '60%', width: '60%'}}
										/>
									</NavLink>
									<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
									{
										context.state.darkMode 
										? 
										<i className="navbar-toggler-icon fas fa-caret-down mr-2 text-white"></i>
										:
										<i className="navbar-toggler-icon fas fa-caret-down mr-2 text-dark"></i>
									}
									</button>
									<div className="collapse navbar-collapse" id="navbarSupportedContent">
										<ul className="navbar-nav ml-auto navbar-right-top">
											<li className="nav-item dropdown connection" onClick={context.handleDarkMode}>
												<span className="nav-link" id="navbarDropdown" role="button" style={{cursor: 'pointer'}}>
													{
														context.state.darkMode 
														? 
														<><i className="fas fa-sun text-brand fa-lg mx-1"></i>Bright</>
														:
														<><i className="fas fa-moon text-dark fa-lg mx-1"></i>Dark</>
													}
													
												</span>
											</li>
											<li className="nav-item dropdown nav-user">
												<a className="nav-link nav-user-img" href="#" id="navbarDropdownMenuLink2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
													<img src="assets/images/avatar-dev.png" alt="" className="user-avatar-md rounded-circle"/>
													<span className="mx-1">Profile</span>
												</a>
												<div className="dropdown-menu dropdown-menu-right nav-user-dropdown" aria-labelledby="navbarDropdownMenuLink2">
													<div className="nav-user-info">
														<h5 className="mb-0 text-white nav-user-name">Rhythm Khandelwal </h5>
														<span className="">Developer</span>
													</div>
													<Link className="dropdown-item" to="/reset-password"><i className="fas fa-key mr-2"></i>Reset Password</Link>
													<a onClick={context.handleLogout} className="dropdown-item" style={{cursor: 'pointer'}}><i className="fas fa-power-off mr-2"></i>Logout</a>
												</div>
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

export default Header
