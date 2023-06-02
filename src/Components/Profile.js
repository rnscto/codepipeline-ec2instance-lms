import React, { useState, useEffect } from 'react';
import MyImg from '../images/myimage.jpg';
import Performance from './Performance';
import OtherDetail from './OtherDetail';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';
import { ImArrowLeft2 } from 'react-icons/im';

export default function Profile() {

    const[state, setState] = useState("");

    const navigate = useNavigate();

  return (
    <div>
      <div className='container-fluid g-0' style={{overflowX:"hidden"}}>
         <div className='' style={{marginBottom:"60px"}} >
           <div classNameName='p-0' style={{ width:"100%", marginTop:"230px" }} >
             <div className='row'>
                <div className='col-md-12 P-0'>
                  <div className='row fixed-top px-4' style={{ backgroundColor:"#fff" }}>
                    <div className='row'>
                       <div className='col-12'>
                         <div className='row py-3'>
                           <div style={{ display:"flex", justifyContent:"", alignItems:"center" }}>
                             <span className='text-start' style={{ fontWeight:600, fontSize:25}}>Profile Detail</span>
                           </div>
                         </div>
                       </div>
                     </div>
                     <div className='row g-0 d-flex align-items-center justify-content-between'>
                        <div className='col-3 p-0' style={{ }}>
                          <div className='' style={{ borderRadius:50, width:80, height:80 }} >
                           <img src={MyImg} className='ms-2' style={{ width:"100%", height:"100%", borderRadius:50 }} />
                          </div>
                        </div>
                        <div className='col-8 me-auto text-start p-0' style={{ }}>
                          <div className='profile-txt' >
                            <div className='homelive-txt' style={{ fontSize:20, fontWeight:600, color:"#2E2E2E"}}>Yogesh Jangid</div>
                            <div className='sub-name-txt' style={{ fontSize:16, fontWeight:500, color:"#545454"}}>Student</div>
                          </div>
                        </div>
                      </div>
                     <div className='col-6'>
                        <div className='py-3' onClick={()=> setState("Performance")} style={{ borderBottom:state=="Performance"?"2px solid #ED7A2B":"none", width:"100%", backgroundColor:"#fff", cursor:"pointer", display:"flex", justifyContent:"center", alignItems:"center" }} >
                            <span className='homelive-txt' style={{ color:state=="Performance"?"#ED7A2B":"#545454", fontSize:20, fontWeight:600 }} >My Performance</span>
                        </div>
                     </div>
                     <div className='col-6'>
                        <div className='py-3' onClick={()=> setState("OtherDetail")} style={{ borderBottom:state=="OtherDetail"?"2px solid #ED7A2B":"none", width:"100%", backgroundColor:"#fff", cursor:"pointer", display:"flex", justifyContent:"center", alignItems:"center" }} >
                          <span className='homelive-txt' style={{ color:state=="OtherDetail"?"#ED7A2B":"#545454", fontSize:20, fontWeight:600 }} >Other Details</span>
                        </div>
                     </div>
                   </div> 
                   { state === "Performance" ? <> <Performance /> </> : <></> }
                   { state === "OtherDetail" ? <> <OtherDetail /> </> : <></> }
                </div>
            </div> 
          </div>
         </div>
         <Footer />
      </div>
    </div>
  )
}
