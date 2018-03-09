import React from 'react'
import sample from '../../assets/sample_pic.png'

const Body = () => {
  return (
  <div className="center mw6 mt0">
    <img src={sample} alt="Main"/>
    <div className="flex justify-center mb4">
      <form className="flex justify-center w-100">
        <input type="text" className="h2 w-80"/>
      </form>
    </div>
    <div className="flex justify-center items-center f6 b gray">
      <a className="bg-black-10 w4 h2 flex justify-center items-center">Google Search</a>
      <span className="w1"></span>
      <a className="bg-black-10 w4 h2 flex justify-center items-center">I'm Feeling Lucky</a>
    </div>
    <div className="mt4">
      <p className="tc f7">Learn about the man who inspired <a href="https://www.google.com/culturalinstitute/beta/exhibit/xwKSlyiB8cFEIw" className="link underline-hover dark-blue">Black History month</a></p>
    </div>
  </div>
  )
}

export default Body