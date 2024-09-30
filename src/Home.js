import React from 'react'
import App from './App'
import 'animate.css';
import WaveBackground from './Background-wave';

const Home = () => {
  return (
    <div className="Container-fluid">
      <div class="Header">
        <h1 class="animate__animated animate__backInLeft">"Innovation distinguishes between <br/>a leader and a follower".</h1>
        <p class="animate__animated animate__backInLeft">-Steve Jobs</p>
      </div>
      <div class="section-1">
        <WaveBackground />
        <h1 class="Role-heading">Role Based</h1>
        <img src="/Role.png" class="role-image center"/>
      </div>
    </div>
  )
}

export default Home

