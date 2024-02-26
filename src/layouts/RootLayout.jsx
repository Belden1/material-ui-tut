import { Outlet, NavLink } from 'react-router-dom';
import Drawer from '@mui/material/Drawer';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const drawerWidth = 240;

const RootLayout = () => {
  return (
    <div
      className="root-layout"
      style={{
        display: 'flex'
      }}
    >
      <header>
        <nav style={{ display: 'flex', gap: '10px' }}>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/notes">Notes</NavLink>
          <NavLink to="/create">Create</NavLink>
        </nav>
      </header>

      {/* app bar */}

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
          <Typography variant="h5">Ninja Notes</Typography>
        </Box>
      </Drawer>

      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
