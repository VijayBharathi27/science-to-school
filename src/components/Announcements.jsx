import React from 'react';
import Cookies from 'js-cookie';
import { List, ListItem, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
export default function Announcements() {
  const [announcements, setAnnouncements] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const { user } = useSelector((state) => state.auth);

  React.useEffect(() => {
    const announceFetch = async () => {
      try {
        setIsLoading(true);
        fetch('https://science-popularization.herokuapp.com/announcements', {
          method: 'GET',
          headers: {
            'X-Auth-Token': Cookies.get('token'),
          },
        })
          .then((res) => {
            return res.json();
          })
          .then((jsRes) => {
            console.log('announcement is set to this :', jsRes);
            console.log(Cookies.get('token'));
            console.log('user type is : ', Cookies.get('userType'));
            console.log('the user is:', user);
            setAnnouncements(jsRes);
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
    announceFetch();
  }, []);
  return (
    <>
      {isLoading ? (
        <Typography>Loading...</Typography>
      ) : (
        <>
          {announcements.length === 0 ? (
            <Typography>No annoucement</Typography>
          ) : (
            <List>
              {announcements.map((d, i) => {
                return <ListItem key={i}>➼ {d.text}</ListItem>;
              })}
            </List>
          )}
        </>
      )}
    </>
  );
}
