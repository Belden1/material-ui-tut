import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { AppBar, Avatar, Box, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material';
import { AddCircleOutlineOutlined, SubjectOutlined } from '@mui/icons-material';
import { format } from 'date-fns';

const drawerWidth = 240;

const RootLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    {
      text: 'My Notes',
      icon: <SubjectOutlined color="secondary" />,
      path: '/'
    },
    {
      text: 'Create Note',
      icon: <AddCircleOutlineOutlined color="secondary" />,
      path: '/create'
    }
  ];

  return (
    <Box className="root-layout" sx={{ display: 'flex' }}>
      <AppBar elevation={0} sx={{ width: `calc(100% - ${drawerWidth}px)` }}>
        <Toolbar>
          <Typography sx={{ flexGrow: 1 }}>Today is the {format(new Date(), 'do MMMM y')}</Typography>
          <Typography>Mario</Typography>
          <Avatar src="/mario-av.png" alt="Mario" sx={{ marginLeft: 2 }} />
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        anchor="left"
        sx={{
          width: drawerWidth,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box'
          }
        }}
      >
        <Box>
          <Typography variant="h5" padding={2}>
            Ninja Notes
          </Typography>
        </Box>
        <Divider />
        <List>
          {menuItems.map((item) => (
            <ListItem
              key={item.text}
              disablePadding
              onClick={() => navigate(item.path)}
              sx={location.pathname === item.path ? { background: '#f4f4f4' } : null}
            >
              <ListItemButton>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box component="main" padding={3} sx={{ flexGrow: 1 }}>
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
};

export default RootLayout;
