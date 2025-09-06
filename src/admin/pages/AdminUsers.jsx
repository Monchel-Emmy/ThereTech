import React, { useEffect, useState } from 'react';
import { getAdminUsers, saveAdminUsers, ensureDefaultAdmin } from '../../admin/auth';

const emptyUser = { username: '', password: '' };
const labelStyle = { color: '#93c5fd', fontSize: 13 };
const inputStyle = { padding: 10, borderRadius: 6, border: '1px solid #334155', background: '#0b1220', color: '#e5e7eb' };
const buttonPrimary = { background: '#2563eb', color: '#fff', padding: 10, borderRadius: 6, border: 'none' };
const buttonGhost = { background: 'transparent', color: '#93c5fd', padding: 10, borderRadius: 6, border: '1px solid #334155' };

const AdminUsers = () => {
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState(emptyUser);

  useEffect(() => {
    ensureDefaultAdmin();
    setUsers(getAdminUsers());
  }, []);

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const onAdd = (e) => {
    e.preventDefault();
    if (!form.username || !form.password) return;
    const next = [...users, { username: form.username, password: form.password }];
    saveAdminUsers(next);
    setUsers(next);
    setForm(emptyUser);
  };

  const onDelete = (u) => {
    if (!confirm(`Remove admin '${u.username}'?`)) return;
    const next = users.filter(x => x.username !== u.username);
    saveAdminUsers(next);
    setUsers(next);
  };

  return (
    <div>
      <h1 style={{ color: '#e5e7eb' }}>Admin Users</h1>
      <form onSubmit={onAdd} style={{ display: 'grid', gap: 12, marginBottom: 16, background: '#0f172a', padding: 16, borderRadius: 8, border: '1px solid #334155', maxWidth: 560 }}>
        <div>
          <label style={labelStyle}>Username</label>
          <input name="username" placeholder="username" value={form.username} onChange={onChange} style={inputStyle} />
        </div>
        <div>
          <label style={labelStyle}>Password</label>
          <input name="password" placeholder="password" value={form.password} onChange={onChange} style={inputStyle} />
        </div>
        <div>
          <button type="submit" style={buttonPrimary}>Add Admin</button>
        </div>
      </form>
      <table style={{ width: '100%', borderCollapse: 'collapse', color: '#e5e7eb' }}>
        <thead>
          <tr>
            <th align="left">Username</th>
            <th align="left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(u => (
            <tr key={u.username}>
              <td>{u.username}</td>
              <td>
                <button onClick={() => onDelete(u)} style={buttonGhost}>Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminUsers;