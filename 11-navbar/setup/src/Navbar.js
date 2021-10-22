// eslint-disable-next-line
import React, { useState, useRef, useEffect } from 'react'
import { FaBars, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
// eslint-disable-next-line
import { links, social } from './data'
// eslint-disable-next-line
import logo from './logo.svg'

const Navbar = () => {
  return <nav><div className="nav-center">
      <div className="nav-header">
        <img src={logo} alt="logo" />
        <button className="nav-toggle">
          <FaBars/>
        </button>
      </div>
      <div className="links-container show-container">
        <ul className="links">
          {links.map((link)=> {
            const {id, url, text} = link;
            return (<li key={id}>
                <a href={url}>{text}</a>
              </li>)
          })}
        </ul>
      </div>
      <ul className="social-icons">
        {social.map((profile) => {
          const {id, url, icon} = profile;
          return (
            <li key={id}>
              <a href={url}>{icon}</a>
            </li>
          )
        })}
      </ul>
      </div>
    </nav>
}

export default Navbar
