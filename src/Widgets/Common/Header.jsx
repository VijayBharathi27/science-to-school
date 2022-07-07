import * as React from 'react';

import { Typography, IconButton, Toolbar, Box, AppBar, Drawer } from '@mui/material';
import { Menu, Container, Avatar, Button, Tooltip, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import BiotechTwoToneIcon from '@mui/icons-material/BiotechTwoTone';
import Cookies from 'js-cookie';
import { useDispatch, useSelector } from 'react-redux';
import PList from '../List';
import { logout } from '../../Features/auth/authSlice';

const textColor = 'black';
const bgColor = 'white';

const pages = ['Home', 'Books', 'Assignments', 'Quizzes', 'Help'];

const NavBar = () => {
  const dispatch = useDispatch();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [openProfile, setOpenProfile] = React.useState(false);

  const handleLogout = () => {
    Cookies.remove('token');
    dispatch(logout()); 
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" width="100vw" bgcolor="#f2f6fc">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* for bigger screen*/}
          <BiotechTwoToneIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.1rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Science to School
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textalign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {/* for smaller screen */}
          <BiotechTwoToneIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: { sm: '.1rem' },
              color: 'inherit',
              textDecoration: 'none',
              fontSize: { xs: '1.5em', sm: '1em' },
            }}
          >
            Science to School
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button key={page} onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white', display: 'block' }}>
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Profile picture" src="kid.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem onClick={handleCloseUserMenu}>
                <Button onClick={() => setOpenProfile(!openProfile)}>Profile</Button>
                <Drawer anchor={'right'} open={openProfile} onClose={() => setOpenProfile(false)}>
                  <PList />
                </Drawer>
              </MenuItem>
              <MenuItem onClick={handleCloseUserMenu}>
                <Button onClick={handleLogout} textalign="center">
                  Logout
                </Button>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar;
