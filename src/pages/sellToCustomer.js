import React, { useState } from 'react';
import '../style/form.css';
import web3 from '../ethereum/web3';
import Manufacturer from '../ethereum/manufacturerIns';

const SellToCustomer = ({address}) => {
    const customerCode = 0;
    const [brand, setBrand] = useState('');
    const [prodId, setProdId] = useState('');
    const [email, setEmail] = useState('');

    const sold = async ()=>{
        const accounts = await web3.eth.getAccounts();
        const manuIns = Manufacturer(address);
        await manuIns.methods.SellToCustomer(prodId, customerCode)
        .send({from:accounts[0], gas:'1000000'});
        

    }

    return(
        <div class="body">
        <h1>Entered into seller</h1>
        <form onSubmit={sold}>

        <div class="grp">
                <input 
                type="text" 
                placeholder="Enter Manufacturer brand name" 
                name="manuf_brand"
                value={brand}
                onChange={e => setBrand(e.target.value)}
                />
                <label for="manuf_brand">Manufacturer Brand</label>
            </div>
            <div class="grp">
                <input type="text" 
                placeholder="Enter Product Id" 
                name="product_id"
                value={prodId}
                onChange={e => setProdId(e.target.value)}
                />
                <label for="product_id">Product ID</label>
            </div>
            <div class="grp">
                <input type="text" 
                placeholder="Enter Customer Email" 
                name="cust_email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                />
                <label for="cust_email">Customer Email</label>
            </div>

            <button type="submit" className='btn'>SUBMIT</button>

        </form>
    </div>
    )
}

export default SellToCustomer;