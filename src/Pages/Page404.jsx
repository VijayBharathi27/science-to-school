import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Typography, Box, Button } from '@mui/material';

function Page404() {
  return (
    <Box sx={{ maxWidth: 480, margin: 'auto', textAlign: 'center' }}>
      <Typography variant="h3" paragraph>
        Sorry, page not found!
      </Typography>
      <Typography sx={{ color: 'text.secondary' }}>
        Sorry, we couldn’t find the page you’re looking for. Perhaps you’ve mistyped the URL? Be sure to check your
        spelling.
      </Typography>

      <Button to="/" size="large" variant="contained" component={RouterLink}>
        Go to Home
      </Button>
    </Box>
  );
}

export default Page404;
