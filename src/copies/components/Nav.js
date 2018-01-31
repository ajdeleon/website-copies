import React from 'react'

const Nav = () => {
  return (
    <header className="flex mt3 mb6 mw9 center">
      <div className="tc lh-title f6 mv0">
        <a className="link dim black-90 ml4">About</a>
        <a className="link dim black-90 ml3">Store</a>
      </div>
      <div className="flex-auto"></div>
      <div>
        <nav className="tc lh-title flex mb1">
          <a href="#/" className="link dim black-90 f6 dib w3 router-link-active">
            Mail
          </a>
          <a href="#/scales" className="link dim black-90 f6 dib w3">
            Images
          </a>
          <a href="#/palette" className="link dim black-90 f6 dib w3">
            Palette
          </a>
          <a href="#/tools" className="link dim black-90 f6 dib w3">
            Tools
          </a>
          <a href="#/tools" className="link dim black-90 f6 dib w3">
            Expert
          </a>
        </nav>
      </div>
    </header>
  )
}

export default Nav