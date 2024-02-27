import { Outlet, NavLink, useNavigate, useLocation } from 'react-router-dom';
import Drawer from '@mui/material/Drawer';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { AddCircleOutlineOutlined, SubjectOutlined } from '@mui/icons-material';
import { ListItemButton } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

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
    <div
      className="root-layout"
      style={{
        display: 'flex'
      }}
    >
      {/* app bar */}
      <AppBar sx={{ width: `calc(100% - ${drawerWidth}px)` }}>
        <Toolbar>
          <Typography>Welcome to the ninja website</Typography>
        </Toolbar>
      </AppBar>

      {/* side drawer */}
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

        {/* list / links */}

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
        <Box sx={{}}>
          <Outlet />
        </Box>
      </Box>
    </div>
  );
};

export default RootLayout;
