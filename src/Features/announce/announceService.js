import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { urls } from '../../../config/url';
import Cookies from 'js-cookie';

export const getAnnouncements = createAsyncThunk('announcements/getAnnouncements', async (data) => {
  try {
    console.log('inside the middleware of getAnnouncements', data);
    const response = await axios.get(urls.getAnnouncements(), {
      headers: {
        'X-Auth-Token': Cookies.get('token'),
      },
    });
    return response;
  } catch (err) {
    return err.message;
  }
});

export const deleteAnnouncement = createAsyncThunk('announcements/deleteAnnouncements', async (id) => {
  try {
    console.log('inside the middleware of deleteAnnouncement');
    const response = await axios.delete(urls.getAnnouncements() + id, {
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

export const postAnnouncement = createAsyncThunk('announcements/postAnnouncements', async (data) => {
  try {
    console.log('inside the middleware of postAnnouncement');
    const response = await axios.post(urls.getAnnouncements(), data, {
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
