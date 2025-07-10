import './style.css';
import logo from "../../assets/login.svg";
import { useNavigate, Link } from 'react-router-dom';
import { useState } from 'react';

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const users = [
        {
            email: "Abdujalil.com",
            password: "13906"
        }
    ];

    function login() {
        if (email === '' || password === '') {
            alert("Iltimos, email va parolni to‘ldiring!");
            return;
        }
        navigate('/signup');
    }

    return ( 
        <div className='container'>
            <div className='flex'>
                <h2>Log in to your account</h2>
                <p>Enter your email address and password to login</p>
                
                <input 
                    type="email" 
                    placeholder='📧   Email address or user name'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                /><br />

                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <input 
                        type={showPassword ? "text" : "password"}
                        placeholder='🔐   Password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <i 
                        className="fa-solid fa-eye" 
                        onClick={() => setShowPassword(!showPassword)}
                        style={{ cursor: 'pointer', marginLeft: '10px' }}
                    ></i>
                </div>
                
                <button className='btn' onClick={login}>Login</button><br />
                
                <div className='vib'>
                    <p className='p'>----------------  or     ----------------</p><br />
                    <button className='btn1'>Google</button><br />
                    <h4>Don't you have an account? <Link to="/signup"><span>Sign up</span></Link></h4>
                </div>
            </div>
            <img src={logo} alt="login" />
        </div>
    );
}

export default Login;
