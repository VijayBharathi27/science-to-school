import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { urls } from '../../../config/url';
import Cookies from 'js-cookie';
{
  /* input type structure for the POST requests */
}

//

export const Login = createAsyncThunk('auth/login', async (data) => {
  try {
    console.log('login in action', data);
    const response = await axios.post(urls.login(), data);
    // console.log('x-auth-token is :', response.headers['x-auth-token']);
    Cookies.set('token', response.headers['x-auth-token']);
    return response;
  } catch (err) {
    return err;
  }
  // fetch('https://science-popularization.herokuapp.com/auth/login', {
  //   method: 'POST',
  //   headers: {
  //     Accept: 'application/json',
  //     'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify({
  //     username: data.username,
  //     password: data.password,
  //   }),
  // })
  //   .then((response) => {
  //     let json = response.json();
  //     sessionStorage.setItem('data', response.headers.get('X-Auth-Token'));
  //     Cookies.set('token', response.headers.get('X-Auth-Token'));
  //     console.log('token stored in cookie:', Cookies.get('token')); //only for developmental purpose should be removed
  //     //fetching for announcement
  //     return json;
  //   })
  //   .then((res) => {
  //     console.log(res.user.user_type);
  //     return res.user;
  //   })
  //   .catch((err) => console.log(err));
  //const response = await axios.post(urls.login(), data)

  //Cookies.set('token', response.headers.get('X-Auth-Token'));
  //return response.data;

  //Cookies.set('token', response.headers.get('X-Auth-Token'));
  //Cookies.set('userType', response.user);
  //console.log('the token is ', response.headers.get('x-Auth-Token'));
  //console.log('the login response is:', response);
});

export const Register = createAsyncThunk('auth/register', async (data) => {
  try {
    console.log('register in action', data);
    const response = await axios.post(urls.register(), data);
    console.log(response.status);
    Cookies.set('token', response.headers['x-auth-token']);
    return response;
  } catch (err) {
    return err;
  }
});

//const loginData = {
//   username: 'x_annonymous',
//   password: '1234567',
// };

// const registerData = {
//   name: 'New User',
//   initial: 'Mr.',
//   username: 'x_annonymous713',
//   mobile: '1111111111',
//   user_type: 'professor',
//   password: '1234567',
// };
