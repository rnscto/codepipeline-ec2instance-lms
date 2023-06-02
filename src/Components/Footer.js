import React from 'react';
import MyImg from '../images/myimage.jpg';
import { FiHome } from 'react-icons/fi';
import { MdOutlineMenuBook } from 'react-icons/md';
import { IoMdCard } from 'react-icons/io';
import { NavLink, useLocation } from 'react-router-dom';

export default function Footer() {
  return (
    <div>
      <div className='container-fluid fixed-bottom'>
        <div className='row'>
          <div className='p-0' style={{ width:"100%", height:70, backgroundColor:"#fff", display:"flex", justifyContent:"space-between",  }}>
            <div className='mx-2' style={{ width:"100%", backgroundColor:'#fff', justifyContent:"center", alignItems:'center', display:"flex", borderTop:"2px solid #ED7A2B", color:'#ED7A2B' }}>
              <NavLink to='/Home' className="text-decoration-none text-dark" >
               <div style={{  }}>
                 <FiHome style={{ fontSize:25 }} />
                 <div>Home</div>
               </div>
              </NavLink>
            </div>
            <div className='mx-2' style={{ width:"100%", backgroundColor:'#fff', justifyContent:"center", alignItems:'center', display:"flex", cursor:"pointer" }}>
             <NavLink to='/Course' className="text-decoration-none text-dark">
              <div>
                <MdOutlineMenuBook style={{ fontSize:25 }} />
                <div>Courses</div>
              </div>
             </NavLink>
            </div>
            <div className='mx-2' style={{ width:"100%", backgroundColor:'#fff', justifyContent:"center", alignItems:'center', display:"flex" }}>
              <NavLink to="/Payment" className="text-decoration-none text-dark" >
               <div>
                <IoMdCard style={{ fontSize:25 }}/>
                <div>Paymetns</div>
               </div>
              </NavLink>
            </div>
            <div className='mx-2' style={{ width:"100%", backgroundColor:'#fff', justifyContent:"center", alignItems:'center', display:"flex" }}>
            <NavLink to="/Profile" className="text-decoration-none" >
              <div className='text-center'>
                <div className='ps-2' style={{ width:38, height:30, borderRadius:50 }} >
                  <img src={MyImg} className='' style={{ width:"100%", height:"100%", borderRadius:50 }}/>
                 </div>
                <div className='text-center' style={{ color:"#000" }} >Profile</div>
              </div>
            </NavLink>
            </div>
          </div>
        </div>
      </div>    
    </div>
  )
}
