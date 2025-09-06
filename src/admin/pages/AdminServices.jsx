import React, { useEffect, useState } from 'react';
import { apiGet, apiPost, apiPut, apiDelete } from '../../admin/api';
import { uploadToCloudinary } from '../../admin/uploader';

const emptyForm = { name: '', description: '', icon: '', category: 'web', features: '', image: '' };

const labelStyle = { color: '#93c5fd', fontSize: 13 };
const inputStyle = { padding: 10, borderRadius: 6, border: '1px solid #334155', background: '#0b1220', color: '#e5e7eb' };
const textareaStyle = { ...inputStyle, minHeight: 90 };
const selectStyle = inputStyle;
const buttonPrimary = { background: '#2563eb', color: '#fff', padding: 10, borderRadius: 6, border: 'none' };
const buttonGhost = { background: 'transparent', color: '#93c5fd', padding: 10, borderRadius: 6, border: '1px solid #334155' };

const AdminServices = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [form, setForm] = useState(emptyForm);
  const [editingId, setEditingId] = useState(null);
  const [uploading, setUploading] = useState(false);

  const load = async () => {
    try {
      setLoading(true);
      const res = await apiGet('/services');
      setServices(res.services || []);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { load(); }, []);

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const toPayload = () => ({
    name: form.name,
    description: form.description,
    icon: form.icon,
    image: form.image || undefined,
    category: form.category,
    features: form.features.split(',').map(s => s.trim()).filter(Boolean)
  });

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingId) {
        await apiPut(`/services/${editingId}`, toPayload());
      } else {
        await apiPost('/services', toPayload());
      }
      setForm(emptyForm);
      setEditingId(null);
      await load();
    } catch (e) {
      alert(e.message);
    }
  };

  const onEdit = (svc) => {
    setEditingId(svc._id);
    setForm({
      name: svc.name || '',
      description: svc.description || '',
      icon: svc.icon || '',
      image: svc.image || '',
      category: svc.category || 'web',
      features: (svc.features || []).join(', ')
    });
  };

  const onDelete = async (id) => {
    if (!confirm('Delete this service?')) return;
    try {
      await apiDelete(`/services/${id}`);
      await load();
    } catch (e) {
      alert(e.message);
    }
  };

  const onImageFile = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    try {
      setUploading(true);
      const result = await uploadToCloudinary(file);
      setForm((f) => ({ ...f, image: result.secure_url }));
    } catch (err) {
      alert(err.message);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div>
      <h1 style={{ color: '#e5e7eb' }}>Services</h1>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'salmon' }}>{error}</p>}

      <form onSubmit={onSubmit} style={{ marginBottom: '16px', display: 'grid', gap: '12px', maxWidth: '760px', background: '#0f172a', padding: 16, borderRadius: 8, border: '1px solid #334155' }}>
        <div>
          <label style={labelStyle}>Service Name</label>
          <input name="name" placeholder="e.g., IoT Solutions" value={form.name} onChange={onChange} required style={inputStyle} />
        </div>
        <div>
          <label style={labelStyle}>Description</label>
          <textarea name="description" placeholder="Service description" value={form.description} onChange={onChange} required style={textareaStyle} />
        </div>
        <div>
          <label style={labelStyle}>Icon (FontAwesome class)</label>
          <input name="icon" placeholder="e.g., fas fa-microchip" value={form.icon} onChange={onChange} style={inputStyle} />
        </div>
        <div>
          <label style={labelStyle}>Image URL</label>
          <input name="image" placeholder="https://..." value={form.image} onChange={onChange} style={inputStyle} />
          <div style={{ marginTop: 8 }}>
            <label style={labelStyle}>Or Upload Image</label>
            <input type="file" accept="image/*" onChange={onImageFile} style={{ ...inputStyle, padding: 6 }} />
            {uploading && <p style={{ color: '#93c5fd', fontSize: 12, marginTop: 6 }}>Uploading...</p>}
          </div>
        </div>
        <div>
          <label style={labelStyle}>Category</label>
          <select name="category" value={form.category} onChange={onChange} style={selectStyle}>
            <option value="web">web</option>
            <option value="mobile">mobile</option>
            <option value="cloud">cloud</option>
            <option value="design">design</option>
            <option value="consulting">consulting</option>
          </select>
        </div>
        <div>
          <label style={labelStyle}>Features (comma separated)</label>
          <input name="features" placeholder="e.g., Smart Home, Industrial IoT, Sensor Networks" value={form.features} onChange={onChange} style={inputStyle} />
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          <button type="submit" style={buttonPrimary}>{editingId ? 'Update' : 'Create'}</button>
          {editingId && <button type="button" onClick={() => { setEditingId(null); setForm(emptyForm); }} style={buttonGhost}>Cancel</button>}
        </div>
      </form>

      <table style={{ width: '100%', borderCollapse: 'collapse', color: '#e5e7eb' }}>
        <thead>
          <tr>
            <th align="left">Name</th>
            <th align="left">Category</th>
            <th align="left">Active</th>
            <th align="left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {services.map(svc => (
            <tr key={svc._id}>
              <td>{svc.name}</td>
              <td>{svc.category}</td>
              <td>{svc.isActive ? 'Yes' : 'No'}</td>
              <td>
                <button onClick={() => onEdit(svc)} style={buttonGhost}>Edit</button>
                <button onClick={() => onDelete(svc._id)} style={{ ...buttonGhost, marginLeft: 8 }}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminServices;