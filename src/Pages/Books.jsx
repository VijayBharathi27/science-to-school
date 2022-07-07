import { TextField, Typography, Button, Box, MenuItem, Link, Divider } from '@mui/material';
import React from 'react';
import QuesBooks from '../Widgets/QuesBooks';
export default function Books() {
  function handleSubmit() {
    console.log('submitted');
  }
  return (
    <>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography variant="h4" m={1}>
          Books Page
        </Typography>
        <Typography variant="body1" m={1}>
          Submit the status of receival of books/articles/magazines, along with the students feedback for the same
        </Typography>
        <Box
          sx={{ width: { xs: '90vw', sm: '90vw', md: '50vw' }, height: { xs: '20vh', sm: '20vh', md: '30vh' } }}
          component="div"
          style={{
            backgroundImage: `url("/book.jpg")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '300px',
            marginBottom: '20px',
            borderRadius: '5px',
          }}
        ></Box>
        <Box
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row', md: 'row', lg: 'row' },
          }}
          justifyContent="center"
          alignItems="center"
          noValidate
          autoComplete="off"
          m={1}
        >
          <TextField
            // onChange={(e: React.ChangeEvent<any>) => {
            //   set_job_name(e.target.value);
            // }}
            sx={{
              width: { xs: '80vw', sm: '250px', md: '250px' },
              height: { xs: '44px', sm: '50px' },
              m: '10px',
            }}
            //select
            label="Your Class"
            placeholder="in number"
            //helperText="Please select your class"
          ></TextField>
          <TextField
            sx={{
              width: { xs: '80vw', sm: '250px', md: '250px' },
              height: { xs: '44px', sm: '50px' },
              m: '10px',
            }}
            label="Your Section"
          ></TextField>
          <Button
            variant="contained"
            sx={{
              width: { xs: '80vw', sm: '200px', md: '170px' },
              height: { xs: '44px', sm: '50px' },
              fontSize: '24',
              m: '10px',
            }}
            type="submit"
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </Box>
        <Divider />
        <Typography variant="body1" sx={{ margin: '2vh 1vw' }}>
          Note: The status about the books received till now can be found{' '}
          <Link href="/book-info" variant="body2">
            {'here'}
          </Link>
          .
        </Typography>
        <QuesBooks />
      </Box>
    </>
  );
}
// const classesList = [
//   {
//     value: '1',
//     label: '1',
//   },
//   {
//     value: '2',
//     label: '2',
//   },
//   {
//     value: '3',
//     label: '3',
//   },
//   {
//     value: '4',
//     label: '4',
//   },
//   {
//     value: '5',
//     label: '5',
//   },
//   {
//     value: '6',
//     label: '6',
//   },
//   {
//     value: '7',
//     label: '7',
//   },
//   {
//     value: '8',
//     label: '8',
//   },
//   {
//     value: '9',
//     label: '9',
//   },
//   {
//     value: '10',
//     label: '10',
//   },
//   {
//     value: '11',
//     label: '11',
//   },
//   {
//     value: '12',
//     label: '12',
//   },
// ];
