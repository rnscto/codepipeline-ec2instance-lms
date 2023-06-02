import React, { useEffect, useState } from 'react';
import { AiTwotoneCalendar } from 'react-icons/ai';
import { CiClock2 } from 'react-icons/ci';
import { SiGoogleclassroom } from 'react-icons/si';
import { MdChevronRight } from 'react-icons/md';
import { MdOutlineQuiz } from 'react-icons/md';
import { MdOutlineAssignment } from 'react-icons/md';
import { NavLink } from 'react-router-dom';

export default function Upcoming() {

    const [upcoming, setUpcoming] = useState([]);

    const upcomingData = [
        {
            name : "How to emit arrays in C++...",
            stime : "12:34",
            etime : '14:30',
            date : '12 April 2023'
        },
        {
            name : "How to emit arrays in C++...",
            stime : "12:34",
            etime : '14:30',
            date : '12 April 2023'
        },
        {
            name : "How to emit arrays in C++...",
            stime : "12:34",
            etime : '14:30',
            date : '12 April 2023'
        },
        {
            name : "How to emit arrays in C++...",
            stime : "12:34",
            etime : '14:30',
            date : '12 April 2023'
        },
        {
            name : "How to emit arrays in C++...",
            stime : "12:34",
            etime : '14:30',
            date : '12 April 2023'
        },
        {
            name : "How to emit arrays in C++...",
            stime : "12:34",
            etime : '14:30',
            date : '12 April 2023'
        },
        {
            name : "How to emit arrays in C++...",
            stime : "12:34",
            etime : '14:30',
            date : '12 April 2023'
        },
        {
            name : "How to emit arrays in C++...",
            stime : "12:34",
            etime : '14:30',
            date : '12 April 2023'
        },
    ]

    useEffect(()=>{
        setUpcoming(upcomingData);
    })

  return (
    <div>
      <div className='row px-3'>
        <div className='col-12'>
          {
            upcoming.map((item,index)=>{
                return(
                  <>
                   <NavLink to="/JoinLiveClass" className="text-decoration-none" style={{color:"#545454"}} >
                    <div key={index} className='card p-3 border-0 rounded-3 bg-white mb-3'>
                     <div className='row d-flex justify-content-between align-items-center'>
                      <div className='col-10'>
                       <h5 className='text-start' >{item.name}</h5>
                        <div className='' style={{ width:'100%', display:'flex', justifyContent:"space-between", alignItems:'center' }} >
                         <div className='d-flex align-items-center' >
                            <AiTwotoneCalendar style={{ fontSize:25, color:"#545454" }} />
                            <div style={{ fontSize:16, fontWeight:600, color:"#545454" }} >{item.date}</div>
                         </div>
                         <div className='d-flex align-items-center' >
                            <CiClock2 style={{ fontSize:25, color:"#545454" }} />
                            <div style={{ fontSize:16, fontWeight:600, color:"#545454" }} >{item.stime} - {item.etime}</div>
                         </div>
                      </div>
                      </div>
                      <div className='col-2 text-end'>
                       <MdChevronRight className='' style={{ fontSize:30 }} />
                      </div>
                     </div>
                    </div>
                   </NavLink>
                  </>
                )
            })
          }
        </div>  
      </div>
      <div className='row px-5 py-3 fixed-bottom' style={{ backgroundColor:'#ffffff80',  }} >
       <div className='p-0' style={{  width:'100%', height:70, display:"flex", justifyContent:"space-between", backgroundColor:"#fff", borderRadius:10 }} >
        <div className='mx-4' style={{ width:"100%", backgroundColor:'#fff', justifyContent:"center", alignItems:'center', display:"flex", borderTop:"2px solid #ED7A2B", color:'#ED7A2B' }}>
          <NavLink to='/Home' className="text-decoration-none text-dark" >
           <div style={{  }}>
             <SiGoogleclassroom style={{ fontSize:25, color:"#B4B4B4" }} />
             <div style={{ color:"#B4B4B4", fontSize:14 }} >Classes</div>
           </div>
         </NavLink>
         </div>
        <div className='mx-4' style={{ width:"100%", backgroundColor:'#fff', justifyContent:"center", alignItems:'center', display:"flex", borderTop:"2px solid #ED7A2B", color:'#ED7A2B' }}>
          <NavLink to='/Quizzes' className="text-decoration-none text-dark" >
           <div style={{  }}>
             <MdOutlineQuiz style={{ fontSize:25, color:"#B4B4B4" }} />
             <div style={{ color:"#B4B4B4", fontSize:14  }} >Quizzes</div>
           </div>
         </NavLink>
         </div>
        <div className='mx-4' style={{ width:"100%", backgroundColor:'#fff', justifyContent:"center", alignItems:'center', display:"flex", borderTop:"2px solid #ED7A2B", color:'#ED7A2B' }}>
          <NavLink to='/Assignment' className="text-decoration-none text-dark" >
           <div style={{  }}>
             <MdOutlineAssignment style={{ fontSize:25, color:"#B4B4B4" }} />
             <div style={{ color:"#B4B4B4", fontSize:14  }} >Assignments</div>
           </div>
         </NavLink>
         </div>
        </div>
      </div>
    </div>
  )
}
