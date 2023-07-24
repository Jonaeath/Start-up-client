import React, { useContext } from 'react';
import { authContext } from '../Context/AuthContext/AuthProvide';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(authContext);
    const location = useLocation();

    if(loading){
        return <h1 className='text-5xl'>Loading....</h1>
    }

    if(user){
        return children;
    }
    return <Navigate state={{form: location}} replace ></Navigate>
};

export default PrivateRoute;