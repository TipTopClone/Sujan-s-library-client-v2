import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/user_signup_login/Login';
import Signup from './pages/user_signup_login/Signup';
import AdminSignup from './pages/admin_signup/AdminSignup';
import Home from './pages/home/Home';

function App() {
  return (
    <div className=''>
      <Routes>
        {/* public route  */}
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />

        {/* private route  */}
        <Route path='/admin-signup' element={<AdminSignup />} />
      </Routes>
    </div>
  );
}

export default App;
