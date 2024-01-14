import { AppBar, Box, Toolbar, IconButton, Typography, Menu, Container, Button, MenuItem, Tooltip } from '@mui/material';
import { useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import LogoutIcon from '@mui/icons-material/Logout';
import MenuIcon from '@mui/icons-material/Menu';
import { useQuery } from 'react-query';
import { useRouter } from 'next/router';

const Navbar = () => {

  const [anchorElNav, setAnchorElNav]         = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser]       = useState<null | HTMLElement>(null);
  const [buttonNavActive, setButtonNavActive] = useState('dashboard');
  const [dashboardColor, setDashboardColor]   = useState('#ffffff');
  const [clientColor, setClientColor]         = useState('#644BBA');
  const [rulesColor, setRulesColor]           = useState('#644BBA');
  const pages     = ['Dashboard', 'Clientes', 'Reglas de acumulación'];
  const settings  = ['Editar perfil', 'Cerrar sesión'];
  const router    = useRouter();

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
              variant={buttonNavActive === 'dashboard'  ? 'contained' : 'outlined'}
              color={buttonNavActive === 'dashboard' ? 'primary': 'info'}
              sx={{color:dashboardColor}}
              key={1}
              onClick={() =>{
                setButtonNavActive('dashboard');
                setDashboardColor('#ffffff');
                setClientColor('#644BBA');
                setRulesColor('#644BBA');
                router.push('/');
              }}
            >
              Dashboard
            </Button>
            <Button
              className='MuiButtonNav'
              variant={buttonNavActive === 'providers'  ? 'contained' : 'outlined'}
              color={buttonNavActive === 'providers' ? 'primary': 'info'}
              sx={{color: clientColor}}
              key={2}
              onClick={() =>{
                setButtonNavActive('providers');
                setDashboardColor('#644BBA');
                setClientColor('#ffffff');
                setRulesColor('#644BBA');
                router.push('/');
              }}
            >
              Clientes
            </Button>
            <Button
              className='MuiButtonNav2'
              variant={buttonNavActive === 'rules'  ? 'contained' : 'text'}
              color={buttonNavActive === 'rules' ? 'primary': 'info'}
              sx={{color: rulesColor}}
              key={3}
              onClick={() =>{
                setButtonNavActive('rules');
                setDashboardColor('#644BBA');
                setClientColor('#644BBA');
                setRulesColor('#ffffff');
                router.push('/');
              }}
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