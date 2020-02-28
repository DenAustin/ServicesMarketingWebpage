import React, { Component } from 'react'
import logo from '../assets/Header-img.png';

export class Header extends Component {
   render() {
      return (
         <div className="Header">
            <img src={logo} className="Header-image" alt="logo" />
            <div className="Headers-N-Button">
               <h1 className="Header-H1">POWERFULLY SIMPLE WITH A <br /> SQUEEKY CLEAN DESIGN.</h1>
               <p className="Hearder-p">Find out how you can offer quick and powerful <br />solutions for your customers now</p>
               <button className="Header-button">LEARN MORE</button>
            </div>
            
         </div>
      )
   }
}

export default Header
