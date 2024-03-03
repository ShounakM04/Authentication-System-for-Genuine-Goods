import React, { useState } from 'react';
import Manufacturer from '../../ethereum/manufacturerIns';
import web3 from '../../ethereum/web3';

const SellToSeller = ({ address }) => {
    const [prodId, setProdId] = useState('');
    const [sellerId, setSellerId] = useState('');
    const [sellerName, setSellerName] = useState('');

    const sell = async (event) => {
        event.preventDefault();
        try {
            const accounts = await web3.eth.getAccounts();
            const manuIns = Manufacturer(address);
            await manuIns.methods.sellToSeller(prodId, sellerId)
                .send({ from: accounts[0], gas: '1000000' });
        } catch (error) {
            console.error('Error selling to seller:', error);

        }
    };

    return (
        <>
            <div className="body">
                <h1>Sell product to seller by Manufacturer</h1>
                <form onSubmit={sell}>

                    <div className="grp">
                        <input
                            type="text"
                            placeholder="Enter PRODUCT ID"
                            name="product_id"
                            value={prodId}
                            onChange={e => setProdId(e.target.value)}
                        />
                        <label htmlFor="product_id">PRODUCT ID</label>
                    </div>
                    <div className="grp">
                        <input
                            type="text"
                            placeholder="Enter Seller Id"
                            name="seller_id"
                            value={sellerId}
                            onChange={e => setSellerId(e.target.value)}
                        />
                        <label htmlFor="seller_id">SELLER ID</label>
                    </div>

                    <div className="grp"> 
                        <input
                            type="text"
                            placeholder="Enter Seller name"
                            name="seller_name"
                            value={sellerName}
                            onChange={e => setSellerName(e.target.value)}
                        />
                        <label htmlFor="seller_name">SELLER NAME</label>
                    </div>
                    <button type="submit" className='btn'>SUBMIT</button>

                </form>
            </div>
        </>
    )
}

export default SellToSeller;
