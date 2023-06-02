import React, { useEffect, useState } from 'react';
import { Document } from './SvgIcon';
import MyImg from '../images/myimage.jpg';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { ImArrowLeft2 } from 'react-icons/im';
import { AiTwotoneCalendar } from 'react-icons/ai';
import { CiClock2 } from 'react-icons/ci';
import { FiUpload } from 'react-icons/fi';
import { NavLink, useNavigate } from 'react-router-dom';

export default function AssignmemtDeclared() {

    const [attachment, setAttachment] = useState([]);
    const [myattachment, setMyattachment] = useState([]);
    const [state, setState] = useState (0)

    const data = [
        {
            name : "assignmenta one.pdf"
        },
        {
            name : "assignmenta two.pdf"
        },
        {
            name : "assignmenta three.pdf"
        },
        {
            name : "assignmenta four.pdf"
        },
        {
            name : "assignmenta five.pdf"
        },
    ]
    
    const myattachmentdata = [
        {
            name : "assignmenta one.pdf"
        },
        {
            name : "assignmenta two.pdf"
        },
        {
            name : "assignmenta three.pdf"
        },
        {
            name : "assignmenta four.pdf"
        },
        {
            name : "assignmenta five.pdf"
        },
    ]

    useEffect(()=>{
        setAttachment(data);
        setMyattachment(myattachmentdata);
    })

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
                  <span className='text-start assi-nav-txt' style={{ fontWeight:600, fontSize:20, paddingLeft:10  }}>Complete NDA Crash Course</span>
                </div>
              </div>
            </div> 
          </div>
        </div>
        <div className='row m-3'>
          <div className='col-12 text-start assi-nav-txt' style={{ fontSize:24, fontWeight:600, }} >Assignments</div>
          <p className='col-12 text-start pt-2 assi-nav-txt' style={{ fontSize:22, fontWeight:600, }} >How to emit arrays in C++ using van kapler’s method</p>
           <div className='row'>
             <div className='col-10' style={{ display:'flex', justifyContent:"space-between", alignItems:'center' }}>
              <div className='d-flex align-items-center' >
                 <AiTwotoneCalendar className='sub-assi-txt' style={{ fontSize:25, color:"#545454" }} />
                 <div className='sub-assi-txt' style={{ fontSize:16, fontWeight:600, color:"#545454" }} >12 April 2023</div>
              </div>
              <div className='d-flex align-items-center' >
                 <CiClock2 className='sub-assi-txt' style={{ fontSize:25, color:"#545454" }} />
                 <div className='sub-assi-txt' style={{ fontSize:16, fontWeight:600, color:"#545454" }} >12:34 - 14:30</div>
              </div>
             </div>
           </div>
          <p className='col-12 text-start py-2' style={{ fontSize:16, fontWeight:400, color:'#9098A8' }} >Instructor</p>
          <div className='row'>
            <div className='col-8' style={{ border:'1px solid #9098A8', borderRadius:40 }} >
               <div className='row p-2 d-flex align-items-center'>
                 <div className='col-2 p-0' style={{ borderRadius:50 }} >
                  <img src={MyImg} className='' style={{ width:"100%", height:"100%", borderRadius:50 }}/>
                 </div>
                 <div className='col-10 ms-auto sub-name-txt' style={{ display:"flex", alignItems:"center", color:"#545454", fontSize:16 }}>
                    Swati Khandelwal
                 </div>
               </div>
            </div>
          </div>
        </div>
      </div>
      <div className='row mt-4 mx-3 p-0'>
        <div className='text-start p-0 assi-nav-txt' style={{ fontSize:24, fontWeight:400, color:"#545454" }} >Attachments</div>
          <div class="scrollmenu">
            {
                attachment.map((item,index)=>{
                    return(
                        <div key={index} class="scroll-div card mx-2 border-0">{item.name}</div>
                    )
                })
            }
         </div>
      </div>
      <div className='row mt-4 mx-3 p-0'>
        <div className='text-start p-0 assi-nav-txt' style={{ fontSize:24, fontWeight:400, color:"#545454" }} >My Attachments</div>
          <div class="scrollmenu">
            {
                myattachment.map((item,index)=>{
                    return(
                        <div key={index} class="scroll-div card mx-2 border-0">{item.name}<RiDeleteBin6Line className='ms-2' style={{ color:"#FF0E0E" }} /></div>
                    )
                })
            }
         </div>
      </div>
      <div className='row px-3 mt-4'>
        {
            state === 1 ? (<div className='col-5 text-start assi-declr-txt' style={{ fontSize:20, fontWeight:600, color:"#545454" }} >Result : <span className='assi-declr-txt' style={{ fontSize:20, fontWeight:600, color:"#0CBC8B" }}>-</span>/50</div>)
            : (<div className='col-5 text-start assi-declr-txt' style={{ fontSize:20, fontWeight:600, color:"#545454" }} >Result : <span className='assi-declr-txt' style={{ fontSize:20, fontWeight:600, color:"#0CBC8B" }}>35</span>/50</div>)
        }
        <div className='col-5 ms-auto assi-declr-txt'>
            {
                state === 1 ? (<div className='p-1' style={{ color:"#858585", fontSize:13, fontWeight:500, backgroundColor:"#EBEBEB", borderRadius:5 }} >Result : Not Declared</div>)
                : (<div className='p-1' style={{ color:"#0CBC8B", fontSize:13, fontWeight:500, backgroundColor:"#E1FFEF", borderRadius:5 }} >Result : pass</div>)
            }
        </div>
      </div>
    </div>
  )
}
