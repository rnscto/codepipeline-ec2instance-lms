import React, { useEffect, useState } from 'react';
import { Fees } from "./SvgIcon";
import { AiTwotoneCalendar } from "react-icons/ai";
import { FiDownload } from "react-icons/fi";
import { NavLink } from 'react-router-dom';

export default function PaymentHistory() {

  const [payment, setPayment] = useState([]);
  
  const data = [
    {
      amount : 19867,
      duedate : "19 April 2023",
      course : "BCA Second Semester Fees",
      paydate : "19 April 2023"
    },
    {
      amount : 19867,
      duedate : "19 April 2023",
      course : "BCA Second Semester Fees",
      paydate : "19 April 2023"
    },
    {
      amount : 19867,
      duedate : "19 April 2023",
      course : "BCA Second Semester Fees",
      paydate : "19 April 2023"
    },
    {
      amount : 19867,
      duedate : "19 April 2023",
      course : "BCA Second Semester Fees",
      paydate : "19 April 2023"
    },
    {
      amount : 19867,
      duedate : "19 April 2023",
      course : "BCA Second Semester Fees",
      paydate : "19 April 2023"
    },
    {
      amount : 19867,
      duedate : "19 April 2023",
      course : "BCA Second Semester Fees",
      paydate : "19 April 2023"
    },
    {
      amount : 19867,
      duedate : "19 April 2023",
      course : "BCA Second Semester Fees",
      paydate : "19 April 2023"
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
                         <p className='px-2' style={{ color:"#0CBC8B", fontSize:14, fontWeight:400, backgroundColor:"#E1FFEF", borderRadius:5 }} >Paid : {item.paydate}</p>
                       </div>
                       <div className='text-start m-0' style={{ color:"#545454", fontSize:26, fontWeight:600 }} >₹ {item.amount}</div>
                        <div className='d-flex align-items-center' >
                           <AiTwotoneCalendar className='sub-assi-txt' style={{ fontSize:24, color:"#858585" }} />
                           <div className='sub-assi-txt ps-2' style={{ fontSize:16, fontWeight:400, color:"#858585" }} >Due Date : {item.duedate}</div>
                        </div>
                        <div className='py-2 d-flex align-items-center' >
                           <Fees className='sub-assi-txt' style={{ fontSize:24, color:"#858585" }} />
                           <div className='sub-assi-txt ps-3' style={{ fontSize:16, fontWeight:400, color:"#858585" }} >{item.course}</div>
                        </div>
                        <div className='row mt-2'>
                             <button type='button' className='btn btn-outline py-3' style={{ width:"100%", border:'1px solid #ED7A2B', color:"#ED7A2B", borderRadius:5, display:"flex", alignItems:"center", justifyContent:'center' }} ><FiDownload style={{ fontSize:22 }} />&nbsp;Download Receipt</button>
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
