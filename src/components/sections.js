import React from 'react';
import '../style/home.css';
import '../style/m_login.css';
import '../style/Pages2_Cards.css';
import '../style/s_login.css';
import { useNavigate ,Link} from 'react-router-dom';

const OpeningCard = () => {
  const navigate = useNavigate();

  return (
    <div className='page2'>
      <div className="centered">
        <div className="site-branding">

          <main className="main-area">
            <section className="cards">
              <article className="card">
                <Link to="/consumerlogin">
                  <figure>
                  <img src='/img/customer2.jpg'></img>
                  </figure>
                  <div className="card-content">
                    <h2>Customer</h2>
                    <p>
                    The 76th Academy Awards ceremony, presented by the Academy of Motion Picture Arts and Sciences (AMPAS), honored films released in 2003 and took place on February 29, 2004, at the Kodak Theatre in Hollywood, Los Angeles. During the ceremony,
                    </p>
                  </div>
                </Link>
              </article>

              <article className="card">
                <Link to="/manufacturerlogin">
                  <figure className="thumbnail">
                    <img src="/img/manuf2.jpg" alt="Placeholder" />
                  </figure>
                  <div className="card-content">
                    <h2>Manufacturer</h2>
                    <p>
                    AMPAS presented Academy Awards in 24 categories. The ceremony, televised in the United States by ABC, was produced by Joe Roth and directed by Louis J. Horvitz. Actor Billy Crystal hosted the show for the eighth time. He first hosted the 62nd
                    </p>
                  </div>
                </Link>
              </article>

              {/* Add more articles as needed */}

              <article className="card">
                <Link to="/sellerlogin">
                  <figure className="thumbnail">
                    <img src="/img/seller2.jpg" alt="Placeholder" />
                  </figure>
                  <div className="card-content">
                    <h2>Seller</h2>
                    <p>
                    ceremony held in 1990, and had last hosted the 72nd ceremony in 2000. The Lord of the Rings: The Return of the King won a record-tying eleven awards including Best Picture and Best Director for Peter Jackson (pictured). The telecast garnered nearly 44 million viewers in the United States.
                    </p>
                  </div>
                </Link>
              </article>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
};

export default OpeningCard;

