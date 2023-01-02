import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import {Route, Routes} from 'react-router-dom';
import {AuthContextProvider} from './context/AuthContext';
import Signup from './pages/Signup';
import Account from './pages/Account';

function App() {
    return (
        <div>
            <AuthContextProvider>
                <Navbar/>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/login' element={<Login/>}/>
                    <Route path='/singup' element={<Signup/>}/>
                    <Route path='/account' element={<Account/>}/>
                </Routes>
            </AuthContextProvider>
        </div>
    );
}

export default App;
