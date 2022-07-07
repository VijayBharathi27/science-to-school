import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Stack } from '@mui/material';

//import Dashboard from './Pages/Dashboard';
import Dashboard from './Pages/AdminDash';
import Assignments from './Pages/Assignments';
import Login from './Pages/Login';
import Books from './Pages/Books';
import BookInfo from './Pages/BookInfo';
import Quizzes from './Pages/Quizzes';
import Help from './Pages/Help';
import Register from './Pages/Register';
import Page404 from './Pages/Page404';

import Header from './Widgets/Common/Header';
import Footer from './Widgets/Common/Footer';
import PrivateRoute from './Helpers/PrivateRoute';

import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

function App() {
  const { isLoggedIn } = useSelector((state) => state.auth);

  return (
    <Stack justifyContent="space-between">
      <Router>
        {isLoggedIn && <Header />}
        <Routes>
          <Route
            exact
            path="/"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route exact path="/login" element={isLoggedIn ? <Navigate to={'/'} /> : <Login />} />
          <Route exact path="/sign-up" element={isLoggedIn ? <Navigate to={'/'} /> : <Register />} />
          <Route
            exact
            path="/book-info"
            element={
              <PrivateRoute>
                <BookInfo />
              </PrivateRoute>
            }
          />
          <Route
            exact
            path="/books"
            element={
              <PrivateRoute>
                <Books />
              </PrivateRoute>
            }
          />
          <Route
            exact
            path="/assingments"
            element={
              <PrivateRoute>
                <Assignments />
              </PrivateRoute>
            }
          />
          <Route
            exact
            path="/quizzes"
            element={
              <PrivateRoute>
                <Quizzes />
              </PrivateRoute>
            }
          />
          <Route exact path="/help-support" element={<Help />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
        {isLoggedIn && <Footer title="Science to School" description="An educational initiative by NSS IIT Madras " />}
      </Router>
    </Stack>
  );
}

export default App;

/**
 * Notes:
Use NPM
npm run dev

1. Please ask before installing any new library
2. Use functional components only
3. Try to use ES6 syntax
4. Use standard mui components only for better seo performance
5. Make your branches and work, raise a PR when done
6. Branch names should be page names
7. Pages will have everything to be shown on that page
8. Widgets will be the components --> common will contain widgets coming in more than 1 page

 */
