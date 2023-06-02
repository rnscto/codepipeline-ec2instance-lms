import React from 'react';
import { ImArrowLeft2 } from "react-icons/im";
import { NavLink, useNavigate } from 'react-router-dom';

export default function Result() {

    const navigate = useNavigate();

  return (
    <div>
        <div className='container-fluid'>
         <div classNameName='p-0' style={{ width:"100%", marginTop:"80px" }} >
             <div className='row'>
               <div className='col-md-12 P-0'>
                 <div className='row fixed-top'>
                    <div className='row py-2 mx-2 d-flex align-items-center'>
                        <button type='button' onClick={() => navigate(-1)} className='btn border-0 col-2' style={{ width:55, height:55, background: "rgba(46, 46, 46, 0.1)", display:"flex", justifyContent:"center", alignItems:"center", borderRadius:50 }} ><ImArrowLeft2 style={{ fontSize:22 }} /></button>
                        <span className='text-center col-8' style={{ fontWeight:600, fontSize:22, paddingLeft:15  }}>My Result</span>
                    </div>
                  </div> 
               </div>
            </div> 
            <div className='row'>
               <div className='col-12'>
                 <div className='card p-0 bg-transparent' style={{ border:"1px solid #fff" }} >
                    <div className='row p-4'>
                        <div className='col-7 text-start'>
                            <div className='' style={{ fontSize:18, fontWeight:600, color:"#2E2E2E" }} >Rank</div>
                            <div className='' style={{ fontSize:22, fontWeight:600, color:"#2E2E2E" }}><span style={{ color:"#ED7A2B", fontSize:22, fontWeight:600 }} >165</span> / 2056</div>
                        </div>
                        <div className='col-5 text-start'>
                            <div className='' style={{ fontSize:18, fontWeight:600, color:"#2E2E2E" }} >Score</div>
                            <div className='' style={{ fontSize:22, fontWeight:600, color:"#2E2E2E" }}><span style={{ color:"#ED7A2B", fontSize:22, fontWeight:600 }} >06</span> / 10</div>
                        </div>
                    </div>
                    <div className='text-start px-4' style={{ fontSize:18, fontWeight:600, color:"#2E2E2E" }}>Time <span style={{ color:"#ED7A2B", fontSize:22, fontWeight:600 }}>06 min : 12 Sec</span></div>
                    <NavLink to="/ScoreCard" className="text-decoration-none" >
                      <div className='mt-3 py-3' style={{ width:"100%", backgroundColor:"#fff", borderBottomLeftRadius:5, borderBottomRightRadius:5, display:"flex", justifyContent:"center", alignItems:"center", fontSize:16, fontWeight:500, color:"#2E2E2E" }} >View Scorecard </div>
                    </NavLink>
                 </div>  
               </div> 
            </div>
          </div>  
        </div>
    </div>
  )
}
