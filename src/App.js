import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/user_signup_login/Login';
import Signup from './pages/user_signup_login/Signup';
import AdminSignup from './pages/admin_signup/AdminSignup';
import Home from './pages/home/Home';
import { ToastContainer } from 'react-toastify';
import Dashboard from './pages/dashboard/Dashboard';
import Book from './pages/book/Book';
import Student from './pages/student/Student';
import BurrowHistory from './pages/burrow-history/BurrowHistory';
import MyProfile from './pages/my-profile/MyProfile';
import {
  AdminPrivateRouter,
  PrivateRouter,
} from './components/private-router/PrivateRouter';
import MyBook from './pages/my-books/MyBook';
import NewBook from './pages/book/NewBook';
import { useDispatch } from 'react-redux';
import { fetchReviewsAction, getAllBooksAction } from './pages/book/bookAction';
import { useEffect } from 'react';
import UpdateBook from './pages/book/UpdateBook';
import BookLanding from './pages/book/BookLanding';
import { autoLogin } from './pages/user_signup_login/userAction';
import AllAdmins from './pages/allAdmins/AllAdmins';
import ReviewPage from './pages/book/ReviewPage';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllBooksAction());
    dispatch(autoLogin());
    dispatch(fetchReviewsAction());
  }, [dispatch]);

  return (
    <div className=''>
      <Routes>
        {/* public route  */}
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/book/:_id' element={<BookLanding />} />

        {/* private route  */}

        <Route
          path='/dashboard'
          element={
            <PrivateRouter>
              <Dashboard />
            </PrivateRouter>
          }
        />
        <Route
          path='/admin-signup'
          element={
            <AdminPrivateRouter>
              <AdminSignup />
            </AdminPrivateRouter>
          }
        />

        <Route
          path='/books'
          element={
            <AdminPrivateRouter>
              <Book />
            </AdminPrivateRouter>
          }
        />

        <Route
          path='/new-book'
          element={
            <PrivateRouter>
              <NewBook />
            </PrivateRouter>
          }
        />
        <Route
          path='/edit-book/:_id'
          element={
            <PrivateRouter>
              <UpdateBook />
            </PrivateRouter>
          }
        />

        <Route
          path='/reviews'
          element={
            <AdminPrivateRouter>
              <ReviewPage />
            </AdminPrivateRouter>
          }
        />

        <Route
          path='/students'
          element={
            <PrivateRouter>
              <Student />
            </PrivateRouter>
          }
        />
        <Route
          path='/all-admins'
          element={
            <PrivateRouter>
              <AllAdmins />
            </PrivateRouter>
          }
        />

        <Route
          path='/burrow-history'
          element={
            <AdminPrivateRouter>
              <BurrowHistory />
            </AdminPrivateRouter>
          }
        />

        <Route
          path='/my-books'
          element={
            <PrivateRouter>
              <MyBook />
            </PrivateRouter>
          }
        />

        <Route
          path='/my-profile'
          element={
            <PrivateRouter>
              <MyProfile />
            </PrivateRouter>
          }
        />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
