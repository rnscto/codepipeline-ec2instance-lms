import React, { useEffect, useState } from 'react';
import { Fees } from "./SvgIcon";
import { AiTwotoneCalendar } from "react-icons/ai";
import { ImArrowLeft2 } from 'react-icons/im';
import { NavLink, useNavigate } from 'react-router-dom';

export default function PaymentDetail() {

  const navigate = useNavigate();

  return (
    <div>
      <div className='container-fluid p-0' style={{overflowX:"hidden", padding:"0px"}}>
        <div className='row'>
          <div className='col-md-12'>
            <div className='card py-2 rounded-0 border-0'>
             <div className='row py-3'>
                <div style={{ display:"flex", justifyContent:"", alignItems:"center" }}>
                  <button type='button' onClick={() => navigate(-1)} className='btn border-0' style={{ height:30, display:"flex", justifyContent:"center", alignItems:"center" }} ><ImArrowLeft2 style={{ fontSize:20 }} /></button>
                  <span className='text-start assi-nav-txt' style={{ fontWeight:600, fontSize:20, paddingLeft:10  }}>Payment Detail</span>
                </div>
              </div>
            </div> 
          </div>
        </div>
        <div className='row m-3'>
         <div className='' style={{ display:"flex", alignItems:'center', justifyContent:"space-between" }} >
            <p style={{ color:"#858585", fontSize:22, fontWeight:400 }}>Amount</p>
            <p className='px-2' style={{ color:"#FF0E0E", fontSize:16, fontWeight:400, backgroundColor:"#FFE1E1", borderRadius:5 }} >Unpaid</p>
          </div>
          <div className='text-start m-0' style={{ color:"#545454", fontSize:26, fontWeight:600 }} >₹ 19,867</div>
           <div className='d-flex align-items-center mt-2' >
             <AiTwotoneCalendar className='sub-assi-txt' style={{ fontSize:24, color:"#858585" }} />
             <div className='sub-assi-txt ps-2' style={{ fontSize:16, fontWeight:400, color:"#858585" }} >Due Date : 19 April 2023</div>
          </div>
          <div className='py-2 d-flex align-items-center mt-2' >
             <Fees className='sub-assi-txt' style={{ fontSize:24, color:"#858585" }} />
             <div className='sub-assi-txt ps-3' style={{ fontSize:16, fontWeight:400, color:"#858585" }} >BCA Second Semester Fees</div>
          </div>
          <p className='text-start mt-2' style={{ color:"#858585", fontSize:20, fontWeight:400 }}>Remark</p>
          <div className='text-start' style={{ color:"#545454", fontSize:20, fontWeight:500 }} >Fees to be paid before due date</div>
        </div>
        <div className='fixed-bottom' style={{ width:"100%", }} >
        <div className='row px-4 py-5 d-flex align-items-center'>
         <div className='col-12 m-auto'>
           <NavLink to='/PayNow' className="text-decoration-none" >
             <div className='log-btn p-4 text-white'>Pay Now</div>
           </NavLink>
         </div>
        </div> 
       </div>
      </div>
    </div>
  )
}
