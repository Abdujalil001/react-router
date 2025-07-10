import React from 'react';

function PostCard({ name, title, text, likes }) {
  return (
    <div style={{background: '#fff', borderRadius: 16, boxShadow: '0 2px 12px rgba(0,0,0,0.06)', padding: 24, marginBottom: 18}}>
      <div style={{fontWeight: 600, fontSize: '1.1rem'}}>{name}</div>
      <div style={{color: '#888', fontSize: '0.98rem', marginBottom: 6}}>{title}</div>
      <div style={{color: '#222', fontSize: '1rem', marginBottom: 18}}>{text}</div>
      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
        <button style={{background: '#f5f5f5', border: 'none', borderRadius: 8, padding: '6px 18px', fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6}}>
          <span style={{color: '#11c26d', fontWeight: 700}}>{likes} K</span> <span role="img" aria-label="like">👍</span>
        </button>
        <button style={{background: '#f5f5f5', border: 'none', borderRadius: 8, padding: '6px 12px', fontWeight: 600, cursor: 'pointer'}}>
          <span style={{fontSize: 18}}>▾</span>
        </button>
      </div>
    </div>
  );
}

export default PostCard; 