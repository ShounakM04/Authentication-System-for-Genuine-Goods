import React from 'react';
 import '../../style/manuf_options.css';
function Manuf() {


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

                                <label for="s1" id="slide1"><a href="add_seller"><button className='m_options_btn'>Add Seller</button></a></label>
                                <label for="s2" id="slide2"><a href="add_product"><button className='m_options_btn'>Add Product</button></a></label>
                                <label for="s3" id="slide3"><a href="sell_prod_to_seller"><button className='m_options_btn'>Sell Product to seller</button></a></label>
                            </section>
                        </section>
                    </div>
                    );
}
export default Manuf;