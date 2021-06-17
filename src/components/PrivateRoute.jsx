import React from 'react';
import {Redirect, Route} from 'react-router-dom';
import { useAuth } from './AuthContext';

export const PrivateRoute = ({component: Compenent, ...rest}) => {

    const isAuthenticated = useAuth();

    return (
        <Route {...rest} render={(props) =>  
        isAuthenticated ? (<Compenent {...props} />) :
        (<Redirect to={"/"} />)
        } />
    )
}

export default PrivateRoute;