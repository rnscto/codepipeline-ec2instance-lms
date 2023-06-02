import React, { useEffect, useState } from 'react';
import Cardimg from '../images/cardimg.png';
import { GiDuration } from 'react-icons/gi';
import { NavLink } from 'react-router-dom';

export default function LiveClasses() {

    const[Live, setLive] = useState([]);

    const recordsData = [
        {
            name : "Complete NDA Crash Course",
            duration : "12 Months",
            disprice : "19,999",
            price : "19,999"
        },
        {
            name : "Complete NDA Crash Course",
            duration : "12 Months",
            disprice : "19,999",
            price : "19,999"
        },
        {
            name : "Complete NDA Crash Course",
            duration : "12 Months",
            disprice : "19,999",
            price : "19,999"
        },
        {
            name : "Complete NDA Crash Course",
            duration : "12 Months",
            disprice : "19,999",
            price : "19,999"
        },
        {
            name : "Complete NDA Crash Course",
            duration : "12 Months",
            disprice : "19,999",
            price : "19,999"
        },
    ] 

    useEffect(()=>{
        setLive(recordsData);
    })

  return (
    <div>
      <div classNameName='container-fluid'>
        <div classNameName='row'>
          <div className='col-12 mb-5 px-3'>
            {
              Live.map((item,index)=>{
                  return(
                    <div key={index} className='row'>
                      <div className='col-12 m-auto mt-2'>
                       <div className="card bg-white rounded-4 border-0" style={{padding:"8px"}} >
                        <img src={Cardimg} className="card-img-top" alt="..." style={{ borderRadius:10 }} />
                        <div className="card-body">
                          <div className='text-start' style={{ fontSize:20, fontWeight:600, color:'#1E1E1E' }} >{item.name}</div>
                          <div className='py-1' style={{ display:"flex", alignItems:"center" }} >
                            <GiDuration style={{ fontSize:20, color:"#858585" }} />
                            <div className='ps-2' style={{ fontSize:18, fontWeight:600, color:"#858585" }} >{item.duration}</div>
                          </div>
                          <div style={{ display:'flex', alignItems:'center' }} >
                           <div className='' style={{ fontSize:15, fontWeight:500, color:"#1E1E1E" }} >Price :</div>
                           <div className='text-decoration-line-through' style={{ fontSize:15, fontWeight:500, color:"#1E1E1E" }} > ₹ {item.disprice}</div>
                           <div className='' style={{ fontSize:15, fontWeight:500, color:"#1E1E1E" }} >&nbsp; ₹ {item.price}</div>
                          </div>
                          <NavLink to="/LiveCourseDetail" className="text-decoration-none" >
                           <div className='Coursr-btn p-2 mt-2 text-white' >View Detail</div>
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
