import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { loginAdmin, ensureDefaultAdmin, isAdminAuthenticated } from '../../admin/auth';
import logo from '../../assets/images/theretech.png';

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    ensureDefaultAdmin();
    if (isAdminAuthenticated()) {
      navigate('/Admin');
    }
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    const ok = loginAdmin(username, password);
    if (!ok) {
      setError('Invalid credentials');
      return;
    }
    const to = location.state?.from?.pathname || '/Admin';
    navigate(to);
  };

  return (
    <div style={{ display: 'flex', minHeight: '100vh', alignItems: 'center', justifyContent: 'center', background: '#0f172a' }}>
      <div style={{ width: 360, background: '#111827', padding: 24, borderRadius: 8, color: '#e5e7eb' }}>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <img src={logo} alt="ThereTech" style={{ width: 80, height: 80, borderRadius: 8, objectFit: 'contain' }} />
        </div>
        <h2 style={{ textAlign: 'center' }}>Admin Login</h2>
        {error && <p style={{ color: '#ef4444' }}>{error}</p>}
        <form onSubmit={onSubmit} style={{ display: 'grid', gap: 8 }}>
          <input placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          <button type="submit" style={{ background: '#2563eb', color: '#fff', padding: 8, borderRadius: 6 }}>Login</button>
          <p style={{ fontSize: 12, opacity: 0.8 }}>Hint: Ask +250780904149 for the password</p>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;