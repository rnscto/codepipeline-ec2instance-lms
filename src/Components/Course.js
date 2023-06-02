import React, { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import PreRecorded from './PreRecorded';
import LiveClasses from './LiveClasses';

export default function Course() {

    const[state, setState] = useState("")

    // useEffect(()=>{
    //     setState("PreRecorded");
    // })

  return (
    <div>
      <div className='container-fluid g-0' style={{overflowX:"hidden"}}>
        <Header />
         <div className='' style={{ marginBottom:"100px" }}>
          <div classNameName='p-0' style={{ width:"100%", marginTop:"80px" }} >
            <div className='row'>
                <div className='col-md-12 P-0'>
                   <div className='row' style={{ backgroundColor:"#fff" }}>
                     <div className='col-6'>
                        <div className='py-3' onClick={()=> setState("PreRecorded")} style={{ borderBottom:state=="PreRecorded"?"2px solid #ED7A2B":"none", width:"100%", backgroundColor:"#fff", cursor:"pointer", display:"flex", justifyContent:"center", alignItems:"center" }} >
                            <span style={{ color:state=="PreRecorded"?"#ED7A2B":"#545454", fontSize:20, fontWeight:600 }} >Pre-Recorded</span>
                        </div>
                     </div>
                     <div className='col-6'>
                        <div className='py-3' onClick={()=> setState("LiveClasses")} style={{ borderBottom:state=="LiveClasses"?"2px solid #ED7A2B":"none", width:"100%", backgroundColor:"#fff", cursor:"pointer", display:"flex", justifyContent:"center", alignItems:"center" }} >
                          <span style={{ color:state=="LiveClasses"?"#ED7A2B":"#545454", fontSize:20, fontWeight:600 }} >Live Classes</span>
                        </div>
                     </div>
                   </div> 
                   <div className=''>
                     { state === "PreRecorded" ? <> <PreRecorded /> </> : <></> }
                     { state === "LiveClasses" ? <> <LiveClasses /> </> : <></> }
                   </div>
                </div>
            </div> 
           </div>
         </div>
        <Footer />
      </div>
    </div>
  )
}
