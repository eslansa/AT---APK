import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogOutIcon from '@mui/icons-material/LogOut';
import InputBase from '@mui/material/InputBase';
import { styled } from '@mui/material/styles';
import { Box, Typography } from '@mui/joy';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: 'rgba(255, 255, 255, 0.15)',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.25)',
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

function Dashboard() {
  const [accountAnchorEl, setAccountAnchorEl] = React.useState(null);
  const [menuAnchorEl, setMenuAnchorEl] = React.useState(null);

  const handleAccountClick = (event) => {
    setAccountAnchorEl(event.currentTarget);
  };

  const handleAccountClose = () => {
    setAccountAnchorEl(null);
  };

  const handleMenuClick = (event) => {
    setMenuAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setMenuAnchorEl(null);
  };

  const handleProfileClick = () => {
    handleAccountClose();
    // Aquí podrías agregar la lógica para abrir "Profile".
  };

  const handleMyAccountClick = () => {
    handleAccountClose();
    // Aquí podrías agregar la lógica para abrir "My Account".
  };

  const handleLogoutClick = () => {
    handleMenuClose();
    // Aquí podrías agregar la lógica para cerrar sesión.
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Box>
          AT
        </Box>
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Buscar…"
            inputProps={{ 'aria-label': 'buscar' }}
          />
        </Search>
        <Box sx={{  display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Typography variant="h6" color="inherit">
        Adrenalina y Turismo en todo el mundo!
      </Typography>
    </Box>
        <div style={{ flexGrow: 1 }} />
        
        <IconButton
          edge="end"
          color="inherit"
          aria-label="account"
          aria-controls="account-menu"
          aria-haspopup="true"
          onClick={handleAccountClick}
        >
          <AccountCircleIcon />
        </IconButton>
        <IconButton
          edge="end"
          color="inherit"
          aria-label="menu"
          aria-controls="menu-menu"
          aria-haspopup="true"
          onClick={handleMenuClick}
        >
          <LogOutIcon />
        </IconButton>
        <Menu
          id="account-menu"
          anchorEl={accountAnchorEl}
          keepMounted
          open={Boolean(accountAnchorEl)}
          onClose={handleAccountClose}
        >
          <MenuItem onClick={handleProfileClick}>Profile</MenuItem>
          <MenuItem onClick={handleMyAccountClick}>My Account</MenuItem>
        </Menu>
        <Menu
          id="menu-menu"
          anchorEl={menuAnchorEl}
          keepMounted
          open={Boolean(menuAnchorEl)}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={handleLogoutClick}>Cerrar sesión</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
}

export default Dashboard;
