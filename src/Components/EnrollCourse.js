import React, { useState, useEffect } from 'react';
import EnrollPreRecord from './EnrollPreRecord';
import EnrollLiveClass from './EnrollLiveClass';
import { useNavigate } from 'react-router-dom';
import { ImArrowLeft2 } from 'react-icons/im';

export default function EnrollCourse() {

    const[state, setState] = useState("");

    const navigate = useNavigate();

  return (
    <div>
      <div className='container-fluid g-0' style={{overflowX:"hidden"}}>
         <div className='' style={{marginBottom:"60px"}} >
           <div classNameName='p-0' style={{ width:"100%", marginTop:"150px" }} >
             <div className='row'>
                <div className='col-lg-12 P-0'>
                  <div className='row fixed-top' style={{ backgroundColor:"#fff" }}>
                    <div className='row'>
                       <div className='col-12'>
                         <div className='row py-3'>
                           <div style={{ display:"flex", justifyContent:"", alignItems:"center" }}>
                             <button type='button' onClick={() => navigate(-1)} className='btn border-0' style={{ height:30, display:"flex", justifyContent:"center", alignItems:"center" }} ><ImArrowLeft2 style={{ fontSize:24 }} /></button>
                             <span className='text-start' style={{ fontWeight:600, fontSize:25, paddingLeft:15  }}>My Courses</span>
                           </div>
                         </div>
                       </div>
                     </div>
                     <div className='col-6'>
                        <div className='py-3' onClick={()=> setState("EnrollPreRecord")} style={{ borderBottom:state=="EnrollPreRecord"?"2px solid #ED7A2B":"none", width:"100%", backgroundColor:"#fff", cursor:"pointer", display:"flex", justifyContent:"center", alignItems:"center" }} >
                            <span style={{ color:state=="EnrollPreRecord"?"#ED7A2B":"#545454", fontSize:20, fontWeight:600 }} >Pre-Recorded</span>
                        </div>
                     </div>
                     <div className='col-6'>
                        <div className='py-3' onClick={()=> setState("EnrollLiveClass")} style={{ borderBottom:state=="EnrollLiveClass"?"2px solid #ED7A2B":"none", width:"100%", backgroundColor:"#fff", cursor:"pointer", display:"flex", justifyContent:"center", alignItems:"center" }} >
                          <span style={{ color:state=="EnrollLiveClass"?"#ED7A2B":"#545454", fontSize:20, fontWeight:600 }} >Live Classes</span>
                        </div>
                     </div>
                   </div> 
                   { state === "EnrollPreRecord" ? <> <EnrollPreRecord /> </> : <></> }
                   { state === "EnrollLiveClass" ? <> <EnrollLiveClass /> </> : <></> }
                </div>
            </div> 
          </div>
         </div>
      </div>
    </div>
  )
}
