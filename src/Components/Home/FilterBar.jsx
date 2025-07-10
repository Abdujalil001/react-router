import React, { useState } from 'react';

function FilterBar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  return (
    <div style={{background: '#fff', padding: '18px 32px 0 32px', borderBottom: '1px solid #eee'}}>
      <div style={{display: 'flex', alignItems: 'center', gap: 16, overflowX: 'auto'}}>
        <button style={{background: '#222', color: '#fff', border: 'none', borderRadius: 8, padding: '8px 18px', fontWeight: 600, cursor: 'pointer'}}>Ta'lim</button>
        {[...Array(12)].map((_, i) => (
          <button key={i} style={{background: '#f5f5f5', border: 'none', borderRadius: 8, padding: '8px 18px', fontWeight: 600, cursor: 'pointer'}}>Following</button>
        ))}
        <div style={{position: 'relative'}}>
          <button style={{background: '#f5f5f5', border: 'none', borderRadius: 8, padding: '8px 18px', fontWeight: 600, cursor: 'pointer'}} onClick={() => setDropdownOpen(v => !v)}>
            Following <span style={{marginLeft: 4}}>▼</span>
          </button>
          {dropdownOpen && (
            <div style={{position: 'absolute', top: 40, left: 0, background: '#fff', border: '1px solid #eee', borderRadius: 8, boxShadow: '0 2px 12px rgba(0,0,0,0.08)', zIndex: 10, minWidth: 120}}>
              <div style={{padding: 12, cursor: 'pointer'}}>Following ✓</div>
              {[...Array(5)].map((_, i) => (
                <div key={i} style={{padding: 12, cursor: 'pointer'}}>Ta'lim</div>
              ))}
            </div>
          )}
        </div>
        <button style={{background: '#f5f5f5', border: 'none', borderRadius: 8, padding: '8px 18px', fontWeight: 600, cursor: 'pointer'}}>Fillters</button>
      </div>
      <div style={{display: 'flex', gap: 16, marginTop: 18, marginBottom: 8}}>
        <input type="text" placeholder="Name" style={{padding: '10px 16px', borderRadius: 8, border: '1px solid #e0e0e0', fontSize: '1rem', width: 180}} />
        <input type="text" placeholder="Surname" style={{padding: '10px 16px', borderRadius: 8, border: '1px solid #e0e0e0', fontSize: '1rem', width: 180}} />
        <input type="text" placeholder="Search Task" style={{padding: '10px 16px', borderRadius: 8, border: '1px solid #e0e0e0', fontSize: '1rem', flex: 1}} />
        <button style={{background: '#11c26d', color: '#fff', border: 'none', borderRadius: 8, padding: '10px 32px', fontWeight: 600, fontSize: '1rem', cursor: 'pointer'}}>search</button>
      </div>
    </div>
  );
}

export default FilterBar; 