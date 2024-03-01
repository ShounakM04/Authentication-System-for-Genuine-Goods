import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../style/m_login.css';
import { useNavigate } from 'react-router-dom';
import factory from '../ethereum/factory';
//import {Loader,Dimmer} from 'semantic-ui-react';
import web3 from '../ethereum/web3';
// import pg from 'pg';

// const db = new pg.Client({
//     user: "postgres",
//     host: "localhost",
//     database: "pbl",
//     password: "Surya@260604",
//     port: 5432,
//   });

// db.connect();

const ManufacturerLogin = (props) => {
    const [id, setId] = useState('');
    const [brand, setBrand] = useState('');
    const [city, setCity] = useState('');
    const [pass, setPassword] = useState('');
    

    const navigate = useNavigate();

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
            
            const response = await axios.post('http://localhost:3001/m_signup', { id, brand, city, pass });
            console.log(response.data); 
            const accounts = await web3.eth.getAccounts();
            await factory.methods.createManufacturer(id, brand)
            .send({ from : accounts[0], gas : '1000000'});
            
            props.setBrandName("Adidas");

            if (response.data === "Successfully signed in") {
            } else {
                alert("Signup unsuccessful");
            }
            console.log(response.data); 
        } catch (error) {
            console.error('Error signing up:', error);
        }
    };

    const handleSignIn = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:3001/m_signin', { id, pass });
            const Manuaddress = await factory.methods.getManufacturerInstance("Adidas").call();
            props.setAddress(Manuaddress);

            if (response.data === "Successfully signed in") {
                // db.query("SELECT manuf_brand FROM manufacturer WHERE manuf_id = $1 and and pass = $2", [ id, pass], (err, result) => 
                // {
                //     if(err)
                //     {
                //         console.error("Error retrieving data", err.stack);
                //     }
                //     else{
                //         setBrandName(result.rows[0]);
                //     }
                // });
                navigate('/manufacturer');

            } else {
                alert("Login unsuccessful");
            }
            console.log(response.data); 
        }
        catch (error) {
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
                            <button type="submit">Sign Up</button>
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
