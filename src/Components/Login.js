import React, {useState} from 'react';
import Logo from '../images/logo.png';
import { HiMail } from 'react-icons/hi';
import { AiFillEyeInvisible } from 'react-icons/ai';
import { AiFillEye } from 'react-icons/ai';
import { NavLink, useLocation } from 'react-router-dom';

export default function Login() {

  const[email,setEmail] = useState();
  console.log(email);
  
  const [passwordType, setPasswordType] = useState("password");
  const [passwordInput, setPasswordInput] = useState("");
  console.log(passwordInput);
  
  const handlePasswordChange = (evnt) => {
    setPasswordInput(evnt.target.value);
  }
  const togglePassword = () => {
    if (passwordType === "password") {
        setPasswordType("text")
        return;
    }
    setPasswordType("password")
  }

  return (
    <>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-12 login-section'>
            <div className='row pt-4 text-white'>
              <div className='col-10 me-auto ps-4 pt-5 pb-4'>
                <div className='text-start pt-5'>
                  <h4>Login to your</h4>
                  <h1>Student App</h1>
                </div>
              </div>
            </div>
          </div> 
        </div>
        <div className='row'>
          <div className='col-12 mx-auto'>
            <div className='card login-card mt-5 bg-transparent'>
              <p className='text-start' style={{ fontSize:20, fontWeight:500, color:"#545454" }} >Enter Registered Email</p>
              <div class="input-group p-1 mb-3" style={{ border:"1px solid #E4E4E4", borderRadius:5 }}>
                <span className="input-group-text border-0 bg-transparent" id="basic-addon1">
                  <HiMail style={{ fontSize: 25, color:"#858585" }} />  
                </span>
                 <input type="email" value={email} onChange={(e) => {setEmail(e.target.value)}} className="form-control border-0 py-2 shadow-none bg-transparent" placeholder="john.doe@gmail.com" aria-label="Username"aria-describedby="basic-addon1" />
              </div> 
              <div class="input-group p-1" style={{ border:"1px solid #E4E4E4", borderRadius:5 }}>
                <span className="input-group-text border-0 bg-transparent" id="basic-addon1">
                  <span style={{ cursor:"pointer" }} className="border-0" onClick={togglePassword} >
                      {passwordType == "password" ? <AiFillEyeInvisible style={{ fontSize:25, color:"#858585" }} /> : <AiFillEye style={{ fontSize:25, color:"#858585" }} />}
                  </span>
                </span>
                 <input type={passwordType} onChange={handlePasswordChange} value={passwordInput} name="password" className="form-control border-0 py-2 shadow-none bg-transparent" placeholder="Enter Password" aria-label="Username"aria-describedby="basic-addon1" />
              </div> 
              <p className='text-end py-2' style={{ fontSize:18, fontWeight:400, color:"#ED7A2B", cursor:"pointer" }} >Forgot Password ?</p>
              <NavLink to='/Home' className="text-decoration-none" >
                <div className='log-btn p-3 text-white' >Login</div>
              </NavLink>
              <p className='text-center mt-4 splash-2-text' >Not a Student ? <span className='splash-txt2' style={{ cursor:"pointer" }} >Register Now</span></p>
              <div className='col-10 mt-4 m-auto'>
               <img src={Logo} className='' style={{ width:"100%" }} />
              </div>
            </div> 
          </div>
        </div>  
      </div> 
    </>
  )
}
