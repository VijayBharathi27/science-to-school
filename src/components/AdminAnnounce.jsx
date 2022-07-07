import React from 'react';
import Cookies from 'js-cookie';
import { List, ListItem, Typography, Stack, Box, TextField, Button } from '@mui/material';
import CampaignIcon from '@mui/icons-material/Campaign';
import EditIcon from '@mui/icons-material/Edit';
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
import DeleteIcon from '@mui/icons-material/Delete';
import { urls } from '../../config/url';
import { postAnnouncement } from '../Features/announce/announceService';
import { getAnnouncements } from '../Features/announce/announceService';
import { deleteAnnouncement } from '../Features/announce/announceService';
import { useDispatch, useSelector } from 'react-redux';
export default function Announcements() {
  const dispatch = useDispatch();

  const { announcements, isLoding, error } = useSelector((state) => state.announcements);
  const { user } = useSelector((state) => state.auth);
  const [edit, setEdit] = React.useState(false);
  const [newAnnounce, setNewAnnounce] = React.useState('');

  function toggleEdit() {
    setEdit(!edit);
    console.log('edit mode', edit);
  }

  React.useEffect(() => {
    dispatch(getAnnouncements());
  }, []);

  return (
    <>
      {isLoding ? (
        <Typography>Loading...</Typography>
      ) : (
        <>
          {announcements.length === 0 ? (
            <Typography>No annoucement</Typography>
          ) : (
            <>
              <Stack direction="row" spacing={2} alignitem="center" alignContent="center">
                <EditIcon onClick={toggleEdit} cursor="pointer" />
                <Typography variant="h5">Announcement</Typography>
                <CampaignIcon />
                <CancelRoundedIcon
                  color="error"
                  onClick={function closeEditor() {
                    setEdit(false);
                  }}
                  sx={{ marginLeft: '2px' }}
                  cursor="pointer"
                />
              </Stack>
              <Box>
                <List>
                  {announcements.map((d, i) => {
                    return (
                      <ListItem key={i}>
                        ➼ {d.text}
                        {edit && (
                          <DeleteIcon
                            onClick={() => {
                              console.log('delete actions for:', d.id);
                              dispatch(deleteAnnouncement(d.id));
                            }}
                          />
                        )}
                      </ListItem>
                    );
                  })}
                </List>
                {edit && (
                  <Stack direction="row" spacing={2} p={2}>
                    <TextField
                      sx={{ height: '30px' }}
                      placeholder="type here ... "
                      id="editor"
                      onChange={(e) => {
                        setNewAnnounce(e.target.value);
                      }}
                    />
                    <Button
                      variant="contained"
                      sx={{ marginLeft: '10px', height: '30px' }}
                      onClick={() => dispatch(postAnnouncement({ text: newAnnounce }))}
                    >
                      upload
                    </Button>
                  </Stack>
                )}
              </Box>
            </>
          )}
        </>
      )}
    </>
  );
}
