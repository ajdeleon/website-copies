import React from 'react'

const Spotify = () => (
  <div className="main">
    <div className="header flex justify-center bg-black o-70 fixed left-0 right-0 top-0 z-5">
      <div className="wrapper flex items-center w-60 white">
        <h1>Spotify</h1>
        <ul className="flex list ml-auto b">
          <li className="mh2">Premium</li>
          <li className="mh2">Help</li>
          <li className="mh2">Download</li>
          <li className="mh2">|</li>
          <li className="mh2">Sign Up</li>
          <li className="mh2">Log In</li>
        </ul>
      </div>
    </div>
    <div className="flex items-center mv6 ml4">
      <div className="w-80">
        <div>
          <h1 className="f1 mb1">Make the most of Spotify</h1>
        </div>
        <div className="flex justify-between">
          <div className="w-30">
            <h3 className="f3">Manage your account</h3>
            <p className="mb4">Edit your profile, change your password, and update your payment information.</p>
            <a href="" className="link green b f7 tracked">MANAGE ACCOUNT</a>
          </div>
          <div className="w-30">
            <h3 className="f3">Get our free app</h3>
            <p className="mb4">Seamlessly listen to music you love. Download the Spotify app for your computer.</p>
            <a href="" className="link green b f7 tracked">DOWNLOAD DESKTOP APP</a>
          </div>
          <div className="w-30">
            <h3 className="f3">Listen on the web</h3>
            <p className="mb4">To play and share music without the app, all within your browser, go to <a href="www.play.spotify.com" className="green link">play.spotify.com.</a></p>
            <a href="" className="link green b f7 tracked">OPEN WEB PLAYER</a>
          </div>
        </div>
      </div>
    </div>
    <div className="footer flex bg-black white">
      <div className="wrapper ml4 flex w-60">
        <h1>Spotify</h1>
        <div className="ml5">
          <h5 className="gray mt4">COMPANY</h5>
          <ul className="list pl0">
            <li className="mb3">About</li>
            <li className="mb3">Jobs</li>
            <li className="mb3">Press</li>
            <li className="mb3">News</li>
          </ul>
        </div>
        <div className="ml5">
          <h5 className="gray mt4">COMMUNITIES</h5>
          <ul className="list pl0">
            <li className="mb3">For Artists</li>
            <li className="mb3">Developers</li>
            <li className="mb3">Brands</li>
            <li className="mb3">Investorys</li>
          </ul>
        </div>
        <div className="ml5">
          <h5 className="gray mt4">USEFUL LINKS</h5>
          <ul className="list pl0">
            <li className="mb3">Help</li>
            <li className="mb3">Gift</li>
            <li className="mb3">Web Player</li>
          </ul>
        </div>
        <div className="flex mt5 ml6">
          <div className="bg-dark-gray ml4 pa2 br-100" style={{width: 50, height: 50}}>
            <svg id="instagram-icon" viewBox="0 0 480 480" width="100%" height="100%" fill="white" overflow="hidden">
              <path d="M224,40.376 C283.808,40.376 290.901333,40.6 314.533333,41.6826667 C375.237333,44.4453333 403.592,73.248 406.354667,133.504 C407.437333,157.117333 407.642667,164.210667 407.642667,224.018667 C407.642667,283.845333 407.418667,290.92 406.354667,314.533333 C403.573333,374.733333 375.293333,403.592 314.533333,406.354667 C290.901333,407.437333 283.845333,407.661333 224,407.661333 C164.192,407.661333 157.098667,407.437333 133.485333,406.354667 C72.632,403.573333 44.4266667,374.64 41.664,314.514667 C40.5813333,290.901333 40.3573333,283.826667 40.3573333,224 C40.3573333,164.192 40.6,157.117333 41.664,133.485333 C44.4453333,73.248 72.7253333,44.4266667 133.485333,41.664 C157.117333,40.6 164.192,40.376 224,40.376 L224,40.376 Z M224,-1.57772181e-30 C163.165333,-1.57772181e-30 155.549333,0.261333333 131.656,1.344 C50.3066667,5.07733333 5.096,50.2133333 1.36266667,131.637333 C0.261333333,155.549333 -9.06682137e-15,163.165333 -9.06682137e-15,224 C-9.06682137e-15,284.834667 0.261333333,292.469333 1.344,316.362667 C5.07733333,397.712 50.2133333,442.922667 131.637333,446.656 C155.549333,447.738667 163.165333,448 224,448 C284.834667,448 292.469333,447.738667 316.362667,446.656 C397.637333,442.922667 442.96,397.786667 446.637333,316.362667 C447.738667,292.469333 448,284.834667 448,224 C448,163.165333 447.738667,155.549333 446.656,131.656 C442.997333,50.3813333 397.805333,5.096 316.381333,1.36266667 C292.469333,0.261333333 284.834667,-9.06682137e-15 224,-9.06682137e-15 L224,-1.57772181e-30 Z M224,108.976 C160.477333,108.976 108.976,160.477333 108.976,224 C108.976,287.522667 160.477333,339.042667 224,339.042667 C287.522667,339.042667 339.024,287.541333 339.024,224 C339.024,160.477333 287.522667,108.976 224,108.976 Z M224,298.666667 C182.765333,298.666667 149.333333,265.253333 149.333333,224 C149.333333,182.765333 182.765333,149.333333 224,149.333333 C265.234667,149.333333 298.666667,182.765333 298.666667,224 C298.666667,265.253333 265.234667,298.666667 224,298.666667 Z M343.578667,77.56 C328.72,77.56 316.68,89.6 316.68,104.44 C316.68,119.28 328.72,131.32 343.578667,131.32 C358.418667,131.32 370.44,119.28 370.44,104.44 C370.44,89.6 358.418667,77.56 343.578667,77.56 Z"></path>
            </svg>
          </div>
          <div className="bg-dark-gray ml4 pa2 br-100" style={{width: 50, height: 50}}>
            <svg id="twitter-icon" viewBox="0 0 448 448" width="100%" height="100%" fill="white">
              <path d="m27 347.75q8.75 1 19.5 1 56.25 0 100.25-34.5-26.25-0.5-47-16.125t-28.5-39.875q8.25 1.25 15.25 1.25 10.75 0 21.25-2.75-28-5.75-46.375-27.875t-18.375-51.375v-1q17 9.5 36.5 10.25-16.5-11-26.25-28.75t-9.75-38.5q0-22 11-40.75 30.25 37.25 73.625 59.625t92.875 24.875q-2-9.5-2-18.5 0-33.5 23.625-57.125t57.125-23.625q35 0 59 25.5 27.25-5.25 51.25-19.5-9.25 28.75-35.5 44.5 23.25-2.5 46.5-12.5-16.75 24.5-40.5 41.75 0.25 3.5 0.25 10.5 0 32.5-9.5 64.875t-28.875 62.125-46.125 52.625-64.5 36.5-80.75 13.625q-67.75 0-124-36.25z"></path>
            </svg>
          </div>
          <div className="bg-dark-gray ml4 pa2 br-100" style={{width: 50, height: 50}}>
            <svg id="facebook-icon" viewBox="0 0 448 448" width="100%" height="100%" fill="white">
              <path d="m119.75 242.25v-74h63.75v-54.5q0-46.5 26-72.125t69.25-25.625q36.75 0 57 3v66h-39.25q-21.5 0-29 9t-7.5 27v47.25h73.25l-9.75 74h-63.5v189.75h-76.5v-189.75h-63.75z"></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Spotify