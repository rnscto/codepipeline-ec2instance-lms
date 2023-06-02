import React, { useEffect, useState } from 'react';
import Cardimg from '../images/cardimg.png';
import { GiDuration } from 'react-icons/gi';
import { NavLink } from 'react-router-dom';

export default function EnrollPreRecord() {

    const[preRecord, setPreRecord] = useState([]);

    const recordsData = [
        {
            name : "Complete NDA Crash Course",
            width : 10,
        },
        {
            name : "Complete NDA Crash Course",
            width : 40,
        },
        {
            name : "Complete NDA Crash Course",
            width : 80,
        },
        {
            name : "Complete NDA Crash Course",
            width : 50,
        },
        {
            name : "Complete NDA Crash Course",
            width : 90,
        },
        {
            name : "Complete NDA Crash Course",
            width : 30,
        },
        {
            name : "Complete NDA Crash Course",
            width : 70,
        },
        {
            name : "Complete NDA Crash",
            width : 100,
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
                          <div className="py-1">
                            <div className='text-start' style={{ fontSize:20, fontWeight:600, color:'#1E1E1E' }} >{item.name}</div>
                            <NavLink to="/DownloadedCourse" className="text-decoration-none" >
                            <div className='p-2 mt-2' style={{ width:"100%", backgroundColor:"#fff", border:"1px solid #ED7A2B", borderRadius:5, color:"#ED7A2B", fontSize:18, fontWeight:600 }} >Go To Course</div>
                            </NavLink>
                          </div>
                          <div className='my-2' style={{ width:"100%", height:8, backgroundColor:"#F1F1F1" }} >
                           <div className='' style={{ width:item.width + "%", height:8, backgroundColor:"#26D88D" }} ></div>
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
