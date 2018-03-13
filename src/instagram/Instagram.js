import React from 'react'
import insta from '../assets/insta_background.png'
import ios from '../assets/ios.png'
import android from '../assets/android.png'

const siteBlue = "#3897f0"

const Instagram = () => (
  <div>
    <div className="flex justify-center w-100 system-sans-serif" style={{backgroundColor: "#fafafa"}}>
      <div className="flex justify-between items-center w-70 mt4">
        <div className="">
          <img className="mw6 mr3 ml5" src={insta} alt="instagram" style={{paddingRight: -10}}/>
        </div>
        <div className="" style={{minWidth: 300, maxWidth: 400}}>
          <div className="flex justify-center ba b--light-gray bg-white">
            <div className="w-80">
              <form className="tc">
                <div className="">
                  <h1>Instagram</h1>
                  <h2 className="gray f5 o-80 lh-title" >Sign up to see photos and videos from your friends</h2>
                </div>
                <div>
                  <button className="white w-100 mb3 br2 pv1" style={{backgroundColor: siteBlue}}><span>F </span>Log in with Facebook</button>
                </div>
                <div className="flex justify-center items-center">
                  <div className="flex-grow-1 ba b--light-gray" style={{height: 2}}></div>
                  <div className="gray mh3 b o-80 mb3">OR</div>
                  <div className="flex-grow-1 ba b--light-gray" style={{height: 2}}></div>
                </div>
                <div><input className="w-100 pl1 pv2 mb1 br2 f7 bg-light-gray b--light-gray" type="text" placeholder="Mobile Number or Email" name="number" id=""/></div>
                <div><input className="w-100 pl1 pv2 mb1 br2 f7 bg-light-gray b--light-gray" type="text" placeholder="Full Name" name="name" id=""/></div>
                <div><input className="w-100 pl1 pv2 mb1 br2 f7 bg-light-gray b--light-gray" type="text" placeholder="Username" name="username" id=""/></div>
                <div><input className="w-100 pl1 pv2 mb2 br2 f7 bg-light-gray b--light-gray" type="text" placeholder="Password" name="password" id=""/></div>
                <div><input className="white w-100 pv1 br2 mb3" style={{backgroundColor: siteBlue}} type="submit" value="Sign up"/></div>
                <div className="flex justify-center">
                  <p className="gray f6 w-70 mb4">By signing up you agree to our Terms & Privacy Policy.</p>
                </div>
              </form>
            </div>
          </div>
          <div className="tc ba b--light-gray bg-white mt2">
            <p className="f6 pv3">Have an account? <a href="" className="link" style={{color: siteBlue}}>Log in</a></p>
          </div>
          <div className="tc">
            <p className="f6">Get the app.</p>
            <div className="dib mb3">
              <img className="w-30 mr2" src={ios} alt="Iphone app"/>
              <img className="w-30" src={android} alt="Android app"/>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="flex justify-center">
      <div className="w-80">
        <ul className="flex f7 b list">
          <li className="mr3">ABOUT US</li>
          <li className="mr3">SUPPORT</li>
          <li className="mr3">BLOG</li>
          <li className="mr3">PRESS</li>
          <li className="mr3">API</li>
          <li className="mr3">JOBS</li>
          <li className="mr3">PRIVACY</li>
          <li className="mr3">TERMS</li>
          <li className="mr3">DIRECTORY</li>
          <li className="mr3">PROFILES</li>
          <li className="mr3">HASHTAGS</li>
          <li className="mr3">LANGUAGE</li>
          <li className="ml-auto">2018 INSTAGRAM</li>
        </ul>
      </div>
    </div>
  </div>
)

export default Instagram