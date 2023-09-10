import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import NotFound from './views/not-found'
import ActualStuff1 from './views/actual-stuff1'
import Login from './views/login'
import Seeall3 from './views/seeall3'
import Home from './views/home'
import Seeall2 from './views/seeall2'
import Seeall from './views/seeall'
import ActualStuff from './views/actual-stuff'
import Seeall4 from './views/seeall4'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={ActualStuff1} exact path="/actual-stuff1" />
        <Route component={Login} exact path="/login" />
        <Route component={Seeall3} exact path="/seeall3" />
        <Route component={Home} exact path="/" />
        <Route component={Seeall2} exact path="/seeall2" />
        <Route component={Seeall} exact path="/seeall" />
        <Route component={ActualStuff} exact path="/actual-stuff" />
        <Route component={Seeall4} exact path="/seeall4" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
// ReactDOM.render(
//   <ZipCodeProvider>
//     <App />
//   </ZipCodeProvider>,
//   document.getElementById('app')
// );
