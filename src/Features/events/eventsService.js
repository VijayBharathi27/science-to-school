import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { urls } from '../../../config/url';
import Cookies from 'js-cookie';

export const getEvents = createAsyncThunk('events/getEvents', async (data) => {
  try {
    console.log('inside the middleware of getevents', data);
    const response = await axios.get(urls.getEvents(), {
      headers: {
        'X-Auth-Token': Cookies.get('token'),
      },
    });
    return response;
  } catch (err) {
    return err.message;
  }
});

export const deleteEvent = createAsyncThunk('events/deleteEvents', async (id) => {
  try {
    console.log('inside the middleware of deleteEvent');
    const response = await axios.delete(urls.getEvents() + id, {
      headers: {
        'X-Auth-Token': Cookies.get('token'),
      },
    });
    console.log('console log in middleware', response);
    return response;
  } catch (err) {
    return err.message;
  }
});

export const postEvent = createAsyncThunk('events/postEvents', async (data) => {
  try {
    console.log('inside the middleware of postEvent');
    const response = await axios.post(urls.getEvents(), data, {
      headers: {
        'X-Auth-Token': Cookies.get('token'),
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    console.log('console log in middleware', response);
    return response;
  } catch (err) {
    return err.message;
  }
});
