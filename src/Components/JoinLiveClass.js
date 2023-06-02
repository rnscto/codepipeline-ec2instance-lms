import React from 'react';
import { VideoPlayer } from './SvgIcon';
import MyImg from '../images/myimage.jpg';
import Book from '../images/MedicalBook.png';
import { ImArrowLeft2 } from 'react-icons/im';
import { AiTwotoneCalendar } from 'react-icons/ai';
import { CiClock2 } from 'react-icons/ci';
import { NavLink, useNavigate } from 'react-router-dom';

export default function JoinLiveClass() {

    const navigate = useNavigate();

  return (
    <div>
      <div className='container-fluid p-0' style={{overflowX:"hidden"}}>
        <div className='row'>
          <div className='col-md-12'>
            <div className='card py-2 rounded-0 border-0'>
             <div className='row py-3'>
                <div style={{ display:"flex", justifyContent:"", alignItems:"center" }}>
                  <button type='button' onClick={() => navigate(-1)} className='btn border-0' style={{ height:30, display:"flex", justifyContent:"center", alignItems:"center" }} ><ImArrowLeft2 style={{ fontSize:20 }} /></button>
                  <span className='text-start' style={{ fontWeight:600, fontSize:20, paddingLeft:10  }}>Complete NDA Crash Course</span>
                </div>
              </div>
            </div> 
          </div>
        </div>
        <div className='row m-3'>
          <div className='col-12 text-start' style={{ fontSize:24, fontWeight:600, }} >Live Classes</div>
          <p className='col-12 text-start pt-2' style={{ fontSize:22, fontWeight:600, }} >How to emit arrays in C++ using van kapler’s method</p>
           <div className='row'>
             <div className='col-10' style={{ display:'flex', justifyContent:"space-between", alignItems:'center' }}>
              <div className='d-flex align-items-center' >
                 <AiTwotoneCalendar style={{ fontSize:25, color:"#545454" }} />
                 <div style={{ fontSize:16, fontWeight:600, color:"#545454" }} >12 April 2023</div>
              </div>
              <div className='d-flex align-items-center' >
                 <CiClock2 style={{ fontSize:25, color:"#545454" }} />
                 <div style={{ fontSize:16, fontWeight:600, color:"#545454" }} >12:34 - 14:30</div>
              </div>
             </div>
           </div>
          <p className='col-12 text-start py-2' style={{ fontSize:16, fontWeight:400, color:'#9098A8' }} >Instructor</p>
          <div className='row'>
            <div className='col-8' style={{ border:'1px solid #9098A8', borderRadius:40 }} >
               <div className='row p-2 d-flex align-items-center'>
                 <div className='col-2 p-0' style={{ borderRadius:50 }} >
                  <img src={MyImg} className='' style={{ width:"100%", height:"100%", borderRadius:50 }}/>
                 </div>
                 <div className='col-10 ms-auto' style={{ display:"flex", alignItems:"center", color:"#545454", fontSize:16 }}>
                    Swati Khandelwal
                 </div>
               </div>
            </div>
          </div>
        </div>
      </div>
      <div className='row mt-4 mx-3 p-0'>
       <div className='text-start p-0' style={{ fontSize:24, fontWeight:400, color:"#545454" }} >Study Material</div>
        <div className='card border-0 py-3' style={{}} >
          <div className='row d-flex align-items-center'>
           <div className='col-6'>
            <img src={Book} className='' style={{ width:"100%", height:"100%" }}/>
           </div>
           <div className='col-6 text-start'>
              <div style={{ fontSize:22, fontWeight:600, color:'#545454' }} >View Study Material</div> 
              <div className='p-2' style={{ width:"100%", backgroundColor:"#FFE1E1", display:"flex", alignItems:'center', justifyContent:"center", color:"#FF0E0E", borderRadius:5, cursor:"pointer" }} >View Now</div>
           </div>
          </div>
        </div>
      </div>
      <div className='row mx-3 mt-5'>
      <div className='py-4' style={{ width:"100%", backgroundColor:"#ED7A2B", borderRadius:5, display:"flex", alignItems:'center', justifyContent:"center", cursor:"pointer", color:"#fff", fontSize:20 }} ><VideoPlayer />&nbsp; Join Live Class</div>
      </div>
    </div>
  )
}
