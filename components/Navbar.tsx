import { AppBar, Box, Toolbar, IconButton, Typography, Menu, Container, Button, MenuItem, Tooltip } from '@mui/material';
import { useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import LogoutIcon from '@mui/icons-material/Logout';
import MenuIcon from '@mui/icons-material/Menu';
import { useQuery } from 'react-query';

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const pages = ['Dashboard', 'Clientes', 'Reglas de acumulación'];
  const settings = ['Editar perfil', 'Cerrar sesión'];

  const fetchUserData = async () => {
    const response = await fetch('/api/user');
    if (!response.ok) {
      throw new Error('Error fetching data');
    }
    return response.json();
  };

  const { data } = useQuery('user', fetchUserData);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar color="info">
      <Container>
        <Toolbar className='container-1'>
          {/* Phone responsive */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none', lg: 'none' } }}>
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
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box className='header-box1'>
          </Box>
          <Box className='header-box2'>
            <Button
              className='MuiButtonNav'
              key={1}
              onClick={handleCloseNavMenu}
            >
              Dashboard
            </Button>
            <Button
              className='MuiButtonNav'
              key={2}
              onClick={handleCloseNavMenu}
            >
              Clientes
            </Button>
            <Button
              className='MuiButtonNav2'
              key={3}
              onClick={handleCloseNavMenu}
            >
              Reglas de acumulación
            </Button>
          </Box>
          <Box className='header-box3'>
            <Typography className='MuiUserName'>{data?.name}</Typography>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <KeyboardArrowDownIcon />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '35px' }}
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
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  {setting === 'Cerrar sesión' ? <LogoutIcon /> : null}
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;