import React, { useState } from 'react';
import { Input, Button, Image } from 'semantic-ui-react';
import qrcode from 'qrcode';
import web3 from '../../ethereum/web3';
import Manufacturer from '../../ethereum/manufacturerIns';
import '../../style/form.css'


function AddProduct({ address })
{
    const [id, setId] = useState('');
    const [imageQR , setImageQR] = useState('');
    const [name, setName] = useState('');
    const [brand, setBrand] = useState('');

    const generateQRCode = async (e) => {
        e.preventDefault();
        try {
          const qrdata = brand + " " + id;  
          const imageDataURL = await qrcode.toDataURL(qrdata);
          setImageQR(imageDataURL);
          const accounts = await web3.eth.getAccounts();
          const manuIns = Manufacturer(address);
          await manuIns.methods.addProduct(id, name, brand)
          .send({ from : accounts[0], gas : '1000000'});
         
        } catch (error) {
          console.error('Error generating QR code:', error);
        }
      }
    return (
        <div className='body'>
            <form onSubmit={generateQRCode}>

<div class="grp">
    <input  
    placeholder='Enter brand'
    type="text"  name="brand_name"  
    value={brand}
    onChange={e => setBrand(e.target.value)}
    />
    <label for="brand_name">BRAND NAME</label>
</div>
<div className="grp">
    <input 
    type="text" 
    placeholder="Enter product name" 
    name="product_name" 
    value={name}
    onChange={e => setName(e.target.value)}    
    />
    <label for="product_name">PRODUCT NAME</label>
</div>
<div className="grp">
    <input type="text"  
    placeholder="Enter product id" 
    name="product_id"
    value = {id}
    onChange={event  => setId(event.target.value)}
    />
    <label for="product_id" >PRODUCT ID</label> 
</div>

<div className="grp">
    <input type="text"  placeholder="Enter prouct price"
    name="product_price"  />
    <label for="product_pr">PRODUCT PRICE </label>
</div>
<button  type="submit">SUBMIT</button>
{imageQR && (
          <a href={imageQR} download>
            <Image src={imageQR} alt='QR code image' />
          </a>
        )}

</form>
        </div>
    );
}

export default AddProduct;