import {Navigate} from 'react-router-dom';
import {UserAuth} from '../context/AuthContext';

function ProtectedRoute (children: any) {
    // @ts-ignore
    const {user} = UserAuth()
    if(!user) {
        return <Navigate to="/"/>
    } else {
        return children
    }
}

export default ProtectedRoute
