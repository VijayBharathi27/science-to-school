import { createSlice } from '@reduxjs/toolkit';
import { getEvents } from './eventsService';
import { deleteEvent } from './eventsService';
import { postEvent } from './eventsService';
const initialState = {
  isLoding: false,
  events: { text: '' },
  error: null,
};

const eventsSlice = createSlice({
  name: 'events',
  initialState,
  extraReducers: {
    [getEvents.pending]: (state) => {
      state.isLoding = true;
    },
    [getEvents.fulfilled]: (state, action) => {
      state.isLoding = false;
      console.log('slice action of getEvents: ', action);
      if (action.payload.status == 200) {
        state.events = action.payload.data;
      } else {
        state.error = action.payload.error;
      }
    },

    [deleteEvent.pending]: (state) => {
      console.log('pending');
      state.isLoding = true;
    },
    [deleteEvent.fulfilled]: (state, action) => {
      console.log('fullfilled', action);
      if (action.payload.status == 200) {
        state.announcements.pop();
      } else {
        state.error = action.payload.error;
      }
      state.isLoding = false;
    },
    [deleteEvent.rejected]: (state, action) => {
      state.isLoding = false;
      state.error = action.payload.error;
    },

    [postEvent.pending]: (state) => {
      console.log('pending postEvent');
      state.isLoding = true;
    },
    [postEvent.fulfilled]: (state, action) => {
      console.log('fullfilled postEvent', action);
      if (action.payload.status == 201) {
        state.events.push(action.payload.data);
      } else {
        state.error = action.payload.error;
      }
      state.isLoding = false;
    },
    [postEvent.rejected]: (state, action) => {
      state.isLoding = false;
      state.error = action.payload.error;
    },
  },
});

export default eventsSlice.reducer;
