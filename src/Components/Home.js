import React from 'react';
import Header from './Header';
import Footer from './Footer';
import slider1 from '../images/image1.png';
import slider2 from '../images/image2.png';
import slider3 from '../images/image3.png';
import { MdChevronRight } from 'react-icons/md';
import { AiTwotoneCalendar } from 'react-icons/ai';
import { CiClock2 } from 'react-icons/ci';
import { FaPlay } from 'react-icons/fa';
import { MdOutlineMenuBook } from 'react-icons/md';
import { GiTrophyCup } from 'react-icons/gi';
import MyImg from '../images/myimage.jpg';
import { NavLink, useLocation } from 'react-router-dom';


export default function Home() {
  return (
    <>
      <div classNameName='container-fluid' style={{overflowX:"hidden"}}>
        <Header />
        {/* <div className='bar-option'> */}
          <div className='' style={{}}>
           <div classNameName='p-0' style={{ width:"100%", marginTop:"82px", marginBottom:"90px" }} >
             <div classNameName='' style={{  }}>
               <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" style={{overflow:"hidden"}}>
               <div className="carousel-inner p-0">
                 <div className="carousel-item active">
                   <img src={slider1} className="d-block" alt="..." style={{ width:"100%" }} />
                 </div>
                 <div className="carousel-item">
                   <img src={slider2} className="d-block" alt="..." style={{ width:"100%" }} />
                 </div>
                 <div className="carousel-item">
                   <img src={slider3} className="d-block" alt="..." style={{ width:"100%" }} />
                 </div>
               </div>
              </div>
            </div>
            <div className='row p-3'>
              <div className='col-6'>
              <NavLink to='/Course' className="text-decoration-none text-dark">
                 <div className='card p-3 border-0 rounded-3 bg-white'>
                  <div className='' style={{ display:'flex', justifyContent:"space-between", alignItems:"center" }} >
                    <h2 className='m-0' style={{ color:"#ED7A2B" }} >36</h2>
                    <MdChevronRight className='text-end' style={{ fontSize:20 }} />
                  </div>
                  <div className='text-start p-0' style={{ fontSize:10, fontWeight:"bold" }} >Total Courses</div>
                </div> 
              </NavLink> 
              </div>
              <div className='col-6'>
              <NavLink to='/EnrollCourse' className="text-decoration-none text-dark" >
               <div className='card p-3 border-0 rounded-3 bg-white'>
                  <div className='' style={{ display:'flex', justifyContent:"space-between", alignItems:"center" }} >
                    <h2 className='m-0' style={{ color:"#5895CD" }} >12</h2>
                    <MdChevronRight className='text-end' style={{ fontSize:20 }} />
                  </div>
                  <div className='text-start p-0' style={{ fontSize:10, fontWeight:"bold" }} >Enrolled Courses</div>
                </div> 
              </NavLink> 
              </div>
            </div>
            <div className='row px-4'>
              <div className='text-start' style={{ fontSize:18, color:"#1E1E1E", fontWeight:500 }} >Live Classes</div>
              <div className='col-12'>
                <div className='card p-4 border-0 rounded-3 bg-white'>
                 <div className='row d-flex justify-content-between align-items-center'>
                  <div className='col-10'>
                   <h5 className='text-start homelive-txt' >How to emit arrays in C++...</h5>
                    <div className='' style={{ width:'100%', display:'flex', justifyContent:"space-between", alignItems:'center' }} >
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
                  <div className='col-2'>
                   <MdChevronRight className='text-end' style={{ fontSize:30 }} />
                  </div>
                  </div>
                </div>
              </div>  
            </div>
            <div className='row p-4'>
            <div className='text-start' style={{ fontSize:18, color:"#1E1E1E", fontWeight:500 }} >Pre Recorded Courses</div>
              <div className='col-12'>
               <NavLink to="/DownloadedCourse" className="text-decoration-none text-dark" >
                <div className='card p-1 border-0'>
                  <div className='row d-flex align-items-center'>
                     <div className='col-4'>
                       <img src={MyImg} className='' style={{ width:"100%", borderRadius:10 }} /> 
                     </div>  
                     <div className='col-8 my-2'>
                       <div className='d-flex justify-content-evently align-items-center' >
                          <FaPlay />
                          <div className='ps-2 homelive-txt text-start' style={{ fontSize:18, fontWeight:600 }}  >Error handling using...</div>
                       </div>
                       <div className='my-1' style={{ width:"100%", height:5, backgroundColor:"#F1F1F1" }} >
                        <div className='' style={{ width:"80%", height:5, backgroundColor:"#26D88D" }} ></div>
                       </div>
                       <div className='d-flex justify-content-evently align-items-center' >
                          <MdOutlineMenuBook className='homelive-txt' style={{ fontSize:25, color:"#858585" }} />
                          <div className='ps-2 homelive-txt' style={{ fontSize:18, fontWeight:400, color:"#858585" }}>Programming in C++</div>
                       </div>
                     </div>
                  </div>
                </div>
               </NavLink>
              </div>  
            </div>
            <div className='row px-4'>
             <div className='text-start' style={{ fontSize:18, color:"#1E1E1E", fontWeight:500 }} >Upcoming Quizzes</div> 
              <div className='col-12'>
                <div className='card p-3 border-0'>
                 <div className='text-start py-2 homelive-txt' style={{ fontSize:20, fontWeight:600 }}>Array in C++</div>
                  <div className='' style={{ width:'100%', display:'flex', justifyContent:"start", alignItems:'center' }} >
                     <div className='d-flex align-items-center' >
                        <AiTwotoneCalendar className='sub-assi-txt' style={{ fontSize:25, color:"#858585" }} />
                        <div className='sub-assi-txt' style={{ fontSize:16, fontWeight:600, color:"#858585" }} >12 April 2023</div>
                     </div>
                     <div className='d-flex align-items-center ps-4' >
                        <CiClock2 className='sub-assi-txt' style={{ fontSize:25, color:"#858585" }} />
                        <div className='sub-assi-txt' style={{ fontSize:16, fontWeight:600, color:"#858585" }} >12:34 - 14:30</div>
                     </div>
                  </div>
                  <div className='d-flex justify-content-evently align-items-center py-1' >
                     <MdOutlineMenuBook className='homelive-txt' style={{ fontSize:25, color:"#858585" }} />
                     <div className='ps-2 homelive-txt' style={{ fontSize:18, fontWeight:400, color:"#858585" }}>Programming in C++</div>
                  </div>
                  <div className='d-flex justify-content-evently align-items-center py-1' >
                     <GiTrophyCup className='homelive-txt' style={{ fontSize:22, color:"#ED7A2B" }} />
                     <div className='ps-2 homelive-txt' style={{ fontSize:18, fontWeight:400, color:"#ED7A2B" }}>70%</div>
                  </div>
                  <div className='mb-3 mt-2' style={{ width:"100%", height:8, backgroundColor:"#F1F1F1" }} >
                    <div className='' style={{ width:"70%", height:8, backgroundColor:"#ED7A2B" }} ></div>
                  </div>
                  <NavLink to="/Agree" className="text-decoration-none">
                    <button type='button' className='btn btn-outline' style={{ width:"100%", border:'1px solid #ED7A2B', color:"#ED7A2B", borderRadius:5 }} >Participate Now</button>
                  </NavLink>
                </div>
              </div> 
             </div>
            <div className='row p-4'>
             <div className='text-start' style={{ fontSize:18, color:"#1E1E1E", fontWeight:500 }} >Upcoming Exams</div> 
              <div className='col-12'>
                <div className='card p-3 border-0'>
                 <div className='text-start py-2 homelive-txt' style={{ fontSize:20, fontWeight:600 }}>Array in C++</div>
                  <div className='' style={{ width:'100%', display:'flex', justifyContent:"start", alignItems:'center' }} >
                     <div className='d-flex align-items-center' >
                        <AiTwotoneCalendar className='sub-assi-txt' style={{ fontSize:25, color:"#858585" }} />
                        <div className='sub-assi-txt' style={{ fontSize:16, fontWeight:600, color:"#858585" }} >12 April 2023</div>
                     </div>
                     <div className='d-flex align-items-center ps-4' >
                        <CiClock2 className='sub-assi-txt' style={{ fontSize:25, color:"#858585" }} />
                        <div className='sub-assi-txt' style={{ fontSize:16, fontWeight:600, color:"#858585" }} >12:34 - 14:30</div>
                     </div>
                  </div>
                  <div className='d-flex justify-content-evently align-items-center py-1 mb-2' >
                     <MdOutlineMenuBook className='homelive-txt' style={{ fontSize:25, color:"#858585" }} />
                     <div className='ps-2 homelive-txt' style={{ fontSize:18, fontWeight:400, color:"#858585" }}>Programming in C++</div>
                  </div>
                  <NavLink to="/ExamDetail" className="text-decoration-none" >
                    <button type='button' className='btn btn-outline' style={{ width:"100%", border:'1px solid #ED7A2B', color:"#ED7A2B", borderRadius:5 }} >Know More</button>
                  </NavLink>
                </div>
              </div> 
             </div>
            <div className='row px-4'>
             <div className='text-start' style={{ fontSize:18, color:"#1E1E1E", fontWeight:500 }} >Assignments</div> 
              <div className='col-12'>
                <div className='card p-3 border-0'>
                 <div className='text-start py-2 homelive-txt' style={{ fontSize:20, fontWeight:600 }}>Nostalgic Environmental</div>
                  <div className='' style={{ width:'100%', display:'flex', justifyContent:"start", alignItems:'center' }} >
                     <div className='d-flex align-items-center' >
                        <AiTwotoneCalendar className='sub-assi-txt' style={{ fontSize:25, color:"#858585" }} />
                        <div className='sub-assi-txt' style={{ fontSize:16, fontWeight:600, color:"#858585" }} >12 April 2023</div>
                     </div>
                     <div className='d-flex align-items-center ps-4' >
                        <CiClock2 className='sub-assi-txt' style={{ fontSize:25, color:"#858585" }} />
                        <div className='sub-assi-txt' style={{ fontSize:16, fontWeight:600, color:"#858585" }} >12:34 - 14:30</div>
                     </div>
                  </div>
                  <div className='d-flex justify-content-evently align-items-center py-1 mb-2' >
                     <MdOutlineMenuBook className='homelive-txt' style={{ fontSize:25, color:"#858585" }} />
                     <div className='ps-2 homelive-txt' style={{ fontSize:18, fontWeight:400, color:"#858585" }}>Programming in C++</div>
                  </div>
                  <NavLink to="/SubmitAssignments" className="text-decoration-none" >
                    <button type='button' className='btn btn-outline' style={{ width:"100%", border:'1px solid #ED7A2B', color:"#ED7A2B", borderRadius:5 }} >Submit Assignments</button>
                  </NavLink>
                </div>
              </div> 
             </div>
           </div>
          </div>
         {/* </div>  */}
        <Footer />
      </div>
    </>
  )
}