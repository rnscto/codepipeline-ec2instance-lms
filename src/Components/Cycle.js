import React from 'react';
import Lottie from "lottie-react";
import Bicycle from '../images/cycle.json';
import { NavLink } from 'react-router-dom';

export default function Cycle() {
  return (
    <div>
      <div className='container'>
        <div className='row'>
          <div className='col-8 m-auto'>
            <p className='pt-5' style={{ color:"#7E7E7E", fontSize:22, fontWeight:600 }} >Welcome to</p>
            <p className='' style={{ color:"#2E2E2E", fontSize:22, fontWeight:600 }} >SBI-PO Current Affairs</p>
            <div className='card p-3 border-0'>
              <div style={{ color:"#2E2E2E", fontSize:16, fontWeight:600 }}>Participants Joined</div>
              <div style={{ color:"#2E2E2E", fontSize:20, fontWeight:600 }}><span style={{ color:"#ED7A2B", fontSize:20, fontWeight:600 }}>2545</span> / 5698</div>
            </div>
            <p className='px-4 pt-3' style={{ color:"#DC1111", fontSize:18, fontWeight:600 }} >Do not Close or Refresh this window</p>
            <Lottie animationData={Bicycle} style={{ width:"100%",}}/>
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='col-10 m-auto'>
          <NavLink to="/Question" className="text-decoration-none" >
            <div className='mt-5 mb-5' style={{ width:'100%', height:50, backgroundColor:'#ED7A2B', borderRadius:10, display:"flex", justifyContent:"center", alignItems:"center", cursor:"pointer", color:'#fff', fontSize:20, fontWeight:500, }} >Exam Starts in <span className='ps-2' style={{color:'#FAFF10', fontSize:20, fontWeight:500,}} >00:20</span></div>
          </NavLink>
        </div>
      </div>
    </div>
  )
}
