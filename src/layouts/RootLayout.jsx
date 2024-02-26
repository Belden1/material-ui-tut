import { Outlet, NavLink } from 'react-router-dom';

const RootLayout = () => {
  return (
    <div className="root-layout">
      <header>
        <nav style={{ display: 'flex', gap: '10px' }}>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/notes">Notes</NavLink>
          <NavLink to="/create">Create</NavLink>
        </nav>
      </header>

      {/* app bar */}

      {/* side drawer */}

      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
