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




// import React from 'react';
// import { Link } from "react-router-dom";
// import {
//   MDBBtn,
//   MDBContainer,
//   MDBRow,
//   MDBCol,
//   MDBCard,
//   MDBCardBody,
//   MDBInput,
//   MDBIcon
// }
// from 'mdb-react-ui-kit';

// function Login() {
//   return (
//     <MDBContainer fluid>

//       <MDBRow className='d-flex justify-content-center align-items-center h-100'>
//         <MDBCol col='12'>

//           <MDBCard className='bg-dark text-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '400px'}}>
//             <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>

//               <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
//               <p className="text-white-50 mb-5">Please enter your login and password!</p>

//               <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Email address' id='formControlLg' type='email' size="lg"/>
//               <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Password' id='formControlLg' type='password' size="lg"/>

//               <MDBBtn outline className='mx-2 px-5 mt-3' color='white' size='lg'>
//                 Login
//               </MDBBtn>

//               <div>
//                 <p className="mb-0 top-10 mt-4">Don't have an account? <Link to ='./signup' class="text-white-50 fw-bold">Sign Up</Link></p>

//               </div>
//             </MDBCardBody>
//           </MDBCard>

//         </MDBCol>
//       </MDBRow>

//     </MDBContainer>
//   );
// }

// export default Login;