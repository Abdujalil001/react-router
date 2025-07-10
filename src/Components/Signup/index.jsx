import React, { useState, useEffect } from 'react';
import './style.css';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const navigate = useNavigate();
  const currentYear = new Date().getFullYear();
  const [year, setYear] = useState('');
  const [month, setMonth] = useState('');
  const [day, setDay] = useState('');
  const [daysInMonth, setDaysInMonth] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Yillar ro'yxati
  const years = [];
  for (let y = currentYear; y >= 1950; y--) {
    years.push(y);
  }

  // Oyliklar ro'yxati
  const months = [
    { value: 1, label: 'Yanvar' },
    { value: 2, label: 'Fevral' },
    { value: 3, label: 'Mart' },
    { value: 4, label: 'Aprel' },
    { value: 5, label: 'May' },
    { value: 6, label: 'Iyun' },
    { value: 7, label: 'Iyul' },
    { value: 8, label: 'Avgust' },
    { value: 9, label: 'Sentyabr' },
    { value: 10, label: 'Oktyabr' },
    { value: 11, label: 'Noyabr' },
    { value: 12, label: 'Dekabr' },
  ];

  // Tanlangan yil va oyga qarab kunlar sonini hisoblash
  useEffect(() => {
    if (year && month) {
      const days = new Date(year, month, 0).getDate();
      setDaysInMonth(Array.from({ length: days }, (_, i) => i + 1));
      if (day > days) setDay('');
    } else {
      setDaysInMonth([]);
      setDay('');
    }
  }, [year, month]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !password || !year || !month || !day) {
      alert('Iltimos, barcha maydonlarni to‘ldiring!');
      return;
    }
    // Ro'yxatdan o'tish muvaffaqiyatli bo'lsa
    navigate('/home');
  };

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2>Sign up</h2>
        <input type="text" placeholder="Your Name" value={name} onChange={e => setName(e.target.value)} />
        <div style={{ display: 'flex', gap: '8px' }}>
          <select value={year} onChange={e => setYear(e.target.value)}>
            <option value="">Year of birth</option>
            {years.map(y => (
              <option key={y} value={y}>{y}</option>
            ))}
          </select>
          <select value={month} onChange={e => setMonth(e.target.value)}>
            <option value="">Birth month</option>
            {months.map(m => (
              <option key={m.value} value={m.value}>{m.label}</option>
            ))}
          </select>
          <select value={day} onChange={e => setDay(e.target.value)} disabled={!year || !month}>
            <option value="">Birthday</option>
            {daysInMonth.map(d => (
              <option key={d} value={d}>{d}</option>
            ))}
          </select>
        </div>
        <input type="text" placeholder="Email address or user name" value={email} onChange={e => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
        <a href="#" className="link">forgot password</a>
        <button type="submit">Sign up</button>
        <div className="or">or</div>
        <button type="button" className="google-btn">
          <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="Google" width="20" height="20" />
          Google
        </button>
        <div className="footer-link">
          Already have an account? <a href="#" className="link">Sign Up</a>
        </div>
      </form>
    </div>
  );
}

export default Signup; 