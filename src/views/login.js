import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './login.css'

const Login = (props) => {
  return (
    <div className="login-container">
      <Helmet>
        <title>Login - Copy of Togthr template</title>
        <meta property="og:title" content="Login - Copy of Togthr template" />
      </Helmet>
      <div className="login-background">
        <img
          alt="image"
          src="https://hips.hearstapps.com/hmg-prod/images/high-angle-view-of-variety-of-succulent-plants-royalty-free-image-1584462052.jpg"
          className="login-image"
        />
        <Link to="/" className="login-navlink button">
          <span className="login-text">
            <span>X</span>
            <br></br>
          </span>
        </Link>
      </div>
      <div className="login-white-box"></div>
      <div className="login-registration-box">
        <img
          alt="image"
          src="https://media.cnn.com/api/v1/images/stellar/prod/230405132308-01-gardening-stock.jpg?c=original"
          className="login-image1"
        />
        <span className="login-text3">REGISTRATION FORM</span>
      </div>
      <div className="login-signup-stuff">
        <input
          type="text"
          placeholder="First Name"
          className="login-textinput input"
        />
        <input
          type="text"
          placeholder="Username"
          className="login-textinput1 input"
        />
        <input
          type="text"
          placeholder="Email Address"
          className="login-textinput2 input"
        />
        <input
          type="text"
          placeholder="Last Name"
          className="login-textinput3 input"
        />
        <img
          alt="image"
          src="https://www.vhv.rs/dpng/d/526-5265627_username-account-icon-png-transparent-png.png"
          className="login-image2"
        />
        <img
          alt="image"
          src="https://cdn-icons-png.flaticon.com/512/542/542689.png"
          className="login-image3"
        />
        <input type="text" placeholder=" " className="login-textinput4 input" />
        <select className="login-select">
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
        <input
          type="text"
          placeholder="Password"
          className="login-textinput5 input"
        />
        <input
          type="text"
          placeholder="Confirm Password"
          className="login-textinput6 input"
        />
        <img
          alt="image"
          src="https://cdn-icons-png.flaticon.com/512/61/61457.png"
          className="login-image4"
        />
        <img
          alt="image"
          src="https://cdn-icons-png.flaticon.com/512/61/61457.png"
          className="login-image5"
        />
        <Link to="/actual-stuff" className="login-navlink1 button">
          Register
        </Link>
      </div>
    </div>
  )
}

export default Login
