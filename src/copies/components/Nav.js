import React from 'react'
import apps from '../../assets/apps.svg'
import alarm from '../../assets/alarm.png'
import './Nav.css'

const Nav = () => {
  return (
    <div>
      <header className="flex mt3 mb4 mw9 center">
        <div>
          <nav className="tc lh-title flex mb1 o-70 items-center">
            <a href="https://www.google.com/intl/en/about/" className="f6 link black-90 ml4 underline-hover">About</a>
            <a href="https://store.google.com" className="f6 link black-90 ml3 underline-hover">Store</a>
          </nav>
        </div>
        <div className="flex-auto"></div>
        <div>
          <nav className="tc lh-title flex mb1 o-90 items-center">
            <a href="https://mail.google.com/" className="link dim black-90 f6 dib mr3 underline-hover">
              Mail
            </a>
            <a href="https://www.google.com/imghp" className="link dim black-90 f6 dib mr3 underline-hover">
              Images
            </a>
            <a href="https://www.google.com/intl/en/about/products/" className="link dim black-90 mr3 mt1 underline-hover">
              <img src={apps} className="o-60" alt="Apps"/>
            </a>
            <a href="" className="link dim black-90 f6 dib w1 h1 mr3 underline-hover">
              <img src={alarm} className="o-90" alt="Alerts"/>
            </a>
            {/* <a href="#/tools" className="link dim black-90 f6 dib w3">
              Tools
            </a> */}
            {/* <div className="dots" style={{width: 20, height: 20, backgroundPosition: '-132px -38px'}}></div> */}
            <a href="https://accounts.google.com/SignOutOptions?hl=en&continue=https://www.google.com/" className="link dim black-90 f6 dib mr4">
              <div className="br-100 bg-blue w2 h2 white f4 flex items-center justify-center">
                A
              </div>
            </a>
          </nav>
        </div>
      </header>
    </div>
  )
}

export default Nav