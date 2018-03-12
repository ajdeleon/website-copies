import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => (
  <div className="vh-100 flex justify-center items-center bg-light-yellow">
    <div className="pb5">
      <div className="o-70">
        <h2>Check out these website copies</h2>
      </div>
      <ul className="list justify-center f4" style={{textShadow: ".5px .5px black"}}>
        <li className="pt3"><Link to="/facebook" className="link blue">Facebook</Link></li>
        <li className="pt3"><Link to="/google" className="link red">Google</Link></li>
        <li className="pt3"><Link to="/twitter" className="link light-blue">Twitter</Link></li>
      </ul>
    </div>
  </div>
)

export default Home