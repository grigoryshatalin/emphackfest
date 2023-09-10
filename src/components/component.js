import React from 'react'

import './component.css'

const AppComponent = (props) => {
  return (
    <div className="component-container">
      <button type="button" className="component-button button">
        <svg viewBox="0 0 1024 1024" className="component-icon">
          <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
        </svg>
      </button>
    </div>
  )
}

export default AppComponent
