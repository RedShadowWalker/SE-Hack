import React, { useState } from 'react';
import './Login.css';

const Login = () => {
    const [isStudent, setIsStudent] = useState(true);
    const [isSignup, setIsSignup] = useState(false);

    const toggleUserType = () => { // Corrected function name
        setIsStudent(!isStudent);
        setIsSignup(false); // Reset signup state when toggling user type
    };

    const toggleSignup = () => {
        setIsSignup(!isSignup);
    };

    return (
        <div className="login-container">
            <h1>{isSignup ? 'Sign Up' : 'Login'}</h1>
            <div className="user-type-toggle">
                <button onClick={toggleUserType} className={isStudent ? 'active' : ''}> {/* Corrected function name */}
                    Student
                </button>
                <button onClick={toggleUserType} className={!isStudent ? 'active' : ''}> {/* Corrected function name */}
                    Faculty
                </button>
            </div>

            {isSignup ? (
                <form className="signup-form">
                    <input type="text" placeholder="Name" required />
                    <input type="text" placeholder={isStudent ? 'Username' : 'Teacher UID'} required />
                    <input type="password" placeholder="Password" required />
                    <input type="text" placeholder="Phone Number" required />
                    <button type="submit">Sign Up</button>
                </form>
            ) : (
                <form className="login-form">
                    <input type="text" placeholder={isStudent ? 'Username' : 'Teacher UID'} required />
                    <input type="password" placeholder="Password" required />
                    <button type="submit">Login</button>
                </form>
            )}

            <div className="social-login">
                <button className="google-btn">Sign in with Google</button>
                <button className="github-btn">Sign in with GitHub</button>
            </div>

            <button onClick={toggleSignup} className="toggle-signup">
                {isSignup ? 'Already have an account? Login' : 'Don’t have an account? Sign Up'}
            </button>
        </div>
    );
};

export default Login;