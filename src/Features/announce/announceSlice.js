import { createSlice } from '@reduxjs/toolkit';
import { getAnnouncements } from './announceService';
import { deleteAnnouncement } from './announceService';
import { postAnnouncement } from './announceService';
const initialState = {
  isLoding: false,
  announcements: { text: '' },
  error: null,
};

const announceSlice = createSlice({
  name: 'announcements',
  initialState,
  extraReducers: {
    [getAnnouncements.pending]: (state) => {
      state.isLoading = true;
    },
    [getAnnouncements.fulfilled]: (state, action) => {
      state.isLoding = false;
      console.log('slice action of getAnnouncements: ', action);
      if (action.payload.status == 200) {
        state.announcements = action.payload.data;
      } else {
        state.error = action.payload.error;
      }
    },

    [deleteAnnouncement.pending]: (state) => {
      console.log('pending');
      state.isLoding = true;
    },
    [deleteAnnouncement.fulfilled]: (state, action) => {
      console.log('fullfilled', action);
      if (action.payload.status == 200) {
        state.announcements.pop();
      } else {
        state.error = action.payload.error;
      }
      state.isLoding = false;
    },
    [deleteAnnouncement.rejected]: (state, action) => {
      state.isLoding = false;
      state.error = action.payload.error;
    },

    [postAnnouncement.pending]: (state) => {
      console.log('pending postAnnouncement');
      state.isLoding = true;
    },
    [postAnnouncement.fulfilled]: (state, action) => {
      console.log('fullfilled postAnnouncement', action);
      if (action.payload.status == 201) {
        state.announcements.push(action.payload.data);
      } else {
        state.error = action.payload.error;
      }
      state.isLoding = false;
    },
    [postAnnouncement.rejected]: (state, action) => {
      state.isLoding = false;
      state.error = action.payload.error;
    },
  },
});

export default announceSlice.reducer;
