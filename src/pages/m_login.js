import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../style/m_login.css';
import factory from '../ethereum/factory';
import {Loader,Dimmer} from 'semantic-ui-react';
import web3 from '../ethereum/web3';




const ManufacturerLogin = () => {
    const [id, setId] = useState('');
    const [brand, setBrand] = useState('');
    const [city, setCity] = useState('');
    const [pass, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [address, setAddress] = useState('');
    
    useEffect(() => {
        const registerBtn = document.getElementById('registerM');
        const loginBtn = document.getElementById('loginM');

        const handleRegisterClick = () => {
            document.getElementById('containerM').classList.add('active');
        };

        const handleLoginClick = () => {
            document.getElementById('containerM').classList.remove('active');
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
            setLoading(true);
            const response = await axios.post('http://localhost:3001/m_signup', { id, brand, city, pass });
            console.log(response.data); 
            const accounts = await web3.eth.getAccounts();
            await factory.methods.createManufacturer(id, brand)
            .send({ from : accounts[0], gas : '1000000'});
            setLoading(false);

        } catch (error) {
            console.error('Error signing up:', error);
           
        }
    };

    const handleSignIn = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:3001/m_signin', { id, pass });
            const Manuaddress = await factory.methods.getManufacturerInstance(brand).call();
            setAddress(Manuaddress);
            
        } catch (error) {
            console.error('Error signing in:', error);
        }
    };

    return (
        <>
            <div className="whole_page">
                <div className="container" id="containerM">
                    <div className="form-container sign-up">
                        <form onSubmit={handleSignUp}>
                            <h1>Create Account</h1>
                            <input type="text" placeholder="Manufacturer ID" value={id} onChange={(e) => setId(e.target.value)} />
                            <input type="text" placeholder="Manufacturer Brand" value={brand} onChange={(e) => setBrand(e.target.value)} />
                            <input type="text" placeholder="Manufacturer City" value={city} onChange={(e) => setCity(e.target.value)} />
                            <input type="password" placeholder="Password" value={pass} onChange={(e) => setPassword(e.target.value)} />
                            <button type="submit">
                            Sign Up
                            </button>
                            <Dimmer active={loading}>
                            <Loader size='mini'></Loader>
                            </Dimmer>
                        </form>
                    </div>
                    <div className="form-container sign-in">
                        <form onSubmit={handleSignIn}>
                            <h1>Sign In</h1>
                            <input type="text" placeholder="Manufacturer ID" value={id} onChange={(e) => setId(e.target.value)} />
                            <input type="password" placeholder="Password" value={pass} onChange={(e) => setPassword(e.target.value)} />
                            <button type="submit">Sign In</button>
                        </form>
                    </div>
                    <div className="toggle-container">
                        <div className="toggle">
                            <div className="toggle-panel toggle-left">
                                <h1>Welcome Back! Manufacturer</h1>
                                <p>Enter your personal details to use all site features</p>
                                <button className="hidden" id="loginM">Sign In</button>
                            </div>
                            <div className="toggle-panel toggle-right">
                                <h1>Hello, Manufacturer!</h1>
                                <p>Register with your personal details to use all site features</p>
                                <button className="hidden" id="registerM">Sign Up</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ManufacturerLogin;
//export { address};
