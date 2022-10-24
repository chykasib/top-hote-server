import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';
import { AuthContext } from '../Context/AuthProvider';

const PrivateRoutes = ({ children }) => {
    const { loading, user } = useContext(AuthContext);
    const location = useLocation()
    if (loading) {
        return <Spinner animation="border" />
    }

    if (user && user.uid) {
        return children;
    }

    return <Navigate to={'/login'} state={{ from: location }} replace></Navigate>

};

export default PrivateRoutes;