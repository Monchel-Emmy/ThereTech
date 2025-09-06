import React, { useEffect, useState } from 'react';
import { apiGet, apiPost } from '../../admin/api';
import { uploadToCloudinary } from '../../admin/uploader';

const labelStyle = { color: '#93c5fd', fontSize: 13 };
const inputStyle = { padding: 10, borderRadius: 6, border: '1px solid #334155', background: '#0b1220', color: '#e5e7eb' };
const textareaStyle = { ...inputStyle, minHeight: 120 };
const buttonPrimary = { background: '#2563eb', color: '#fff', padding: 10, borderRadius: 6, border: 'none' };
const buttonGhost = { background: 'transparent', color: '#93c5fd', padding: 10, borderRadius: 6, border: '1px solid #334155' };

const emptyMember = {
  name: '',
  role: '',
  bio: '',
  image: '',
  socialLinks: { linkedin: '', github: '', email: '' }
};

const AdminAbout = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const [teamForm, setTeamForm] = useState(emptyMember);
  const [editingTeamIndex, setEditingTeamIndex] = useState(null);
  const [showTeamEditor, setShowTeamEditor] = useState(false);
  const [uploading, setUploading] = useState(false);

  const load = async () => {
    try {
      setLoading(true);
      const res = await apiGet('/about');
      console.log('Loaded about data:', res);
      setData(res.about || null);
    } catch (e) {
      console.error('Error loading about data:', e);
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { load(); }, []);

  const onChange = (e) => {
    const { name, value } = e.target;
    setData((d) => ({ ...d, [name]: value }));
  };

  const onChangeStats = (e) => {
    const { name, value } = e.target;
    setData((d) => ({ ...d, stats: { ...d.stats, [name]: Number(value || 0) } }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log('Saving about data:', data);
      const result = await apiPost('/about', data);
      console.log('About save response:', result);
      
      // Reload fresh data from backend
      await load();
      alert('About saved successfully!');
    } catch (e) {
      console.error('Error saving about:', e);
      alert('Error saving about: ' + e.message);
    }
  };

  // Team editor helpers
  const openAddMember = () => {
    setTeamForm(emptyMember);
    setEditingTeamIndex(null);
    setShowTeamEditor(true);
  };

  const openEditMember = (idx) => {
    const m = (data.team || [])[idx];
    setTeamForm({
      name: m?.name || '',
      role: m?.role || '',
      bio: m?.bio || '',
      image: m?.image || '',
      socialLinks: {
        linkedin: m?.socialLinks?.linkedin || '',
        github: m?.socialLinks?.github || '',
        email: m?.socialLinks?.email || ''
      }
    });
    setEditingTeamIndex(idx);
    setShowTeamEditor(true);
  };

  const cancelTeamEdit = () => {
    setShowTeamEditor(false);
    setEditingTeamIndex(null);
    setTeamForm(emptyMember);
  };

  const saveMember = async () => {
    try {
      const nextTeam = [...(data.team || [])];
      if (editingTeamIndex === null || editingTeamIndex === undefined) {
        nextTeam.push(teamForm);
      } else {
        nextTeam[editingTeamIndex] = teamForm;
      }
      
      // Debug: Log what we're sending
      console.log('Saving team member:', teamForm);
      console.log('Updated data being sent:', { ...data, team: nextTeam });
      
      // Save to backend immediately
      const result = await apiPost('/about', { ...data, team: nextTeam });
      console.log('Backend response:', result);
      
      // Reload fresh data from backend
      await load();
      
      cancelTeamEdit();
      alert('Team member saved successfully!');
    } catch (e) {
      console.error('Error saving team member:', e);
      alert('Error saving team member: ' + e.message);
    }
  };

  const removeMember = async (idx) => {
    if (!confirm('Remove this team member?')) return;
    try {
      const nextTeam = (data.team || []).filter((_, i) => i !== idx);
      
      // Save to backend immediately
      await apiPost('/about', { ...data, team: nextTeam });
      
      // Reload fresh data from backend
      await load();
      
      alert('Team member removed successfully!');
    } catch (e) {
      alert('Error removing team member: ' + e.message);
    }
  };

  const onTeamChange = (e) => {
    const { name, value } = e.target;
    setTeamForm((f) => ({ ...f, [name]: value }));
  };

  const onSocialChange = (e) => {
    const { name, value } = e.target;
    setTeamForm((f) => ({ ...f, socialLinks: { ...f.socialLinks, [name]: value } }));
  };

  const onImageFile = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    try {
      setUploading(true);
      const result = await uploadToCloudinary(file);
      setTeamForm((f) => ({ ...f, image: result.secure_url }));
    } catch (err) {
      alert(err.message);
    } finally {
      setUploading(false);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: 'salmon' }}>{error}</p>;
  if (!data) return <p>No about data</p>;

  return (
    <div>
      <h1 style={{ color: '#e5e7eb' }}>About</h1>
      <form onSubmit={onSubmit} style={{ display: 'grid', gap: '12px', maxWidth: '1000px', background: '#0f172a', padding: 16, borderRadius: 8, border: '1px solid #334155' }}>
        <div>
          <label style={labelStyle}>Company Name</label>
          <input name="companyName" placeholder="Company Name" value={data.companyName || ''} onChange={onChange} required style={inputStyle} />
        </div>
        <div>
          <label style={labelStyle}>Tagline</label>
          <input name="tagline" placeholder="Tagline" value={data.tagline || ''} onChange={onChange} required style={inputStyle} />
        </div>
        <div>
          <label style={labelStyle}>Main Description</label>
          <textarea name="mainDescription" placeholder="Main Description" value={data.mainDescription || ''} onChange={onChange} required style={textareaStyle} />
        </div>
        <div>
          <label style={labelStyle}>Mission</label>
          <textarea name="mission" placeholder="Mission" value={data.mission || ''} onChange={onChange} required style={textareaStyle} />
        </div>
        <div>
          <label style={labelStyle}>Vision</label>
          <textarea name="vision" placeholder="Vision" value={data.vision || ''} onChange={onChange} required style={textareaStyle} />
        </div>

        <fieldset style={{ border: '1px solid #334155', padding: 12, borderRadius: 8 }}>
          <legend style={labelStyle}>Stats</legend>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '8px' }}>
            <div>
              <label style={labelStyle}>Projects Completed</label>
              <input type="number" name="projectsCompleted" placeholder="0" value={data.stats?.projectsCompleted || 0} onChange={onChangeStats} style={inputStyle} />
            </div>
            <div>
              <label style={labelStyle}>Clients Served</label>
              <input type="number" name="clientsServed" placeholder="0" value={data.stats?.clientsServed || 0} onChange={onChangeStats} style={inputStyle} />
            </div>
            <div>
              <label style={labelStyle}>Years Experience</label>
              <input type="number" name="yearsExperience" placeholder="0" value={data.stats?.yearsExperience || 0} onChange={onChangeStats} style={inputStyle} />
            </div>
            <div>
              <label style={labelStyle}>Team Members</label>
              <input type="number" name="teamMembers" placeholder="0" value={data.stats?.teamMembers || 0} onChange={onChangeStats} style={inputStyle} />
            </div>
          </div>
        </fieldset>

        <fieldset style={{ border: '1px solid #334155', padding: 12, borderRadius: 8 }}>
          <legend style={labelStyle}>Team</legend>
          <div style={{ marginBottom: 12, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ color: '#e5e7eb' }}>Manage team members displayed on the About page</span>
            <button type="button" onClick={openAddMember} style={buttonGhost}>Add Member</button>
          </div>

          {(data.team || []).length === 0 && (
            <p style={{ color: '#9ca3af' }}>No team members yet.</p>
          )}

          {(data.team || []).map((m, idx) => (
            <div key={idx} style={{ border: '1px solid #334155', borderRadius: 8, padding: 12, marginBottom: 8, display: 'grid', gridTemplateColumns: '1fr auto', alignItems: 'center', gap: 8 }}>
              <div style={{ color: '#e5e7eb' }}>
                <div style={{ fontWeight: 600 }}>{m.name} <span style={{ opacity: 0.7 }}>— {m.role}</span></div>
                {m.bio && <div style={{ fontSize: 13, opacity: 0.9, marginTop: 4 }}>{m.bio}</div>}
                <div style={{ fontSize: 12, opacity: 0.8, marginTop: 4 }}>
                  {m.socialLinks?.linkedin && <span>LinkedIn • </span>}
                  {m.socialLinks?.github && <span>GitHub • </span>}
                  {m.socialLinks?.email && <span>Email</span>}
                </div>
              </div>
              <div>
                <button type="button" onClick={() => openEditMember(idx)} style={buttonGhost}>Edit</button>
                <button type="button" onClick={() => removeMember(idx)} style={{ ...buttonGhost, marginLeft: 8 }}>Remove</button>
              </div>
            </div>
          ))}

          {showTeamEditor && (
            <div style={{ marginTop: 12, background: '#0b1220', border: '1px solid #334155', borderRadius: 8, padding: 12 }}>
              <h3 style={{ color: '#e5e7eb', marginTop: 0 }}>{editingTeamIndex === null ? 'Add Team Member' : 'Edit Team Member'}</h3>
              <div style={{ display: 'grid', gap: 12, gridTemplateColumns: '1fr 1fr' }}>
                <div>
                  <label style={labelStyle}>Name</label>
                  <input name="name" placeholder="Full Name" value={teamForm.name} onChange={onTeamChange} style={inputStyle} />
                </div>
                <div>
                  <label style={labelStyle}>Role</label>
                  <input name="role" placeholder="Role (e.g., CTO)" value={teamForm.role} onChange={onTeamChange} style={inputStyle} />
                </div>
              </div>
              <div>
                <label style={labelStyle}>Bio</label>
                <textarea name="bio" placeholder="Short bio" value={teamForm.bio} onChange={onTeamChange} style={textareaStyle} />
              </div>
              <div>
                <label style={labelStyle}>Image URL</label>
                <input name="image" placeholder="https://..." value={teamForm.image} onChange={onTeamChange} style={inputStyle} />
              </div>
              <div>
                <label style={labelStyle}>Or Upload Image</label>
                <input type="file" accept="image/*" onChange={onImageFile} style={{ ...inputStyle, padding: 6 }} />
                {uploading && <p style={{ color: '#93c5fd', fontSize: 12, marginTop: 6 }}>Uploading...</p>}
              </div>
              <div style={{ display: 'grid', gap: 12, gridTemplateColumns: '1fr 1fr 1fr' }}>
                <div>
                  <label style={labelStyle}>LinkedIn</label>
                  <input name="linkedin" placeholder="https://linkedin.com/in/..." value={teamForm.socialLinks.linkedin} onChange={onSocialChange} style={inputStyle} />
                </div>
                <div>
                  <label style={labelStyle}>GitHub</label>
                  <input name="github" placeholder="https://github.com/..." value={teamForm.socialLinks.github} onChange={onSocialChange} style={inputStyle} />
                </div>
                <div>
                  <label style={labelStyle}>Email</label>
                  <input name="email" placeholder="email@example.com" value={teamForm.socialLinks.email} onChange={onSocialChange} style={inputStyle} />
                </div>
              </div>
              <div style={{ display: 'flex', gap: 8, marginTop: 12 }}>
                <button type="button" onClick={saveMember} style={buttonPrimary} disabled={uploading}>{editingTeamIndex === null ? 'Add Member' : 'Save Changes'}</button>
                <button type="button" onClick={cancelTeamEdit} style={buttonGhost} disabled={uploading}>Cancel</button>
              </div>
            </div>
          )}
        </fieldset>

        <div>
          <button type="submit" style={buttonPrimary}>Save</button>
        </div>
      </form>
    </div>
  );
};

export default AdminAbout;