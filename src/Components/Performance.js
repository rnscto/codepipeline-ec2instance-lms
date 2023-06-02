import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { NavLink } from 'react-router-dom';

export default function Performance() {

    const value = 70;
    const value2 = 40;

  return (
    <div>
      <div className='container-fluid'>
        <div className='row'>
         <div className='col-12 m-auto'>
          <div className='card p-3 border-0'>
            <p className='text-center' style={{ fontSize:20, fontWeight:600, color:"#2E2E2E" }} >Courses Status</p>
             <div className='row'>
               <div className='col-5 m-auto'>
                <div style={{ }}>
                 <CircularProgressbar value={value} text={`${value}`} />
                </div>
               </div>
             </div>
             <div className='row mt-3'>
                <NavLink to="/EnrollCourse" className="col-4 ms-auto p-2 d-flex align-items-center justify-content-center text-decoration-none" style={{backgroundColor:"#F0F5FE", borderRadius:10}} >
                   <div className='' style={{ width:25, height:25, backgroundColor:"#F5B807", borderRadius:5 }} > </div> 
                   <div className='ps-2 sub-name-txt' style={{ color:"#2E2E2E", fontSize:14, fontWeight:500 }} >Ongoing</div> 
                </NavLink>
                <div className='col-2'></div>
                <NavLink to="/EnrollCourse" className="col-4 me-auto p-2 d-flex align-items-center justify-content-center text-decoration-none" style={{}} >
                  <div className='' style={{ width:25, height:25, backgroundColor:"#0CBC8B", borderRadius:5 }} > </div> 
                  <div className='ps-2 sub-name-txt' style={{ color:"#2E2E2E", fontSize:14, fontWeight:500 }} >Completed</div> 
                </NavLink>
             </div>
           </div> 
         </div>
        </div>   
        <div className='row mt-3'>
         <div className='col-12 m-auto'>
          <div className='card p-3 border-0'>
            <p className='text-center' style={{ fontSize:20, fontWeight:600, color:"#2E2E2E" }} >Quizzes</p>
             <div className='row'>
               <div className='col-5 m-auto'>
                <div style={{ }}>
                 <CircularProgressbar value={value2} text={`${value2}`} />
                </div>
               </div>
             </div>
             <div className='row mt-3'>
                <div className='col-4 m-auto p-2 d-flex align-items-center justify-content-center' style={{backgroundColor:"#F0F5FE", borderRadius:10}} >
                  <div className='' style={{ width:25, height:25, backgroundColor:"#F5B807", borderRadius:5 }} > </div> 
                  <div className='ps-2 sub-name-txt' style={{ color:"#2E2E2E", fontSize:14, fontWeight:500 }} >Attempted</div> 
                </div>
                <div className='col-4 m-auto p-2 d-flex align-items-center justify-content-center' style={{}} >
                  <div className='' style={{ width:25, height:25, backgroundColor:"#0CBC8B", borderRadius:5 }} > </div> 
                  <div className='ps-2 sub-name-txt' style={{ color:"#2E2E2E", fontSize:14, fontWeight:500 }} >pass</div> 
                </div>
                <div className='col-4 m-auto p-2 d-flex align-items-center justify-content-center' style={{}} >
                  <div className='' style={{ width:25, height:25, backgroundColor:"#FF0E0E", borderRadius:5 }} > </div> 
                  <div className='ps-2 sub-name-txt' style={{ color:"#2E2E2E", fontSize:14, fontWeight:500 }} >Failed</div> 
                </div>
             </div>
           </div> 
         </div>
        </div>   
      </div> 
    </div>
  )
}
