import React from 'react';
import './Navbar.css'
import logo from '../../../logos/Logo.png'
const Nevbar = () => {
    return (
        <div>
              <nav class="navbar navbar-expand-md">          
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span> <i class="fas fa-bars navbar-icon"></i> </span>
            </button>

            <a class="navbar-brand" href="#">
                <img src={logo} alt="logo"/>
            </a>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
              <ul class="navbar-nav ml-auto">
                <li class="nav-item active">
                  <a class="nav-link text-center text-md-left" href="#">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-center text-md-left" href="#about-me">About </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-center text-md-left" href="#tutorial">Service</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-center text-md-left" href="#feedback">Concerns</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-center text-md-left" href="#contact">Event</a>
                </li> 
                <li class="nav-item">
                  <a class="nav-link text-center text-md-left" href="#contact">Contact</a>
                </li>
                <button className="login-btn">Log-in</button>               
              </ul>
            </div>
          </nav>
        </div>
    );
};

export default Nevbar;