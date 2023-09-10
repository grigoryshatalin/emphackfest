import React from 'react'

import PropTypes from 'prop-types'

import './component1.css'

const Component1 = (props) => {
  return (
    <div className={`component1-container ${props.rootClassName} `}>
      <button type="button" className="component1-button button">
        <svg viewBox="0 0 1024 1024" className="component1-icon">
          <path
            d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"
            className=""
          ></path>
        </svg>
      </button>
    </div>
  )
}

Component1.defaultProps = {
  rootClassName: '',
}

Component1.propTypes = {
  rootClassName: PropTypes.string,
}

export default Component1
