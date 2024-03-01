import React, { useState } from 'react';
import '../../style/form.css';
import web3 from '../../ethereum/web3';
import Manufacturer from '../../ethereum/manufacturerIns';

const AddSeller = ({ address }) => {
    const [id, setId] = useState('');
    const [city, setCity] = useState('');
    const [name, setName] = useState('');

    const adding = async (event) => {
        event.preventDefault(); // Prevent the default form submission

        try {
            
            const accounts = await web3.eth.getAccounts();
            const manuIns = Manufacturer(address);
            // Trigger MetaMask window to confirm transaction
            //await window.ethereum.enable();

            // Send transaction using MetaMask
            await manuIns.methods.addSellers(id)
                .send({ from: accounts[0], gas: '1000000' });

            // Transaction successful, clear form fields
            setId('');
            setCity('');
            setName('');
        } catch (error) {
            console.error('Error submitting transaction:', error);
        }
    };

    return (
        <div className="body">
            <h1>Add Seller by Manufacturer</h1>
            <form onSubmit={adding}>
                <div className="grp">
                    <input
                        type="text"
                        placeholder="Enter SELLER ID"
                        name="seller_id"
                        value={id}
                        onChange={e => setId(e.target.value)}
                    />
                    <label htmlFor="seller_id">SELLER ID</label>
                </div>
                <div className="grp">
                    <input
                        type="text"
                        placeholder="Enter Seller City"
                        name="seller_city"
                        value={city}
                        onChange={e => setCity(e.target.value)}
                    />
                    <label htmlFor="seller_city">SELLER City</label>
                </div>
                <div className="grp">
                    <input
                        type="text"
                        placeholder="Enter Seller name"
                        name="seller_name"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                    <label htmlFor="seller_name">SELLER NAME</label>
                </div>
                <button type="submit" className='btn'>SUBMIT</button>
            </form>
        </div>
    );
}

export default AddSeller;
