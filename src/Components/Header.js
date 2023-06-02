import React,{ useState } from 'react';
import Logo from '../images/logo.png';
import MyImg from '../images/myimage.jpg';
import { MdOutlineMenuBook, MdQuestionMark } from 'react-icons/md';
import { BsFillBellFill } from 'react-icons/bs';
import { CgNotes } from 'react-icons/cg';
import { IoMdCard } from 'react-icons/io';
import { RxQuestionMarkCircled } from 'react-icons/rx';
import { NavLink, useLocation } from 'react-router-dom';
import Offcanvas from 'react-bootstrap/Offcanvas';

export default function Header() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
       <nav className="navbar bg-light fixed-top py-4">
         <div className="container-fluid">
           <button onClick={handleShow} className="navbar-toggler border-0 shadow-none" type="button" >
            <svg width="28" height="24" viewBox="0 0 28 24" fill="none" xmlns="http://www.w3.org/2000/svg">
             <path d="M20 21V24H3.5V21H20ZM27.5 10.5V13.5H0.5V10.5H27.5ZM24.5 0V3H8V0H24.5Z" fill="black"/>
            </svg>
           </button>
           <img src={Logo} className='' style={{ width:"30%" }} />
           <BsFillBellFill style={{ fontSize:30, color:"#545454" }} />
         </div>
       </nav>
       <Offcanvas show={show} onHide={handleClose} style={{width:"70%"}} >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title></Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
           <div>
             <div className="offcanvas-body text-start">
                <div className='row g-0 d-flex align-items-center justify-content-between'>
                  <div className='col-4' style={{ }}>
                    <div style={{  borderRadius:50 }} >
                     <img src={MyImg} className='img-header' style={{ width:"100%", height:"100%", borderRadius:50 }} />
                    </div>
                  </div>
                  <div className='col-8 text-start ps-2' style={{ }}>
                    <div className='homelive-txt' style={{ fontSize:20, fontWeight:600, color:"#545454"}}>Yogesh Jangid</div>
                    <div className='sub-name-txt' style={{ fontSize:16, fontWeight:500, color:"#ED7A2B"}}>View Profile</div>
                  </div>
                </div>
               <ul className="navbar-nav justify-content-end flex-grow-1 pe-3 mt-5">
                <NavLink to='/Course' className="text-decoration-none" >
                <li className="nav-item mb-4">
                   <div style={{ width:"100%", display:"flex", alignItems:"center" }} >
                     <MdOutlineMenuBook className='assi-nav-txt' style={{ fontSize:30, color:"#545454" }} />
                     <div className="nav-link active ps-3 assi-nav-txt" style={{ fontSize:20, color:"#545454", fontWeight:400 }} >My Courses</div>
                   </div>
                 </li>
                </NavLink>
                 <NavLink to="/MyExam" className="text-decoration-none" >
                 <li className="nav-item mb-4">
                   <div style={{ width:"100%", display:"flex", alignItems:"center" }} >
                     <CgNotes className='assi-nav-txt' style={{ fontSize:25, color:"#545454" }} />
                     <div className="nav-link active ps-3 assi-nav-txt" style={{ fontSize:20, color:"#545454", fontWeight:400 }} >My Exams</div>
                   </div>
                 </li>
                 </NavLink>
                 <NavLink to="/AskAbout" className='text-decoration-none' >
                 <li className="nav-item mb-4">
                   <div style={{ width:"100%", display:"flex", alignItems:"center" }} >
                     <MdQuestionMark className='assi-nav-txt' style={{ fontSize:30, color:"#545454" }} />
                     <div className="nav-link active ps-3 assi-nav-txt" style={{ fontSize:20, color:"#545454", fontWeight:400 }} >Ask Doubt</div>
                   </div>
                 </li>
                 </NavLink>
                 <NavLink to="/Payment" className="text-decoration-none" >
                 <li className="nav-item mb-4">
                   <div style={{ width:"100%", display:"flex", alignItems:"center" }} >
                     <IoMdCard className='assi-nav-txt' style={{ fontSize:30, color:"#545454" }} />
                     <div className="nav-link active ps-3 assi-nav-txt" style={{ fontSize:20, color:"#545454", fontWeight:400 }} >Paymetns</div>
                   </div>
                 </li>
                 </NavLink>
                 <NavLink to="/StudyMaterials" className="text-decoration-none" >
                 <li className="nav-item mb-4">
                   <div style={{ width:"100%", display:"flex", alignItems:"center" }} >
                     <IoMdCard className='assi-nav-txt' style={{ fontSize:30, color:"#545454" }} />
                     <div className="nav-link active ps-3 assi-nav-txt" style={{ fontSize:20, color:"#545454", fontWeight:400 }} >Study Material</div>
                   </div>
                 </li>
                 </NavLink>
                 <li className="nav-item mb-5">
                   <div style={{ width:"100%", display:"flex", alignItems:"center" }} >
                     <RxQuestionMarkCircled className='assi-nav-txt' style={{ fontSize:30, color:"#545454" }} />
                     <div className="nav-link active ps-3 assi-nav-txt" style={{ fontSize:20, color:"#545454", fontWeight:400 }} >Complaints</div>
                   </div>
                 </li>
               </ul>
               <div className='log-btn p-3 text-white text-center' >Login</div>
             </div>
           </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}
