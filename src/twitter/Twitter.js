import React from 'react'

const Twitter = () => (
  <div className="flex flex-column min-vh-100 helvetica">
    <div className="flex flex-grow-1">
      <div className="bg-light-blue f4 flex white flex-grow-1 flex-column justify-center items-center w-50">
        <div className="pb4 w-60"><i class="fas fa-search"></i> Follow your interests</div>
        <div className="pb4 w-60"><i class="far fa-user"></i> Hear what people are talking about</div>
        <div className="w-60"><i class="far fa-comment"></i> Join the Conversation</div>
      </div>
      <div className="flex-grow-1 justify-around w-50 bg-bottom">
        <div className="tc ph4">
          <form className="mt3 flex justify-center dn-m">
            <input className="h2 o-60 f6 mr2 pl2" type="text" placeholder="Phone, email, or username"/>
            <div className="flex flex-column">
              <input className="h2 o-60 f6 mr2 pl2" type="text" placeholder="Password"/>
              <span className="tl"><a className="link gray o-60 f7" href="">Forgot password?</a></span>
            </div>  
            <input className="h2 br-pill light-blue b--light-blue ml2 f6" type="submit" value="Log in"/>
          </form>
        </div>
        <div className="flex flex-column h-100 justify-center items-center mh4 pb6">
          <div className="w-70">
            <h1>See what's happening in the world right now</h1>
            <h3>Join Twitter Today</h3>
            <form action="" className="flex flex-column">
              <input className="pv3 o-60 f6 mb3 pl2" type="text" placeholder="Phone or email" name="phone-email" id=""/>
              <input className="pv3 o-60 f6 mb3 pl2" type="text" placeholder="Password" name="password" id=""/>
              <div className="f6 flex w-80 items-center">
                <input className="h2 br-pill bg-light-blue white bn" type="submit" value="  Get Started  "/>              
                <span className="ml-auto">Have an account? <a href="" className="link light-blue">Log in</a></span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <ul className="list f7 flex justify-around items-center flex-wrap link ba ma0 pv3 ph6 bg-white">
      <li><a href="" className="link underline-hover gray o-50">About</a></li>
      <li><a href="" className="link underline-hover gray o-50">Help Center</a></li>
      <li><a href="" className="link underline-hover gray o-50">Blog</a></li>
      <li><a href="" className="link underline-hover gray o-50">Status</a></li>
      <li><a href="" className="link underline-hover gray o-50">Jobs</a></li>
      <li><a href="" className="link underline-hover gray o-50">Terms</a></li>
      <li><a href="" className="link underline-hover gray o-50">Privacy Policy</a></li>
      <li><a href="" className="link underline-hover gray o-50">Cookies</a></li>
      <li><a href="" className="link underline-hover gray o-50">Adds Info</a></li>
      <li><a href="" className="link underline-hover gray o-50">Brand</a></li>
      <li><a href="" className="link underline-hover gray o-50">Apps</a></li>
      <li><a href="" className="link underline-hover gray o-50">Advertising</a></li>
      <li><a href="" className="link underline-hover gray o-50">Marketing</a></li>
      <li><a href="" className="link underline-hover gray o-50">Businesses</a></li>
      <li><a href="" className="link underline-hover gray o-50">Developers</a></li>
      <li><a href="" className="link underline-hover gray o-50">Directory</a></li>
      <li><a href="" className="link underline-hover gray o-50">Settings</a></li>
      <li><a href="" className="link underline-hover gray o-50">2018 Twitter</a></li>
    </ul>
  </div>
  // <div className="flex flex-column min-vh-100">
  // <div className="bg-blue flex-grow-1">Body</div>
  // <div style={{marginTop:"auto"}}>Footer</div>
  // </div>
)

export default Twitter