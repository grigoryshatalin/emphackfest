import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './actual-stuff1.css'

const ActualStuff1 = (props) => {
  return (
    <div className="actual-stuff1-container">
      <Helmet>
        <title>ActualStuff1 - Copy of Togthr template</title>
        <meta
          property="og:title"
          content="ActualStuff1 - Copy of Togthr template"
        />
      </Helmet>
      <div className="actual-stuff1-banner">
        <span className="actual-stuff1-text">
          Pick and choose the right opportunities for you.
        </span>
        <h1 className="actual-stuff1-text01">
          Now, let&apos;s start volunteering
        </h1>
        <div className="actual-stuff1-container01">
          <input
            type="text"
            placeholder="98052"
            className="actual-stuff1-textinput input"
          />
        </div>
        <span className="actual-stuff1-text02">Sort by:</span>
        <select className="actual-stuff1-select">
          <option value="Nearest" selected>
            Nearest
          </option>
          <option value="Alphabetical">Alphabetical</option>
        </select>
      </div>
      <div className="actual-stuff1-container02">
        <div className="actual-stuff1-container03">
          <div className="actual-stuff1-container04">
            <div className="actual-stuff1-container05">
              <span className="actual-stuff1-text03">#1</span>
            </div>
          </div>
          <a
            href="https://example.com"
            target="_blank"
            rel="noreferrer noopener"
            className="actual-stuff1-link"
          >
            Title of Opportunity
          </a>
        </div>
        <div className="actual-stuff1-description">
          <span className="actual-stuff1-text04">
            Example text meant to be replaced by a short description. I am
            typing random words, these words will be replaced hopefully. If they
            don&apos;t I will be very sad during the presentation.
          </span>
        </div>
        <span className="actual-stuff1-text05">ZIP</span>
      </div>
      <div className="actual-stuff1-container06">
        <div className="actual-stuff1-container07">
          <div className="actual-stuff1-container08">
            <div className="actual-stuff1-container09">
              <span className="actual-stuff1-text06">#4</span>
            </div>
          </div>
          <a
            href="https://example.com"
            target="_blank"
            rel="noreferrer noopener"
            className="actual-stuff1-link1"
          >
            Title of Opportunity
          </a>
        </div>
        <div className="actual-stuff1-description1">
          <span className="actual-stuff1-text07">
            Example text meant to be replaced by a short description. I am
            typing random words, these words will be replaced hopefully. If they
            don&apos;t I will be very sad during the presentation.
          </span>
        </div>
        <span className="actual-stuff1-text08">ZIP</span>
      </div>
      <div className="actual-stuff1-container10">
        <div className="actual-stuff1-container11">
          <div className="actual-stuff1-container12">
            <div className="actual-stuff1-container13">
              <span className="actual-stuff1-text09">#3</span>
            </div>
          </div>
          <a
            href="https://example.com"
            target="_blank"
            rel="noreferrer noopener"
            className="actual-stuff1-link2"
          >
            Title of Opportunity
          </a>
        </div>
        <div className="actual-stuff1-description2">
          <span className="actual-stuff1-text10">
            Example text meant to be replaced by a short description. I am
            typing random words, these words will be replaced hopefully. If they
            don&apos;t I will be very sad during the presentation.
          </span>
        </div>
        <span className="actual-stuff1-text11">ZIP</span>
      </div>
      <div className="actual-stuff1-container14">
        <div className="actual-stuff1-container15">
          <div className="actual-stuff1-container16">
            <div className="actual-stuff1-container17">
              <span className="actual-stuff1-text12">#2</span>
            </div>
          </div>
          <a
            href="https://example.com"
            target="_blank"
            rel="noreferrer noopener"
            className="actual-stuff1-link3"
          >
            Title of Opportunity
          </a>
        </div>
        <div className="actual-stuff1-description3">
          <span className="actual-stuff1-text13">
            Example text meant to be replaced by a short description. I am
            typing random words, these words will be replaced hopefully. If they
            don&apos;t I will be very sad during the presentation.
          </span>
        </div>
        <span className="actual-stuff1-text14">ZIP</span>
      </div>
      <Link to="/seeall" className="actual-stuff1-navlink button">
        See all
      </Link>
    </div>
  )
}

export default ActualStuff1
