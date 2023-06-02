import React, { useEffect, useState } from 'react';
import { ImArrowLeft2 } from 'react-icons/im';
import { AiTwotoneCalendar } from 'react-icons/ai';
import { CiClock2 } from 'react-icons/ci';
import { NavLink, useNavigate } from 'react-router-dom';

export default function DetailExam() {

    const navigate = useNavigate();

    const [subject, setSubject] = useState([]);

    const subData = [
        {
          name : "Fundamentals of C++",
        },
        {
          name : "Basic of Computer",
        },
        {
          name : "New Era programming",
        },
        {
          name : "Operating System",
        },
        {
          name : "Data Analytics",
        },
      ]

    useEffect(()=>{
        setSubject(subData); 
    })

  return (
    <div>
      <div className='container-fluid p-0' style={{overflowX:"hidden"}}>
      <div classNameName='p-0' style={{ width:"100%", marginTop:"40px", marginBottom:"90px" }} >
        <div className='row fixed-top'>
          <div className='col-md-12'>
            <div className='card py-2 px-3 rounded-0 border-0'>
             <div className='row py-3'>
                <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center" }}>
                  <button type='button' onClick={() => navigate(-1)} className='btn border-0' style={{ height:30, display:"flex", justifyContent:"center", alignItems:"center" }} ><ImArrowLeft2 style={{ fontSize:20 }} /></button>
                  <span className='assi-nav-txt text-start' style={{ fontWeight:600, fontSize:20, paddingLeft:10  }}>Exam Details</span>
                  <div className='assi-nav-txt px-3 p-1' style={{ fontSize:14, fontWeight:400, color:"#0CBC8B", backgroundColor:"#E1FFEF", borderRadius:5 }}>Result : Pass</div>
                </div>
              </div>
            </div> 
          </div>
        </div>
        </div>
       <div className='bar-option pb-5'>
        <div className='row p-4'>
         <div className='col-12'>
          <div className='text-start' style={{ fontSize:18, color:"#545454", fontWeight:400 }} >Name of Exam</div>
          <div className='text-start pt-2 assi-nav-txt' style={{ fontSize:22, fontWeight:600, color:'#1E1E1E' }} >How to emit arrays in C++using van capler’s Method</div>
           <div className='pt-4' style={{ width:'100%', display:'flex', justifyContent:"start", alignItems:'center' }} >
             <div className='d-flex align-items-center' >
                <AiTwotoneCalendar className='sub-assi-txt' style={{ fontSize:24, color:"#545454" }} />
                <div className='sub-assi-txt' style={{ fontSize:16, fontWeight:600, color:"#545454" }} >12 April 2023</div>
             </div>
             <div className='d-flex align-items-center ps-4' >
                <CiClock2 className='sub-assi-txt' style={{ fontSize:24, color:"#545454" }} />
                <div className='sub-assi-txt' style={{ fontSize:16, fontWeight:600, color:"#545454" }} >12:34 - 14:30</div>
             </div>
          </div>
          <div className='sub-assi-txt pt-3 text-start' style={{ fontSize:18, fontWeight:500, color:"#545454" }} >Course : B.C.A Specialization in Data Analytics</div>
         </div> 
        </div>
        <div className='row px-4 mb-5' >
        <div className='text-start' style={{ fontSize:18, color:"#545454", fontWeight:400 }} >Subjects</div>
         <ul class="list-group text-start bg-transparent">
           {
             subject.map((item,index)=>{
               return( 
                 <li key={index} class="list-group-item border-0 bg-transparent d-flex align-items-center assi-nav-txt" style={{ fontSize:20, fontWeight:600 }} >{(index+1)}. {item.name}</li>
               )
             })
           }
         </ul>
       </div>
       <div className='row px-4'>
        <div className='col-12'>
          <div className='card px-3'>
           <div className='row mt-3'>
             <div className='col-5 text-start'>
               <div className='sub-name-txt' style={{ fontSize:16, fontWeight:400, color:"#7E7E7E" }}>Total Marks</div>
               <div className="text-start" style={{ color:"#1E1E1E", fontSize:20, fontWeight:600 }}>10</div>
             </div>
             <div className='col-4 text-start'>
               <div className='sub-name-txt' style={{ fontSize:16, fontWeight:400, color:"#7E7E7E" }}>My Result</div>
               <div className="" style={{ color:"#26C497", fontSize:20, fontWeight:600 }}>45</div>
             </div>
            </div>
            <div className="text-start" style={{ color:"#1E1E1E", fontSize:20, fontWeight:600 }}>Instructor’s Note</div>
            <div className="text-start" style={{ color:"#7E7E7E", fontSize:14, fontWeight:400 }}>Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit.</div>
          </div> 
        </div>
       </div>
      </div>
     </div> 
    </div>
  )
}


