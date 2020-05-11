import React from "react";
import {Route, Redirect} from "react-router-dom";
import {MyContext} from './CustomProvider'

function PrivateRoute ({component: Component, ...rest}) {
    return (
      	<MyContext.Consumer>
			{(context) => 
				<Route
					{...rest}
					render={(props) => context.state.authenticated
					? <Component {...props} />
					: <Redirect to={{pathname: '/', state: {from: props.location}}} />}
				/> 
			}
      	</MyContext.Consumer>
    )
}

export default PrivateRoute;
  

