import React, { useState } from 'react';
import './LoginSignup.css';

const LoginSignup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLogin, setIsLogin] = useState(true);

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your login/signup logic here
    };

    const toggleForm = () => {
        setIsLogin(!isLogin);
    };

    return (
        <div>
            <h2>{isLogin ? 'Login' : 'Signup'}</h2>
            <form onSubmit={handleSubmit}>
                <label>Email:</label>
                <input type="email" value={email} onChange={handleEmailChange} />

                <label>Password:</label>
                <input type="password" value={password} onChange={handlePasswordChange} />

                <button type="submit">{isLogin ? 'Login' : 'Signup'}</button>
            </form>

            <p onClick={toggleForm}>
                {isLogin ? 'Don\'t have an account? Sign up' : 'Already have an account? Login'}
            </p>
        </div>
    );
};

export default LoginSignup;