import React, { useState } from 'react';
//import Router from '../routes.js';
import { useEffect } from 'react';
import '../style/s_login.css';
import axios from 'axios';



  
const SellerLogin = () => {
    const [id, setId] = useState('');
    const [city, setCity] = useState('');
    const [pass, setPassword] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        const registerBtn = document.getElementById('register');
        const loginBtn = document.getElementById('login');

        const handleRegisterClick = () => {
            document.getElementById('container').classList.add("active");
        };

        const handleLoginClick = () => {
            document.getElementById('container').classList.remove("active");
        };

        registerBtn.addEventListener('click', handleRegisterClick);
        loginBtn.addEventListener('click', handleLoginClick);


        return () => {
            registerBtn.removeEventListener('click', handleRegisterClick);
            loginBtn.removeEventListener('click', handleLoginClick);
        };
    }, []); 

    const handleSignUp = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:3001/s_signup', { id, city, pass });
            console.log(response.data); 
        } catch (error) {
            console.error('Error signing up:', error);
            setError('Error signing up. Please try again.'); 
        }
    };

    const handleSignIn = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:3001/s_signin', { id, pass });
            if (response.data === "Successfully signed in") {
                alert("Login successful");
            } else {
                alert("Login unsuccessful");
            }
        } catch (error) {
            console.error('Error signing in:', error);
            setError('Invalid credentials. Please try again.');
            alert("Login unsuccessful");
        }
    };

       return (
        <div className="whole_page">
            <div className="container" id="container">
                <div className="form-container sign-up">
                    <form onSubmit={handleSignUp}>
                        <h1>Create Account</h1>
                        <input type="text" placeholder="Seller ID" value={id} onChange={(e) => setId(e.target.value)} />
                        <input type="text" placeholder="Seller City" value={city} onChange={(e) => setCity(e.target.value)} />
                        <input type="password" placeholder="Password" value={pass} onChange={(e) => setPassword(e.target.value)} />
                        <button type="submit">Sign Up</button>
                    </form>
                </div>
                <div className="form-container sign-in">
                    <form onSubmit={handleSignIn}>
                        <h1>Sign In</h1>
                        <input type="text" placeholder="YOUR ID" />
                        <input type="password" placeholder="Password" />
                        <button type="submit">Sign In</button>
                    </form>
                </div>
                <div className="toggle-container">
                    <div className="toggle">
                        <div className="toggle-panel toggle-left">
                            <h1>Welcome Back! Seller</h1>
                            <p>Enter your personal details to use all site features</p>
                            <button className="hidden" id="login" onClick={() => document.getElementById('container').classList.remove("active")}>Sign In</button>
                        </div>
                        <div className="toggle-panel toggle-right">
                            <h1>Hello, Seller!</h1>
                            <p>Register with your personal details to use all site features</p>
                            <button className="hidden" id="register" onClick={() => document.getElementById('container').classList.add("active")}>Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

};

export default SellerLogin;