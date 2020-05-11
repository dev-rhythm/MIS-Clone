import React from "react";
import {Route, Redirect} from "react-router-dom";
import {MyContext} from './CustomProvider';

function GuestRoute ({component: Component, ...rest}) {
    return (
		<MyContext.Consumer>
			{(context) => 
				<Route
					{...rest}
					render={(props) => context.state.authenticated
						? <Redirect to={{pathname: '/dashboard', state: {from: props.location}}} />
						: <Component {...props} />}
				/>
			}
		</MyContext.Consumer>
    )
}

export default GuestRoute;


  

