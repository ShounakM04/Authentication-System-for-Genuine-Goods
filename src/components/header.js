import React, { useEffect } from 'react';
import '../style/header.css';

function Header() {
  useEffect(() => {
    const handleDropdown = (event) => {
      const dropdownContent = document.querySelector('.dropdown-content');
      if (event.target.matches('.dropbtn') && dropdownContent) {
        dropdownContent.classList.toggle('show');
      } else if (!event.target.matches('.dropbtn') && dropdownContent && dropdownContent.classList.contains('show')) {
        dropdownContent.classList.remove('show');
      }
    };

    document.addEventListener("click", handleDropdown);

    return () => {
      document.removeEventListener("click", handleDropdown);
    };
  }, []);

  return (
    <nav>
      <div className="beg">
        <a href="#navname">
          <h1>NavBarName</h1>
        </a>

        <a href="#home">Home</a>

        <div className="dropdown">
          <button className="dropbtn">Services</button>
          <div className="dropdown-content">
            <a href="#service1">Service 1</a>
            <a href="#service2">Service 2</a>
            <a href="#service3">Service 3</a>
          </div>
        </div>
      </div>
      <div className="end">
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}

export default Header;
