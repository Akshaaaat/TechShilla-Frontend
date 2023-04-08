import './login.css'
import React from 'react'
import {useState} from 'react'

const Login = () => {

const switchLogin = () =>{
	document.querySelector("#flipper").classList.toggle("flip");
}

  return (
    <>

	<div className="flip-container">
		<div className="flipper" id="flipper">

			<div className="loginBox">
				<h1 className="title">Login</h1>
				<div className="inputDiv">
					<h5>Email</h5>
					<input type="text" placeholder='Enter Email' id='emailInput'/>
				</div>
				<div className="inputDiv">
					<h5>Password</h5>
					<input type="text" placeholder='Password' id='pwdInput'/>
				</div>
				
				<button className='loginButton'>Login</button>
				<button className="flipbutton" id="registerButton" onClick={switchLogin}>Register Instead</button>
			
			</div>
			
			<div className="signUpBox">
				<h1 className="title">Register</h1>
				<button className="flipbutton" id="registerButton" onClick={switchLogin}>Login to my account</button>
			</div>
		</div>
	</div>

    </>
  )
}

export default Login