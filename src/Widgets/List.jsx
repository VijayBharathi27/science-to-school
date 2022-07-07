import * as React from 'react';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

import { useSelector } from 'react-redux';
import Typography from '@mui/material/Typography';

export default function PList() {
  const { user } = useSelector((state) => state.auth);

  const myUser = {
    Name: user.initial + '. ' + user.name,
    Mobile: user.mobile,
  };
  myUser['User Name'] = user.name;

  return (
    <Box sx={{ width: 250 }} role="presentation">
      {Object.keys(myUser).map((text) => (
        <ListItem key={text} disablePadding>
          <ListItemButton>
            <Typography variant="subtitle1" color="initial">
              <ListItemText primary={text + ':'} />
              <ListItemText primary={myUser[text]} />
            </Typography>
          </ListItemButton>
        </ListItem>
      ))}
    </Box>
  );
}
