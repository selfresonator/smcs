import React from 'react';

import './style.css';

const SignUp = () => (
  <section className="sign-up">
    <p className="header">
      <span className="sign">Sign up</span> Integer posuere erat a aliquet.
    </p>
    
    <form action="">
      <input className="input" placeholder="Your Name" type="text"/>
      <input className="input" placeholder="Email Address" type="text"/>
      <input className="input btn" value="Get Started" type="submit"/>
    </form>
    
    <footer className="terms">By clicking “Sign Up” button you agree to our <a href="" className="link">Terms of Use</a></footer>
  </section>
);

export default SignUp;