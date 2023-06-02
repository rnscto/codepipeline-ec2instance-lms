import React, { useState, useEffect } from 'react';
import { GiDuration } from 'react-icons/gi'
import { NavLink, useNavigate } from 'react-router-dom';
import { ImArrowLeft2 } from 'react-icons/im';
import { MdOutlineQuiz } from 'react-icons/md';

export default function Agree() {

    const [state, setState] = useState("");
    const [subject, setSubject] = useState([]);
    const [rule, setRule] = useState ([]); 

    const subData = [
      {
        name : "Logical Reasoning",
      },
      {
        name : "Mental Ability",
      },
      {
        name : "Current Affairs",
      },
      {
        name : "Basic Mathematics",
      },
    ]

    const ruleList = [
      {
        rlist : 'Arrange for stable inernet connectivity. Giving examination on Laptop or Desktop is highly recommended'
      },
      {
        rlist : 'Make sure mobile/laptop is fully charged'
      },
      {
        rlist : 'Make sure mobile/laptop is fully charged'
      },
      {
        rlist : 'Make sure mobile/laptop is fully charged'
      },
      {
        rlist : 'Make sure mobile/laptop is fully charged'
      },
      {
        rlist : 'Make sure mobile/laptop is fully charged'
      },
      {
        rlist : 'Make sure mobile/laptop is fully charged'
      },
      {
        rlist : 'Make sure mobile/laptop is fully charged'
      },
      {
        rlist : 'Make sure mobile/laptop is fully charged'
      },
      {
        rlist : 'Make sure mobile/laptop is fully charged'
      },
      {
        rlist : 'Make sure mobile/laptop is fully charged'
      },
      {
        rlist : 'Make sure mobile/laptop is fully charged'
      },
      {
        rlist : 'Make sure mobile/laptop is fully charged'
      },
      {
        rlist : 'Make sure mobile/laptop is fully charged'
      },
    ]

    useEffect(()=>{
      setSubject(subData);
      setRule(ruleList);
    })

    const navigate = useNavigate();

  return (
    <div>
      <div className='container-fluid g-0' style={{overflowX:"hidden"}}>
          <div className='' style={{ marginBottom:"60px", width:"100%", marginTop:"84px" }} >
           <div className='row py-3 fixed-top' style={{ backgroundColor:"#fff", alignItems:"center" }}>
               <div className='col-12'>
                 <div className='row d-flex align-items-center'>
                   <div className='col-2' style={{  display:"flex", alignItems:"center", justifyContent:"center" }} >
                    <button type='button' onClick={() => navigate(-1)} className='btn border-0' style={{ height:30, display:"flex", justifyContent:"center", alignItems:"center" }} ><ImArrowLeft2 style={{ fontSize:24 }} /></button>
                   </div>
                   <div className='col-10'>
                     <div style={{  display:"flex", alignItems:"center", justifyContent:"flex-start" }}>
                      <div className='text-start agre-txt-fold' style={{ fontWeight:600, fontSize:18, paddingLeft:0  }}>Complete NDA Crash Course</div>
                     </div>
                     <div className='row'>
                      <div className='col-10'>
                         <div className='row d-flex align-items-center justify-content-start'>
                          <div className='col-6 ms-auto text-start'><GiDuration style={{ fontSize:14, color:"#858585" }} /><span className='ps-1' style={{ fontSize:10, color:"#858585" }}>12:30 Mins</span></div>
                          <div className='col-6 m-auto text-start'><MdOutlineQuiz style={{ fontSize:14, color:"#858585" }} /><span className='ps-1' style={{ fontSize:10, color:"#858585" }}>Practice Quiz</span></div>
                        </div>
                      </div>
                     </div>
                   </div>
                 </div>
               </div>
             </div>
           </div> 
          </div>
           <div className=''>
           <div className='py-2 text-start px-3 ruletxt' style={{ backgroundColor:"#F0F5FE", fontSize:24, fontWeight:600, color:"#2E2E2E" }} >Rules of Quiz</div>
             <div className='p-3' >
               <p className='text-start' style={{ fontSize:15, fontWeigth:600, color:"#2E2E2E" }} >Number of Questions : 65</p>
               <p className='text-start' style={{ fontSize:15, fontWeigth:600, color:"#2E2E2E" }} >Time for Each Question : 60 Sec</p>
               <p className='text-start' style={{ fontSize:15, fontWeigth:600, color:"#2E2E2E" }} >Minimum Passing Percentage : 70%</p>
               <p className='text-start' style={{ fontSize:20, fontWeigth:600, color:"#2E2E2E" }} >Subjects</p>
                <ul class="list-group text-start bg-transparent">
                  {
                    subject.map((item,index)=>{
                      return(
                        <li key={index} class="list-group-item border-0 bg-transparent d-flex align-items-center"><div style={{ width:6, height:6, backgroundColor:"#2E2E2E", borderRadius:10 }} ></div><span className='ps-2' style={{ color:'#2E2E2E', fontSize:12 }} >{item.name}</span></li>
                      )
                    })
                  }
                </ul>
                <p className='pt-3 text-start' style={{ fontSize:20, fontWeigth:600, color:"#2E2E2E" }} >General Rules of Participation</p>
                <ul class="list-group text-start bg-transparent">
                  {
                    rule.map((item,index)=>{
                      return(
                        <li key={index} class="list-group-item border-0 bg-transparent d-flex align-items-center"><div style={{ width:6, height:6, backgroundColor:"#2E2E2E", borderRadius:10 }} ></div><span className='ps-2' style={{ color:'#2E2E2E', fontSize:12 }} >{item.rlist}</span></li>
                      )
                    })
                  }
                </ul>
             </div>
           </div>
          <div className='row fixed-bottom'>
            <NavLink to='/Cycle' className="text-decoration-none" >
              <div style={{ width:"100%", height:80, backgroundColor:"#ED7A2B", display:"flex", justifyContent:"center", alignItems:"center", color:'#fff', fontSize:18, fontWeight:600, cursor:"pointer" }}>Agree & Enter</div>
            </NavLink>
          </div>
        </div>
  )
}
