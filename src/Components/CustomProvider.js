import React, { Component } from 'react';

export const MyContext = React.createContext();

export class CustomProvider extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: "Rhythm",
            authenticated : localStorage.getItem('token') === null ? false : true,
            darkMode: localStorage.getItem('theme') === "dark" ? true : false

        }
    }

    handleLogin = () => {
        localStorage.setItem('token', '123456')
        localStorage.setItem('theme', "light")
        this.setState({authenticated: true})
    }

    handleLogout = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('theme')
        this.setState({authenticated: false})
    }

    handleDarkMode = () => {

        if(this.state.darkMode === true ) {
            localStorage.setItem('theme', 'light')
            this.setState({darkMode: false})
        }else {
            localStorage.setItem('theme', 'dark')
            this.setState({darkMode: true})
        }
    }


    render() {
        const data = {
            state: this.state, 
            handleLogin: this.handleLogin,
            handleLogout: this.handleLogout,
            handleDarkMode: this.handleDarkMode,
        }
        return (
            <MyContext.Provider value={data}>
                {this.props.children}
            </MyContext.Provider>
        )
    }
}
