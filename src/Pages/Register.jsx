import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Alert from '@mui/material/Alert';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { Register } from '../Features/auth/services';
import { useSelector, useDispatch } from 'react-redux';
//`import MuiPhoneNumber from 'material-ui-phone-number';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function SignUpSide() {
  const dispatch = useDispatch();
  const [initial, setInitial] = useState('Mr.');
  const [mobile, setMobile] = useState(null);

  var { user, error, isLoding } = useSelector((state) => state.auth);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const payloadData = {
      name: data.get('name'),
      initial,
      username: data.get('username'),
      mobile,
      user_type: 'professor',
      password: data.get('password'),
    };

    // if (name && initial && username && mobile && password) {
    //   dispatch(Register(payloadData));
    // } else {
    //   error = 'Enter required fields';
    // }

    dispatch(Register(payloadData));
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://source.unsplash.com/random)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) => (t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900]),
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Register
            </Typography>
            {error && (
              <Alert variant="filled" severity="error">
                {error.code}
              </Alert>
            )}
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <InputLabel id="demo-simple-select-label">Initial</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={initial}
                label="Initial"
                onChange={(event) => setInitial(event.target.value)}
              >
                <MenuItem value={'Mr.'}>Mr.</MenuItem>
                <MenuItem value={'Mrs.'}>Mrs.</MenuItem>
                <MenuItem value={'Ms.'}>Ms.</MenuItem>
              </Select>
              <TextField
                margin="normal"
                required
                fullWidth
                id="name"
                label="Name"
                name="name"
                autoComplete="name"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="username"
                label="User Name"
                name="username"
                autoComplete="username"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              {/* <MuiPhoneNumber required defaultCountry={'in'} value={mobile} onChange={(e) => setMobile(e)} /> */}
              {isLoding ? (
                <Button disabled type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                  Register
                </Button>
              ) : (
                <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                  Register
                </Button>
              )}
              <Grid container>
                <Grid item>
                  <Link href="/login" variant="body2">
                    {'Do you have an account? Sign In'}
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
