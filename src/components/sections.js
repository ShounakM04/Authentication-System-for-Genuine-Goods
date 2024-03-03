import React from 'react';
import '../style/home.css';
import '../style/m_login.css';
import '../style/Pages2_Cards.css';
import '../style/s_login.css';
import { useNavigate } from 'react-router-dom';

const OpeningCard = () => {
  const navigate = useNavigate();

  return (
    <div className="card-container">
      <div className="card">
        <div style={{ padding: '20px', textAlign: 'center', fontSize: '12px' }}>
          <h1>Customer</h1>
          <p></p>
          <button onClick={()=>{navigate('/consumerlogin')}} className="sh_btn">LOGIN</button>
        </div>
        <div className="cover">
          <div className="coverFront">
            <div>
              <h5>Customer</h5>
              <img src="img/customer.jpg" alt="" className="sh_img" />
            </div>
          </div>
          <div className="coverBack"></div>
        </div>
      </div>

      <div className="card">
        <div style={{ padding: '20px', textAlign: 'center', fontSize: '12px' }}>
          <h1>Seller</h1>
          <p></p>
          <button className="sh_btn" onClick={() => navigate('/sellerlogin')}>LOGIN</button>
        </div>
        <div className="cover">
          <div className="coverFront">
            <div>
              <h5>Seller</h5>
              <img src="img/pharma.jpg" alt="" className="sh_img" />
            </div>
          </div>
          <div className="coverBack"></div>
        </div>
      </div>

      <div className="card">
        <div style={{ padding: '20px', textAlign: 'center', fontSize: '12px' }}>
          <h1>Manufacturer</h1>
          <p></p>
          <a><button onClick={()=>{navigate('/manufacturerlogin')}} className="sh_btn">LOGIN</button></a>
        </div>
        <div className="cover">
          <div className="coverFront">
            <div>
              <h5>Manufacturer</h5>
              <img src="img/manuf.jpg" alt="" className="sh_img" />
            </div>
          </div>
          <div className="coverBack"></div>
        </div>
      </div>
    </div>
  );
};

export default OpeningCard;
