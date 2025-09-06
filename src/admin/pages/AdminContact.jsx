import React, { useEffect, useState } from 'react';
import { apiGet, apiPatch } from '../../admin/api';

const selectStyle = { padding: 8, borderRadius: 6, border: '1px solid #334155', background: '#0b1220', color: '#e5e7eb' };

const AdminContact = () => {
  const [submissions, setSubmissions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const load = async () => {
    try {
      setLoading(true);
      const res = await apiGet('/contact/submissions');
      setSubmissions(res.submissions || []);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { load(); }, []);

  const updateStatus = async (id, status) => {
    try {
      await apiPatch(`/contact/submissions/${id}/status`, { status });
      await load();
    } catch (e) {
      alert(e.message);
    }
  };

  return (
    <div>
      <h1 style={{ color: '#e5e7eb' }}>Contact Submissions</h1>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'salmon' }}>{error}</p>}

      <table style={{ width: '100%', borderCollapse: 'collapse', color: '#e5e7eb' }}>
        <thead>
          <tr>
            <th align="left">Name</th>
            <th align="left">Email</th>
            <th align="left">Budget</th>
            <th align="left">Timeline</th>
            <th align="left">Status</th>
            <th align="left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {submissions.map(s => (
            <tr key={s._id}>
              <td>{s.name}</td>
              <td>{s.email}</td>
              <td>{s.budget}</td>
              <td>{s.timeline}</td>
              <td>{s.status}</td>
              <td>
                <label style={{ marginRight: 8 }}>Update Status:</label>
                <select value={s.status} onChange={(e) => updateStatus(s._id, e.target.value)} style={selectStyle}>
                  <option value="new">new</option>
                  <option value="read">read</option>
                  <option value="replied">replied</option>
                  <option value="closed">closed</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminContact;