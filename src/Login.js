import React, { useState } from 'react';
import './Login.css';
import { useNavigate, Link } from 'react-router-dom'; // Added Link here
import { auth, signInWithEmailAndPassword } from './Firebase';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false); // Changed from 'false' string to boolean false
  const navigate = useNavigate();

  // Login Function
  const loginUser = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true); // Changed from 'true' string to boolean true
    
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/Dashboard');
    } catch (err) {
      switch (err.code) {
        case 'auth/user-not-found':
          setError('User Not Found');
          break;
        case 'auth/wrong-password':
          setError('Wrong Password');
          break;
        case 'auth/invalid-email':
          setError('Invalid Email');
          break;
        case 'auth/too-many-requests':
          setError('Too Many Requests Submitted');
          break;
        default:
          setError('Login Failed, Try Again Later');
      }
    } finally {
      setLoading(false); // Changed from empty string to boolean false
    }
  };

  const handleForgotPassword = () => {
    // You can implement your Firebase password reset logic here later!
    alert("Password reset functionality coming soon.");
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <div className="login-header">
          <span className="login-brand">StratCom</span>
          <h2>Welcome Back</h2>
          <p>Sign in to your account to continue</p>
        </div>

        {/* Moving onSubmit handler directly onto the form element is a cleaner best practice */}
        <form className="login-form" onSubmit={loginUser}>
          <div className="login-form-group">
            <label htmlFor="login-email">Email Address</label>
            <input 
              type="email" 
              id="login-email" 
              placeholder="example@domain.com" 
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="login-form-group">
            <label htmlFor="login-password">Password</label>
            <input 
              type="password" 
              id="login-password" 
              placeholder="Enter your password" 
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="login-form-options">
            <label className="login-remember">
              <input type="checkbox" /> Remember me
            </label>
            {/* Fixed: Turned this into a semantic button element to eliminate ESLint error */}
            <button 
              type="button" 
              className="login-forgot-btn" 
              onClick={handleForgotPassword}
            >
              Forgot password?
            </button>
          </div>

          <button 
            type="submit" 
            className="login-btn" 
            disabled={loading}
          >
            {loading ? 'Signing In .....' : 'Sign In'}
          </button>
        </form>

        {error && <div><p className='login-error'>{error}</p></div>}
        
        {/* Fixed: Replaced raw <a> anchor tag with React Router <Link> */}
        <p className="login-switch">
          Don't have an account? <Link to="/signup">Sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;