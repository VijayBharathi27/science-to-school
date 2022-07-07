import React from 'react';
import Cookies from 'js-cookie';
import { List, ListItem, Typography } from '@mui/material';
import { useSelector } from 'react-redux';

function UpcomingEvents(props) {
  const [events, setevents] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const { user } = useSelector((state) => state.auth);

  React.useEffect(() => {
    const eventsFetch = async () => {
      try {
        setIsLoading(true);
        fetch('https://science-popularization.herokuapp.com/events', {
          method: 'GET',
          headers: {
            'X-Auth-Token': Cookies.get('token'),
          },
        })
          .then((res) => {
            return res.json();
          })
          .then((jsRes) => {
            console.log('upcoming events is set to this :', jsRes);
            setevents(jsRes);
            setIsLoading(false);
          })
          .catch((err) => {
            console.log(err);
          });
        //})
      } catch (err) {
        console.log(err);
      }
    };
    eventsFetch();
  }, []);
  return (
    <>
      {isLoading ? (
        <Typography>Loading...</Typography>
      ) : (
        <>
          {events.length === 0 ? (
            <Typography>No upcoming events</Typography>
          ) : (
            <List>
              {events.map((d, i) => {
                return <ListItem key={i}>• {d.text}</ListItem>;
              })}
            </List>
          )}
        </>
      )}
    </>
  );

  /* <Typography>
        {post.description} | Registation link: <a href={post.registration}>here</a> | Deadline: {post.deadline}
      </Typography> */
}

export default UpcomingEvents;
