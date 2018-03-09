import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Google from './google/components/Google'
import Twitter from './twitter/Twitter'

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Route exact path="/" component={() => <h3>Check out /google</h3>} />
        <Route exact path="/google" component={Google} />      
        <Route exact path="/twitter" component={Twitter} />      
      </div>
    </BrowserRouter>
  )
}

export default App