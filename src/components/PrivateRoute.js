import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {isLoggedIn} =useContext(AppContext);
    if(isLoggedIn){
        return children;
    }else{
        return <Navigate to='/'/>;
    }
}

export default PrivateRoute
