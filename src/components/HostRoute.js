import React, { Component } from 'react';
import {  BrowserRouter as Router,
          Route,
          Link,
          Redirect,
          withRouter
        } from "react-router-dom";

const HostRoute = ({ component: Component, user , ...rest }) => { 
    console.log(user.isAuthenticated);

    return (
        <Route { ...rest } render={ (props) => (
            user.isAuthenticated === true 
            ? <Component {...props} />
            : <Redirect to='/login' />
        )} />
    )
}


export default HostRoute;