import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'

const ProtectedRoute = ({children}:any) => {
    const location = useLocation();
    // const {
    //     config:{AUTH_SETTINGS_CLIENTD}
    // } = useConfigContext();

    // const authentication = new Authentication(AUTH_SETTINGS_CLIENTD);
    const isLoggedIn = true;
    if(isLoggedIn){
        return children;
    }
    else{
        return (
          <Navigate to="/" state={{ from: location}} replace />
        )
    }
}

export default ProtectedRoute