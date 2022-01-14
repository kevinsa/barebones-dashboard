import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../context/Auth';
import StorageService from '../services/Storage';

export function RequireAuth({ children }) {
    const location = useLocation();
    let { loggedIn } = useAuth();

    /* 
       On page refresh, Auth context is not initialized and loggedIn is false
       so check localstorage for logged in state
    */
    if(!loggedIn) {
        const storageService = new StorageService();
        loggedIn = (storageService.getUser() !== undefined)
    }
    
    return loggedIn
        ? children
        : <Navigate to="/login" state={{ path: location.pathname }} replace />

}
