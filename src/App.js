import React, {Component} from 'react';
import { BrowserRouter, Switch} from 'react-router-dom';

import Header from './Components/Header';
import SideNav from './Components/SideNav';
import Footer from './Components/Footer';
import Login from './Components/Login';
import ForgotPassword from './Components/ForgotPassword';
import Dashboard from './Components/Dashboard';
import DailyWorkingReport from './Components/DailyWorkingReport';
import LeaveManagement from './Components/LeaveManagement';
import MarkDailyAttendance from './Components/MarkDailyAttendance';
import ResetPassword from './Components/ResetPassword';
import PrivateRoute from './Components/PrivateRoute';
import GuestRoute from './Components/GuestRoute';
import {CustomProvider} from './Components/CustomProvider';
import {MyContext} from './Components/CustomProvider';
import './Custom.css';

class App extends Component {
	render(){
		const darkModeStyle = {
			backgroundColor: '#080808',
			color: 'white',
		}
		
		const lightModeStyle = {
			backgroundColor: '#efeff6',
		} 
		return (
			<>
			<CustomProvider>
				<BrowserRouter>
					<Header/>
					<SideNav/>
					<Switch>
						<GuestRoute exact path='/' component={Login} />
						<GuestRoute path='/forgot-password' component={ForgotPassword} />
					</Switch>
						<MyContext.Consumer>
								{(context) => 
									<div className="dashboard-wrapper" style={context.state.authenticated && context.state.darkMode ? darkModeStyle : lightModeStyle}>
												<div className="container-fluid dashboard-content">
													<Switch>
														<PrivateRoute path='/dashboard' component={Dashboard} />
														<PrivateRoute path='/working-report' component={DailyWorkingReport} />
														<PrivateRoute path='/leave-management' component={LeaveManagement} />
														<PrivateRoute path='/daily-attendance' component={MarkDailyAttendance} />
														<PrivateRoute path='/reset-password' component={ResetPassword} />
													</Switch>
												</div>
										<Footer/>
									</div>
								}
					</MyContext.Consumer>
				</BrowserRouter>
			</CustomProvider>
			</>
		);
	}
}

export default App;
