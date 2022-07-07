import React from 'react';
import Cookies from 'js-cookie';
import { List, ListItem, Typography, Stack, Box, TextField, Button } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
import DeleteIcon from '@mui/icons-material/Delete';
import { urls } from '../../config/url';
import { getEvents } from '../Features/events/eventsService';
import { deleteEvent } from '../Features/events/eventsService';
import { postEvent } from '../Features/events/eventsService';
import { useSelector, useDispatch } from 'react-redux';

function UpcomingEvents() {
  const dispatch = useDispatch();
  const { events, isLoding, error } = useSelector((state) => state.events);
  const { user } = useSelector((state) => state.auth);

  const [newEvent, setNewEvent] = React.useState('');
  const [edit, setEdit] = React.useState(false);

  // function postEvents() {
  //   const payload = {
  //     text: newEvent,
  //   };
  //   const eventsFetch = async () => {
  //     try {
  //       console.log('postAnnouncement in action', JSON.stringify(payload));
  //       await fetch(urls.events(), {
  //         method: 'POST',
  //         body: JSON.stringify(payload),
  //         headers: {
  //           'X-Auth-Token': Cookies.get('token'),
  //           'Content-type': 'application/json; charset=UTF-8',
  //         },
  //       })
  //         .then((res) => {
  //           console.log('the response of post req :', res);
  //         })
  //         .catch((err) => {
  //           console.log(err);
  //         });
  //     } catch (err) {
  //       err.message;
  //     }
  //   };
  //   eventsFetch();
  // }

  function toggleEdit() {
    setEdit(!edit);
    console.log('edit mode', edit);
  }
  React.useEffect(() => {
    console.log('inside use effect');
    dispatch(getEvents());
    // const eventsFetch = async () => {
    //   try {
    //     setIsLoading(true);
    //     fetch('https://science-popularization.herokuapp.com/events', {
    //       method: 'GET',
    //       headers: {
    //         'X-Auth-Token': Cookies.get('token'),
    //       },
    //     })
    //       .then((res) => {
    //         return res.json();
    //       })
    //       .then((jsRes) => {
    //         console.log('upcoming events is set to this :', jsRes);
    //         setevents(jsRes);
    //         setIsLoading(false);
    //       })
    //       .catch((err) => {
    //         console.log(err);
    //       });
    //     //})
    //   } catch (err) {
    //     console.log(err);
    //   }
    // };
    // eventsFetch();
  }, []);
  return (
    <>
      {isLoding ? (
        <Typography>Loading...</Typography>
      ) : (
        <>
          {events.length === 0 ? (
            <Typography>No upcoming events</Typography>
          ) : (
            <>
              <Stack direction="row" spacing={1} sx={{ paddingLeft: '30px' }}>
                <EditIcon onClick={toggleEdit} cursor="pointer" />
                <Typography variant="h5">Upcoming Events</Typography>
                <CancelRoundedIcon
                  color="error"
                  onClick={function closeEditor() {
                    setEdit(false);
                  }}
                  sx={{ marginLeft: '2px' }}
                  cursor="pointer"
                />
              </Stack>
              <List>
                {events.map((d, i) => {
                  return (
                    <ListItem key={i}>
                      • {d.text}{' '}
                      {edit && (
                        <DeleteIcon
                          cursor="pointer"
                          onClick={() => {
                            console.log('delete actions for:', d.id);
                            dispatch(deleteEvent(d.id));
                          }}
                        />
                      )}{' '}
                    </ListItem>
                  );
                })}
              </List>
              {edit && (
                <Stack direction="row" spacing={2} p={2}>
                  <TextField
                    sx={{ height: '30px' }}
                    placeholder="type here ... "
                    onChange={(e) => {
                      setNewEvent(e.target.value);
                    }}
                  />
                  <Button
                    variant="contained"
                    onClick={() => dispatch(postEvent({ text: newEvent }))}
                    sx={{ marginLeft: '10px', height: '30px' }}
                  >
                    upload
                  </Button>
                </Stack>
              )}
            </>
          )}
        </>
      )}
    </>
  );
}

export default UpcomingEvents;
