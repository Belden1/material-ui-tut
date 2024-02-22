import { Outlet, NavLink } from 'react-router-dom';

const RootLayout = () => {
  return (
    <div className="root-layout">
      {/* <header>
        <nav style={{ display: 'flex', gap: '10px' }}>
          <NavLink to="/">Notes</NavLink>
          <NavLink to="/create">Create</NavLink>
        </nav>
      </header> */}
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
