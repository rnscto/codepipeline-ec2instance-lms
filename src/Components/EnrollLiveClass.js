import React, { useEffect, useState } from 'react';
import Cardimg from '../images/cardimg.png';
import { NavLink } from 'react-router-dom';


export default function EnrollLiveClass() {

    const[preRecord, setPreRecord] = useState([]);

    const recordsData = [
        {
            name : "Complete NDA Crash Course",
        },
        {
            name : "Complete NDA Crash Course",
        },
        {
            name : "Complete NDA Crash Course",
        },
        {
            name : "Complete NDA Crash Course",
        },
        {
            name : "Complete NDA Crash Course",
        },
        {
            name : "Complete NDA Crash Course",
        },
        {
            name : "Complete NDA Crash Course",
        },
        {
            name : "Complete NDA Crash",
        },
    ] 

    useEffect(()=>{
        setPreRecord(recordsData);
    })

  return (
    <div>
      <div classNameName='container-fluid'>
        <div classNameName='row'>
          <div className='col-12 px-3'>
            {
                preRecord.map((item,index)=>{
                    return(
                      <div key={index} className='row'>
                        <div className='col-12 m-auto mt-2'>
                         <div className="card bg-white rounded-4 border-0" style={{padding:"8px"}} >
                          <img src={Cardimg} className="card-img-top" alt="..." style={{ borderRadius:10 }} />
                          <div className="card-body">
                            <div className='text-start' style={{ fontSize:20, fontWeight:600, color:'#1E1E1E' }} >{item.name}</div>
                            <NavLink to="/CourseHistory" className="text-decoration-none"  >
                             <div className='p-2 mt-2' style={{ width:"100%", backgroundColor:"#fff", border:"1px solid #ED7A2B", borderRadius:5, color:"#ED7A2B", fontSize:18, fontWeight:600 }} >Go To Course</div>
                            </NavLink>
                          </div>
                         </div>
                        </div>
                      </div>
                    )
                })
            }
          </div>
        </div>
      </div> 
    </div>
  )
}
