import React, { useEffect, useState } from 'react';
import { AiTwotoneCalendar } from 'react-icons/ai';
import { CiClock2 } from 'react-icons/ci';
import { MdChevronRight } from 'react-icons/md';
import { NavLink, useNavigate } from 'react-router-dom';

export default function UpcomingExam() {

    const [exam, setExam] = useState([]);

    const examData = [
        {
            name : "How to emit arrays in C++...",
            date : "12 April 2023",
            stime : "12:34",
            etime : "14:30",
            course : "B.C.A Specialization in Data Analytics"
        },
        {
            name : "How to emit arrays in C++...",
            date : "12 April 2023",
            stime : "12:34",
            etime : "14:30",
            course : "B.C.A Specialization in Data Analytics"
        },
        {
            name : "How to emit arrays in C++...",
            date : "12 April 2023",
            stime : "12:34",
            etime : "14:30",
            course : "B.C.A Specialization in Data Analytics"
        },
        {
            name : "How to emit arrays in C++...",
            date : "12 April 2023",
            stime : "12:34",
            etime : "14:30",
            course : "B.C.A Specialization in Data Analytics"
        },
        {
            name : "How to emit arrays in C++...",
            date : "12 April 2023",
            stime : "12:34",
            etime : "14:30",
            course : "B.C.A Specialization in Data Analytics"
        },
        {
            name : "How to emit arrays in C++...",
            date : "12 April 2023",
            stime : "12:34",
            etime : "14:30",
            course : "B.C.A Specialization in Data Analytics"
        },
        {
            name : "How to emit arrays in C++...",
            date : "12 April 2023",
            stime : "12:34",
            etime : "14:30",
            course : "B.C.A Specialization in Data Analytics"
        },
    ]

    useEffect(()=>{
        setExam(examData);
    })

  return (
    <div>
       <div className='container'>
         <div className='row'>
            <div className='col-12 mt-3'>
              {
                exam.map((item,index)=>{
                    return(
                       <>
                        <div key={index} className='card p-3 border-0 mb-3 '>
                         <div className='row d-flex justify-content-between align-items-center'>
                           <div className='col-10'>
                             <h5 className='text-start homelive-txt' >{item.name}</h5>
                              <div className='' style={{ width:'100%', display:'flex', justifyContent:"space-between", alignItems:'center' }} >
                               <div className='d-flex align-items-center' >
                                  <AiTwotoneCalendar className='sub-assi-txt' style={{ fontSize:25, color:"#545454" }} />
                                  <div className='sub-assi-txt' style={{ fontSize:16, fontWeight:600, color:"#545454" }} >{item.date}</div>
                               </div>
                               <div className='d-flex align-items-center' >
                                  <CiClock2 className='sub-assi-txt' style={{ fontSize:25, color:"#545454" }} />
                                  <div className='sub-assi-txt' style={{ fontSize:16, fontWeight:600, color:"#545454" }} >{item.stime} - {item.etime}</div>
                               </div>
                            </div>
                            </div>
                            <div className='col-2'>
                             <MdChevronRight className='text-end' style={{ fontSize:30 }} />
                            </div>
                           </div> 
                          <div className='sub-assi-txt pt-3 text-start' style={{ fontSize:14, fontWeight:400, color:"#545454" }} >Course : {item.course}</div>
                          <NavLink to="/ExamDetail" className="text-decoration-none mt-3">
                            <button type='button' className='btn btn-outline' style={{ width:"100%", border:'1px solid #ED7A2B', color:"#ED7A2B", borderRadius:5 }} >View Detail</button>
                          </NavLink>
                        </div>
                       </>
                    )
                })
              }
            </div>
         </div>
       </div>
    </div>
  )
}
