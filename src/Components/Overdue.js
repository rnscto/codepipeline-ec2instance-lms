import React, { useEffect, useState } from 'react';
import { Fees } from "./SvgIcon";
import { AiTwotoneCalendar } from "react-icons/ai";
import { NavLink } from 'react-router-dom';

export default function Overdue() {

  const [payment, setPayment] = useState([]);
  
  const data = [
    {
      amount : 19867,
      duedate : "19 April 2023",
      course : "BCA Second Semester Fees",
    },
    {
      amount : 19867,
      duedate : "19 April 2023",
      course : "BCA Second Semester Fees",
    },
    {
      amount : 19867,
      duedate : "19 April 2023",
      course : "BCA Second Semester Fees",
    },
    {
      amount : 19867,
      duedate : "19 April 2023",
      course : "BCA Second Semester Fees",
    },
    {
      amount : 19867,
      duedate : "19 April 2023",
      course : "BCA Second Semester Fees",
    },
    {
      amount : 19867,
      duedate : "19 April 2023",
      course : "BCA Second Semester Fees",
    },
    {
      amount : 19867,
      duedate : "19 April 2023",
      course : "BCA Second Semester Fees",
    },
    {
      amount : 19867,
      duedate : "19 April 2023",
      course : "BCA Second Semester Fees",
    },
  ]

  useEffect(()=>{
    setPayment(data);
  })

  return (
    <div>
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
             {
               payment.map((item,index)=>{
                 return (
                    <>
                     <div key={index} className='card mt-3 p-3 border-0'>
                       <div className='' style={{ display:"flex", alignItems:'center', justifyContent:"space-between" }} >
                         <p style={{ color:"#858585", fontSize:18, fontWeight:400 }}>Amount</p>
                         <p className='px-2' style={{ color:"#FF0E0E", fontSize:16, fontWeight:400, backgroundColor:"#FFE1E1", borderRadius:5 }} >Unpaid</p>
                       </div>
                       <div className='text-start m-0' style={{ color:"#545454", fontSize:26, fontWeight:600 }} >₹ {item.amount}</div>
                        <div className='d-flex align-items-center' >
                           <AiTwotoneCalendar className='sub-assi-txt' style={{ fontSize:24, color:"#858585" }} />
                           <div className='sub-assi-txt ps-2' style={{ fontSize:16, fontWeight:400, color:"#858585" }} >Due Date : {item.duedate}</div>
                        </div>
                        <div className='py-2 d-flex align-items-center' >
                           <Fees className='sub-assi-txt' style={{ fontSize:24, color:"#FF0E0E" }} />
                           <div className='sub-assi-txt ps-3' style={{ fontSize:16, fontWeight:400, color:"#FF0E0E" }} >{item.course}</div>
                        </div>
                        <div className='row mt-2'>
                           <NavLink to="/PaymentDetail" className="text-decoration-none col-6">
                             <button type='button' className='btn btn-outline py-3' style={{ width:"100%", border:'1px solid #ED7A2B', color:"#ED7A2B", borderRadius:5 }} >View Details</button>
                           </NavLink>
                           <NavLink to="/PayNow" className="text-decoration-none col-6">
                             <button type='button' className='btn py-3' style={{ width:"100%", color:"#fff", backgroundColor:"#ED7A2B", borderRadius:5 }} >Pay Now</button>
                           </NavLink>
                        </div>
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
