
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { isAdminAuthenticated, logoutAdmin } from './auth';
import logo from '../assets/images/theretech.png';

const AdminLayout = () => {
  const navigate = useNavigate();
  const authed = isAdminAuthenticated();

  const doLogout = () => {
    logoutAdmin();
    navigate('/Admin/Login');
  };

  return (
    <div className="admin-layout" style={{ display: 'flex', minHeight: '100vh' }}>
      <aside style={{ width: '240px', background: '#0b1220', color: '#e5e7eb', padding: '16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
          <img src={logo} alt="ThereTech" style={{ width: 36, height: 36, borderRadius: 6, objectFit: 'contain' }} />
          <h2 style={{ margin: 0, fontSize: '16px' }}>ThereTech Admin</h2>
        </div>
        <nav style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <NavLink to="/Admin/Services" style={{ color: '#e5e7eb' }}>Services</NavLink>
          <NavLink to="/Admin/Projects" style={{ color: '#e5e7eb' }}>Projects</NavLink>
          <NavLink to="/Admin/About" style={{ color: '#e5e7eb' }}>About</NavLink>
          <NavLink to="/Admin/Contact" style={{ color: '#e5e7eb' }}>Contact Submissions</NavLink>
          <NavLink to="/Admin/Users" style={{ color: '#e5e7eb' }}>Admin Users</NavLink>
        </nav>
        <div style={{ marginTop: 16 }}>
          {authed ? (
            <button onClick={doLogout} style={{ background: '#ef4444', color: '#fff', padding: 8, borderRadius: 6 }}>Logout</button>
          ) : (
            <NavLink to="/Admin/Login" style={{ color: '#93c5fd' }}>Login</NavLink>
          )}
        </div>
      </aside>
      <main style={{ flex: 1, padding: '20px', background: '#0f172a', color: '#e5e7eb' }}>
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;