import React from 'react';
 import '../../style/manuf_options.css';
import { useNavigate } from 'react-router-dom';

function Manuf() {
    const navigate = useNavigate();
    
    const handleAddProduct = ()=>{
        navigate('./addProduct');
    }

    const handleAddSeller = ()=>{
        navigate('./addSeller');
    }

    const handleSelltoSeller = ()=>{
        navigate('./selltoseller');
    }
    

    return (
        <div className='m_options_Mainbody'>
            <section className="manuf">
                <h1>WELCOME MANUFACTURER!</h1>
                <h2>Manufacturer Brand :  </h2>
                <h2>Manufacturer ID : </h2>
                <h2>Manufacturer city : </h2>
            </section>
            <section className="m_options_body">
                <section id="slider">
                    <input className='m_input' type="radio" name="slider" id="s1" />
                        <input className='m_input' type="radio" name="slider" id="s2" checked />
                            <input className='m_input' type="radio" name="slider" id="s3" />

                                <label for="s1" id="slide1"><button onClick = {handleAddSeller} className='m_options_btn'>Add Seller</button></label>
                                <label for="s2" id="slide2"><button onClick = {handleAddProduct} className='m_options_btn'>Add Product</button></label>
                                <label for="s3" id="slide3"><button onClick = {handleSelltoSeller} className='m_options_btn'>Sell Product to seller</button></label>
                            </section> 
                        </section>
                    </div>
                    );
}
export default Manuf;