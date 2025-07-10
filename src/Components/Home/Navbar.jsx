import React from 'react';

function Navbar() {
  return (
    <nav style={{
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '18px 32px', background: '#fff', borderBottom: '1px solid #eee', position: 'sticky', top: 0, zIndex: 10
    }}>
      <div style={{fontWeight: 700, fontSize: '2rem', color: '#1a1a1a'}}>Idea-up</div>
      <div style={{flex: 1, display: 'flex', justifyContent: 'center'}}>
        <input type="text" placeholder="Search Task" style={{width: 350, padding: '10px 16px', borderRadius: 8, border: '1px solid #e0e0e0', fontSize: '1rem'}} />
      </div>
      <div style={{display: 'flex', gap: 16}}>
        <button style={{background: '#f5f5f5', border: 'none', borderRadius: 8, padding: '8px 18px', fontWeight: 600, cursor: 'pointer'}}>My ideas</button>
        <button style={{background: '#f5f5f5', border: 'none', borderRadius: 8, padding: '8px 18px', fontWeight: 600, cursor: 'pointer'}}>Favorite ideas</button>
        <button style={{background: '#f5f5f5', border: 'none', borderRadius: 8, padding: '8px 18px', fontWeight: 600, cursor: 'pointer'}}>Acc</button>
      </div>
    </nav>
  );
}

export default Navbar; 