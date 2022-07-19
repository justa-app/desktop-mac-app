import React from "react";
import { Link } from 'react-router-dom';
import logo from "../../logo.png";
import "./settings.css"
export default function Settings() {

  return (
  <div className='setting-wrapper'>
  <div className="setting-header">
     <img src={logo} alt="logo" /> 
     (Version 1.0.0)
  </div>
  <div className="setting-title">
      Settings
  </div>
  <div className="setting-body">
      
      <p>Hello</p>
      <p>Welcom to Justa application.</p>
      <p>Start by sign in to enjoy amazing features provided by this application</p>
  </div>
  <button className='setting-btn'>Sign in</button>

  <div className='setting-signup'>
      <span>Dont have an account?</span>
      <Link to='#'>Sign up</Link>
  </div>
  <div className='setting-privacy'>
      <p>Terms of Service</p>
      <p>Privacy Policy</p>
      <p>Support</p>
  </div>
  </div>)
}