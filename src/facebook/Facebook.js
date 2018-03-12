import React from 'react'

const Facebook = () => {
  const mainWidth = '980px'
  const d = new Date()
  const _day = d.getDate()
  const _month = d.getMonth() + 1
  const _year = d.getFullYear() - 18

  return (
    <div className="helvetica flex flex-column">
      <div className="flex justify-center white" style={{ backgroundColor: "#3b5998", background: "linear-gradient(#4e69a2, #3b5998 50%)" }}>
        <div className="flex items-center" style={{ width: mainWidth }}>
          <h1 className="mb3 ">facebook</h1>
          <div className="ml-auto">
            <form className="f7 flex mt2">
              <div className="flex flex-column">
                <label className="mb1" htmlFor="email">Email or Phone</label>
                <input type="text" name="email" id="email" />
              </div>
              <div className="flex flex-column ml3">
                <label className="mb1" htmlFor="password">Password</label>
                <input type="text" name="password" id="password" />
                <span className="mt1 white o-60">Forgot Account?</span>
              </div>
              <div className="flex items-bottom ml3">
                <input className="mv3 br1 white pv1" style={{backgroundColor: "#4267b2", borderColor: "#29487d", borderWidth: .5}} type="submit" value="Log In" />
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="flex justify-center pt3" style={{ backgroundColor: "#e9ebee" }}>
        <div className="flex" style={{ width: mainWidth }}>
          <div>
            <div>
              <div className="f2 b">Recent Logins</div>
            </div>
            <div>
              <div className="f4 mt1" style={{ letterSpacing: .5 }}>
                Click your picture or add an account.
              </div>
            </div>
          </div>
          <div className="ml-auto">
            <div className="f2 b pr2">
              Create a New Account
            </div>
            <div className="f4 mt1 mb3" style={{ letterSpacing: .5 }}>
              It's free and always will be.
            </div>
            <div>
              <form>
                <div className="">
                  <div className="flex mb2">
                    <input className="pv2 pl2 br2 ba b--moon-gray" type="text" name="firstName" id="firstName" placeholder="First name" />
                    <input className="pv2 pl2 br2 ml-auto ba b--moon-gray" type="text" name="lastName" id="lastName" placeholder="Last name" />
                  </div>
                  <div>
                    <input className="pv2 pl2 br2 mb2 ba b--moon-gray w-100" type="text" name="email" id="email" placeholder="Mobile number or email" />
                  </div>
                  <div>
                    <input className="pv2 pl2 br2 mb3 ba b--moon-gray w-100" type="text" name="password" id="password" placeholder="New password" />
                  </div>
                  <div className="">
                    <div className="mb1">Birthday</div>
                    <div className="flex">
                      <select className="b--moon-gray" name="month" title="Month" defaultValue={_month}>
                        <option value="0">Month</option>
                        <option value="1">Jan</option>
                        <option value="2">Feb</option>
                        <option value="3">Mar</option>
                        <option value="4">Apr</option>
                        <option value="5">May</option>
                        <option value="6">Jun</option>
                        <option value="7">Jul</option>
                        <option value="8">Aug</option>
                        <option value="9">Sep</option>
                        <option value="10">Oct</option>
                        <option value="11">Nov</option>
                        <option value="12">Dec</option>
                      </select>
                      <select className="b--moon-gray" name="day" title="Day" defaultValue={_day}>
                        <option value="0">Day</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                        <option value="13">13</option>
                        <option value="14">14</option>
                        <option value="15">15</option>
                        <option value="16">16</option>
                        <option value="17">17</option>
                        <option value="18">18</option>
                        <option value="19">19</option>
                        <option value="20">20</option>
                        <option value="21">21</option>
                        <option value="22">22</option>
                        <option value="23">23</option>
                        <option value="24">24</option>
                        <option value="25">25</option>
                        <option value="26">26</option>
                        <option value="27">27</option>
                        <option value="28">28</option>
                        <option value="29">29</option>
                        <option value="30">30</option>
                        <option value="31">31</option>
                      </select>
                      <select className="b--moon-gray" name="year" title="Year" defaultValue={_year}>
                        <option value="1985">1985</option>
                        <option value="1986">1986</option>
                        <option value="1987">1987</option>
                        <option value="1988">1988</option>
                        <option value="1989">1989</option>
                        <option value="1990">1990</option>
                        <option value="1991">1991</option>
                        <option value="1992">1992</option>
                        <option value="1993">1993</option>
                        <option value="1994">1994</option>
                        <option value="1995">1995</option>
                        <option value="1996">1996</option>
                        <option value="1997">1997</option>
                        <option value="1998">1998</option>
                        <option value="1999">1999</option>
                        <option value="2000">2000</option>
                        <option value="2001">2001</option>
                        <option value="2002">2002</option>
                        <option value="2003">2003</option>
                        <option value="2004">2004</option>
                        <option value="2005">2005</option>
                        <option value="2006">2006</option>
                        <option value="2007">2007</option>
                        <option value="2008">2008</option>
                        <option value="2009">2009</option>
                        <option value="2010">2010</option>
                      </select>
                      <div className="f7 ml2" style={{maxWidth: 150}}>
                        <a href="" className="link underline-hover" style={{color: "#365899"}}>Why do I need to provide my birthday?</a>
                      </div>
                    </div>
                  </div>
                  <div className="mv3">
                    <input className="ml1" type="radio" name="sex" value="1" id="female" />
                    <label className="pl2"htmlFor="female">Female</label>
                    <input className="ml4" type="radio" name="sex" value="0" id="male" />
                    <label className="pl2"htmlFor="male">Male</label>
                  </div>
                  <div className="f7 gray mb3" style={{maxWidth: 320}}>
                    By clicking Create Account, you agree to our Terms and that you have read our Data Policy, including our Cookie Use. You may receive SMS Notifications from Facebook and can opt out at any time.
                  </div>
                  <div>
                    <button type="submit" className="white ph4 pv2 mb3 f4 b br2 shadow-2" style={{backgroundColor: "#69a74e", borderColor: "#3b6e22 #3b6e22 #2c5115", textShadow: "0 1px 2px rgba(0,0,0,.5", background: "linear-gradient(rgb(103, 174, 85), rgb(87, 136, 67))"}}>Create Account</button>
                  </div>
                  <div className="f6 pt3 mt2 mb5 gray" style={{borderTop: "1px solid", borderColor: "#dddfe2"}}>
                    <a className="link underline-hover b" style={{color: "#365899"}} href="">Create a page</a> for a celebrity, band, or business.
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div style={{ width: mainWidth }}></div>
      </div>
    </div>
  )
}

export default Facebook