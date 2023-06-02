import React, { useEffect, useState } from 'react';
import { AiTwotoneCalendar } from 'react-icons/ai';
import { CiClock2 } from 'react-icons/ci';
import { SiGoogleclassroom } from 'react-icons/si';
import { MdOutlineQuiz } from 'react-icons/md';
import { MdOutlineAssignment } from 'react-icons/md';
import { MdOutlineMenuBook } from 'react-icons/md';
import { MdOutlineScoreboard } from 'react-icons/md';
import { NavLink } from 'react-router-dom';

export default function AssignmentHistory() {

    const [quizHistory, setQuizHistory] = useState([]);

    const quizData = [
        {
            name : "Nostalgic Environmental",
            date : "12 April 2023",
            stime : "12:34",
            etime : "14:30",
            topic : "Programming in C++",
            score : 60,
            total : 100
        },
        {
            name : "Array in C++",
            date : "12 April 2023",
            stime : "12:34",
            etime : "14:30",
            topic : "Programming in C++",
            score : 40,
            total : 100
        },
        {
            name : "Array in C++",
            date : "12 April 2023",
            stime : "12:34",
            etime : "14:30",
            topic : "Programming in C++",
            score : 80,
            total : 100
        },
        {
            name : "Array in C++",
            date : "12 April 2023",
            stime : "12:34",
            etime : "14:30",
            topic : "Programming in C++",
            score : 90,
            total : 100
        },
        {
            name : "Array in C++",
            date : "12 April 2023",
            stime : "12:34",
            etime : "14:30",
            topic : "Programming in C++",
            score : 50,
            total : 100
        },
    ]

    useEffect(()=>{
        setQuizHistory(quizData);
    })

 return (
    <div>
      <div className='row px-3'>
        <div className='col-12' style={{marginBottom:"70px"}}>
          {
            quizHistory.map((item,index)=>{
                return (
                    <>
                      <div key={index} className='row px-4'> 
                       <div className='col-12'>
                         <div className='card p-3 border-0 mb-3'>
                          <div className='text-start py-2' style={{ fontSize:20, fontWeight:600 }}>{item.name}</div>
                           <div className='' style={{ width:'100%', display:'flex', justifyContent:"start", alignItems:'center' }} >
                              <div className='d-flex align-items-center' >
                                 <AiTwotoneCalendar className='up-assi-txt' style={{ fontSize:25, color:"#858585" }} />
                                 <div className='up-assi-txt' style={{ fontSize:16, fontWeight:600, color:"#858585" }} >{item.date}</div>
                              </div>
                              <div className='d-flex align-items-center ps-4' >
                                 <CiClock2 className='up-assi-txt' style={{ fontSize:25, color:"#858585" }} />
                                 <div className='up-assi-txt' style={{ fontSize:16, fontWeight:600, color:"#858585" }} >{item.stime} - {item.etime}</div>
                              </div>
                           </div>
                           <div className='d-flex justify-content-evently align-items-center py-1' >
                              <MdOutlineMenuBook className='up-assi-txt' style={{ fontSize:25, color:"#858585" }} />
                              <div className='ps-2 up-assi-txt' style={{ fontSize:18, fontWeight:400, color:"#858585" }}>{item.topic}</div>
                           </div>
                           <div className='d-flex justify-content-evently align-items-center py-1' >
                              <MdOutlineScoreboard style={{ fontSize:24, color:"#7E7E7E" }} />
                              <div className='ps-2' style={{ fontSize:18, fontWeight:600, color:"#0CBC8B" }}>{item.score}<span style={{ fontSize:18, fontWeight:600, color:"#858585" }}> /{item.total}</span> </div>
                           </div>
                           <NavLink to="/AssignmentsResult" className="text-decoration-none mt-3"  >
                            <button type='button' className='btn btn-outline py-2' style={{ width:"100%", border:'1px solid #ED7A2B', color:"#ED7A2B", borderRadius:5 }} >View Result</button>
                           </NavLink>
                         </div>
                       </div> 
                      </div>
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

