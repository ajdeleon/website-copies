import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Google from './copies/Google'

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Route exact path="/google" component={Google} />
      </div>
    </BrowserRouter>
  )
}

export default App