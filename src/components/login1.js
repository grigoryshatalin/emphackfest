import React from 'react'

import PropTypes from 'prop-types'

import './login1.css'

const Login1 = (props) => {
  return (
    <div className="login1-container">
      <button className="login1-login button">{props.Login}</button>
    </div>
  )
}

Login1.defaultProps = {
  Login: 'Login',
}

Login1.propTypes = {
  Login: PropTypes.string,
}

export default Login1
