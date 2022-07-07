import React from 'react';
import NavBar from '../Widgets/Common/NavBar';
import UpcomingEvents from '../components/UpcomingEvents';
import Announcements from '../components/Announcements';
import kid from '/kid.jpg';
import { Typography, Box, Card, CardContent, Stack, List, ListItem } from '@mui/material';
import CampaignIcon from '@mui/icons-material/Campaign';

export default function Dashboard() {
  return (
    <>
      <Box m={1}>
        <Typography variant="h4" color="primary">
          Welcome, Mrs. Alice Jane!
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
        >
          {/* <img style={{ margin: '10px', borderRadius: '10px', objectFit: 'contain' }} src={kid} /> */}
        </Box>
        <Card sx={{ width: { xs: '90%', sm: '70%', md: '50%' }, marginBottom: '20px', marginLeft: { md: '10px' } }}>
          <CardContent>
            <Stack direction="row" spacing={2}>
              <Typography variant="h5">Announcement</Typography>
              <CampaignIcon />
            </Stack>
            <Box m={1}>
              <Announcements />
            </Box>
          </CardContent>
        </Card>
      </Box>

      {/* Upcoming events */}
      {/* using mui list to get bulletin */}
      <Typography variant="h5" sx={{ paddingLeft: '30px' }}>
        Upcoming Events
      </Typography>
      <UpcomingEvents />
      {/* <List>
        {upcomingEvents.map((post) => (
          <ListItem key={post.title}>
            <ListItemIcon>
              <Circle color="primary" fontSize="inherent" />
            </ListItemIcon>
            <UpcomingEvents key={post.title} post={post} />
          </ListItem>
        ))}
      </List> */}
      {/* using flex */}
      {/* <Box display="flex" flexDirection="column" justifyContent="flex-start" alignItems="flex-start" m={1}>
        {upcomingEvents.map((post) => (
          <UpcomingEvents key={post.title} post={post} />
        ))}
      </Box> */}
    </>
  );
}
