import React, { useEffect, useState } from 'react';
import { apiGet, apiPost, apiPut, apiDelete, apiPatch } from '../../admin/api';
import { uploadToCloudinary } from '../../admin/uploader';

const emptyForm = { title: '', description: '', shortDescription: '', category: 'web', status: 'completed', isFeatured: false, client: '', duration: '', teamSize: '', technologies: '', githubUrl: '', liveUrl: '', image: '' };

const labelStyle = { color: '#93c5fd', fontSize: 13 };
const inputStyle = { padding: 10, borderRadius: 6, border: '1px solid #334155', background: '#0b1220', color: '#e5e7eb' };
const textareaStyle = { ...inputStyle, minHeight: 90 };
const selectStyle = inputStyle;
const buttonPrimary = { background: '#2563eb', color: '#fff', padding: 10, borderRadius: 6, border: 'none' };
const buttonGhost = { background: 'transparent', color: '#93c5fd', padding: 10, borderRadius: 6, border: '1px solid #334155' };

const AdminProjects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [form, setForm] = useState(emptyForm);
  const [editingId, setEditingId] = useState(null);
  const [uploading, setUploading] = useState(false);

  const load = async () => {
    try {
      setLoading(true);
      const res = await apiGet('/projects');
      setProjects(res.projects || []);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { load(); }, []);

  const onChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((f) => ({ ...f, [name]: type === 'checkbox' ? checked : value }));
  };

  const toPayload = () => ({
    title: form.title,
    description: form.description,
    shortDescription: form.shortDescription,
    category: form.category,
    status: form.status,
    isFeatured: !!form.isFeatured,
    client: form.client || undefined,
    duration: form.duration || undefined,
    teamSize: form.teamSize ? Number(form.teamSize) : undefined,
    technologies: form.technologies ? form.technologies.split(',').map(s => s.trim()).filter(Boolean) : [],
    githubUrl: form.githubUrl || undefined,
    liveUrl: form.liveUrl || undefined,
    image: form.image || undefined
  });

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingId) {
        await apiPut(`/projects/${editingId}`, toPayload());
      } else {
        await apiPost('/projects', toPayload());
      }
      setForm(emptyForm);
      setEditingId(null);
      await load();
    } catch (e) {
      alert(e.message);
    }
  };

  const onEdit = (p) => {
    setEditingId(p._id);
    setForm({
      title: p.title || '',
      description: p.description || '',
      shortDescription: p.shortDescription || '',
      category: p.category || 'web',
      status: p.status || 'completed',
      isFeatured: !!p.isFeatured,
      client: p.client || '',
      duration: p.duration || '',
      teamSize: p.teamSize?.toString?.() || '',
      technologies: (p.technologies || []).join(', '),
      githubUrl: p.githubUrl || '',
      liveUrl: p.liveUrl || '',
      image: p.image || ''
    });
  };

  const onDelete = async (id) => {
    if (!confirm('Delete this project?')) return;
    try {
      await apiDelete(`/projects/${id}`);
      await load();
    } catch (e) {
      alert(e.message);
    }
  };

  const onToggleFeatured = async (id) => {
    try {
      await apiPatch(`/projects/${id}/toggle-featured`, {});
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
      <h1 style={{ color: '#e5e7eb' }}>Projects</h1>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <form onSubmit={onSubmit} style={{ marginBottom: '16px', display: 'grid', gap: '12px', maxWidth: '760px', background: '#0f172a', padding: 16, borderRadius: 8, border: '1px solid #334155' }}>
        <div>
          <label style={labelStyle}>Title</label>
          <input name="title" placeholder="Project Title" value={form.title} onChange={onChange} required style={inputStyle} />
        </div>
        <div>
          <label style={labelStyle}>Description</label>
          <textarea name="description" placeholder="Full Description" value={form.description} onChange={onChange} required style={textareaStyle} />
        </div>
        <div>
          <label style={labelStyle}>Short Description</label>
          <input name="shortDescription" placeholder="Short Description" value={form.shortDescription} onChange={onChange} style={inputStyle} />
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
        <div style={{ display: 'grid', gap: 12, gridTemplateColumns: '1fr 1fr 1fr' }}>
          <div>
            <label style={labelStyle}>Category</label>
            <select name="category" value={form.category} onChange={onChange} style={selectStyle}>
              <option value="web">web</option>
              <option value="mobile">mobile</option>
              <option value="iot">iot</option>
              <option value="ai">ai</option>
              <option value="cloud">cloud</option>
              <option value="design">design</option>
              <option value="other">other</option>
            </select>
          </div>
          <div>
            <label style={labelStyle}>Status</label>
            <select name="status" value={form.status} onChange={onChange} style={selectStyle}>
              <option value="completed">completed</option>
              <option value="in-progress">in-progress</option>
              <option value="planned">planned</option>
            </select>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, paddingTop: 20 }}>
            <input type="checkbox" id="isFeatured" name="isFeatured" checked={form.isFeatured} onChange={onChange} />
            <label htmlFor="isFeatured" style={labelStyle}>Featured</label>
          </div>
        </div>
        <div style={{ display: 'grid', gap: 12, gridTemplateColumns: '1fr 1fr 1fr' }}>
          <div>
            <label style={labelStyle}>Client</label>
            <input name="client" placeholder="e.g., SmartLiving Corp." value={form.client} onChange={onChange} style={inputStyle} />
          </div>
          <div>
            <label style={labelStyle}>Duration</label>
            <input name="duration" placeholder="e.g., 6 months" value={form.duration} onChange={onChange} style={inputStyle} />
          </div>
          <div>
            <label style={labelStyle}>Team Size</label>
            <input name="teamSize" placeholder="e.g., 6" value={form.teamSize} onChange={onChange} style={inputStyle} />
          </div>
        </div>
        <div>
          <label style={labelStyle}>Technologies (comma separated)</label>
          <input name="technologies" placeholder="e.g., Python, Arduino, React Native, MQTT, AWS IoT" value={form.technologies} onChange={onChange} style={inputStyle} />
        </div>
        <div style={{ display: 'grid', gap: 12, gridTemplateColumns: '1fr 1fr' }}>
          <div>
            <label style={labelStyle}>GitHub URL</label>
            <input name="githubUrl" placeholder="https://github.com/..." value={form.githubUrl} onChange={onChange} style={inputStyle} />
          </div>
          <div>
            <label style={labelStyle}>Live Demo URL</label>
            <input name="liveUrl" placeholder="https://example.com/demo" value={form.liveUrl} onChange={onChange} style={inputStyle} />
          </div>
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          <button type="submit" style={buttonPrimary}>{editingId ? 'Update' : 'Create'}</button>
          {editingId && <button type="button" onClick={() => { setEditingId(null); setForm(emptyForm); }} style={buttonGhost}>Cancel</button>}
        </div>
      </form>

      <table style={{ width: '100%', borderCollapse: 'collapse', color: '#e5e7eb' }}>
        <thead>
          <tr>
            <th align="left">Title</th>
            <th align="left">Client</th>
            <th align="left">Duration</th>
            <th align="left">Team</th>
            <th align="left">Featured</th>
            <th align="left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {projects.map(p => (
            <tr key={p._id}>
              <td>{p.title}</td>
              <td>{p.client || '-'}</td>
              <td>{p.duration || '-'}</td>
              <td>{p.teamSize ? `${p.teamSize} members` : '-'}</td>
              <td>{p.isFeatured ? 'Yes' : 'No'} <button onClick={() => onToggleFeatured(p._id)} style={{ ...buttonGhost, marginLeft: 8 }}>Toggle</button></td>
              <td>
                <button onClick={() => onEdit(p)} style={buttonGhost}>Edit</button>
                <button onClick={() => onDelete(p._id)} style={{ ...buttonGhost, marginLeft: 8 }}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminProjects;