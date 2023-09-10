import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import './actual-stuff.css';

const ActualStuff = (props) => {
  const [zipCode, setZipCode] = useState(''); // Initialize the state for the zip code input

  const handleZipCodeChange = (event) => {
    setZipCode(event.target.value); // Update the zipCode state when the input value changes
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // You can now access the zipCode value for further processing
    console.log('Zip Code entered:', zipCode);
    localStorage.setItem("zipCode", zipCode)
  };
  return (
    <div className="actual-stuff-container">
      <Helmet>
        <title>ActualStuff - Copy of Togthr template</title>
        <meta property="og:title" content="ActualStuff - Copy of Togthr template" />
      </Helmet>
      <div className="actual-stuff-banner">
        <span className="actual-stuff-text">This is what it&apos;s all about</span>
        <h1 className="actual-stuff-text1">Let&apos;s start with an easy one</h1>
        <span className="actual-stuff-text2">We&apos;re going to find some amazing volunteer opportunities that are nearby</span>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            id="zipCodeInput"
            placeholder="Zip Code here..."
            className="actual-stuff-textinput input"
            value={zipCode}
            onChange={handleZipCodeChange}
          />
          <button type="submit">Submit</button>
        </form>
        <div className="actual-stuff-container1">
          <Link to="/actual-stuff1" className="actual-stuff-navlink button">
            <span>
              <span>Onwards!</span>
              <br />
            </span>
          </Link>
        </div>
      </div>
      <div className="actual-stuff-testimonial">
        <img alt="image" src="/snoiw-300w.jpg" className="actual-stuff-image" />
        <div className="actual-stuff-testimonial1">
          <div className="actual-stuff-container2">
            <svg viewBox="0 0 950.8571428571428 1024" className="actual-stuff-icon">
              <path d="M438.857 548.571v219.429c0 60.571-49.143 109.714-109.714 109.714h-219.429c-60.571 0-109.714-49.143-109.714-109.714v-402.286c0-161.143 131.429-292.571 292.571-292.571h36.571c20 0 36.571 16.571 36.571 36.571v73.143c0 20-16.571 36.571-36.571 36.571h-36.571c-80.571 0-146.286 65.714-146.286 146.286v18.286c0 30.286 24.571 54.857 54.857 54.857h128c60.571 0 109.714 49.143 109.714 109.714zM950.857 548.571v219.429c0 60.571-49.143 109.714-109.714 109.714h-219.429c-60.571 0-109.714-49.143-109.714-109.714v-402.286c0-161.143 131.429-292.571 292.571-292.571h36.571c20 0 36.571 16.571 36.571 36.571v73.143c0 20-16.571 36.571-36.571 36.571h-36.571c-80.571 0-146.286 65.714-146.286 146.286v18.286c0-30.286-24.571-54.857-54.857-54.857h-128c-60.571 0-109.714-49.143-109.714-109.714v-219.429c0-60.571 49.143-109.714 109.714-109.714h219.429c60.571 0 109.714 49.143 109.714 109.714z"></path>
            </svg>
          </div>
          <span className="actual-stuff-text6">Volunteering is the art of giving one&apos;s time and heart to paint a brighter canvas of compassion and community.</span>
          <div className="actual-stuff-container3">
            <svg viewBox="0 0 950.8571428571428 1024" className="actual-stuff-icon2">
              <path d="M438.857 182.857v402.286c0 161.143-131.429 292.571-292.571 292.571h-36.571c-20 0-36.571-16.571-36.571-36.571v-73.143c0-20 16.571-36.571 36.571-36.571h36.571c80.571 0 146.286-65.714 146.286-146.286v-18.286c0-30.286-24.571-54.857-54.857-54.857h-128c-60.571 0-109.714-49.143-109.714-109.714v-219.429c0-60.571 49.143-109.714 109.714-109.714h219.429c60.571 0 109.714 49.143 109.714 109.714zM950.857 182.857v402.286c0 161.143-131.429 292.571-292.571 292.571h-36.571c-20 0-36.571-16.571-36.571-36.571v-73.143c0-20 16.571-36.571 36.571-36.571h36.571c80.571 0 146.286-65.714 146.286-146.286v-18.286c0-30.286-24.571-54.857-54.857-54.857h-128c-60.571 0-109.714-49.143-109.714-109.714v-219.429c0-60.571 49.143-109.714 109.714-109.714h219.429c60.571 0 109.714 49.143 109.714 109.714z"></path>
            </svg>
          </div>
        </div>
        <span className="actual-stuff-text7">Grigory Shatalin</span>
        <span className="actual-stuff-text8">Founder</span>
      </div>
    </div>
  );
}

export default ActualStuff;
