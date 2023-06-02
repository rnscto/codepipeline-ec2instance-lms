import React from 'react';
import Logo from '../images/logo.png';

export default function Splash2() {
  return (
    <div className='container-fluid'>
      <div className='row splash-2'>
        <div className='col-12 m-auto px-5'>
          <img src={Logo} className='' style={{ width:"100%" }} />
          <div className='row mt-4'>
            <div className='col-12 m-auto'>
               <div className='log-btn p-3 text-white' >Login</div>
              <p className='text-center mt-4 splash-2-text' >Not a Student ? <span className='splash-txt2'>Register Now</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
