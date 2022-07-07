import React from 'react';
import UpcomingEvents from '../components/AdminEvents';
import Announcements from '../components/AdminAnnounce';
import { Typography, Box, Card, CardContent } from '@mui/material';
import { useSelector } from 'react-redux';

export default function Dashboard() {
  const { user } = useSelector((state) => state.auth);
  console.log('user from adminDash', user);
  return (
    <>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Box m={1}>
          <Typography variant="h4" color="primary">
            Welcome,{user.username}!
          </Typography>
          <Typography variant="h6" color="primary">
            This is the home page of the website. Let's work together to popularize the beauty and power of science by
            helping students understand and grasp it, so that they can use it someday to shape the world!
          </Typography>
        </Box>
        {/* Announcement and picture*/}

        <Box
          display="flex"
          flexDirection={{ xs: 'column', sm: 'column', md: 'row', lg: 'row' }}
          justifyContent="center"
          alignitems="center"
          p={1}
          width="100%"
        >
          <Box
            sx={{ width: { xs: '90%', sm: '90%', md: '40%' } }}
            component="div"
            style={{
              backgroundImage: `url("/kid.jpg")`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '300px',
              marginBottom: '20px',
              borderRadius: '5px',
            }}
          ></Box>
          <Card sx={{ width: { xs: '90%', sm: '90%', md: '50%' }, marginBottom: '20px', marginLeft: { md: '10px' } }}>
            <CardContent>
              <Announcements />
            </CardContent>
          </Card>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          <UpcomingEvents />
        </Box>
      </Box>
    </>
  );
}
