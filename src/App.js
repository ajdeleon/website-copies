import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Home from './Home'
import Google from './google/components/Google'
import Twitter from './twitter/Twitter'
import Facebook from './facebook/Facebook'
import Instagram from './instagram/Instagram'

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/google" component={Google} />      
        <Route exact path="/twitter" component={Twitter} />    
        <Route exact path="/facebook" component={Facebook} />    
        <Route exact path="/instagram" component={Instagram} />    
      </div>
    </BrowserRouter>
  )
}

export default App