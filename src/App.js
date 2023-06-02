import './App.css';
import Splash from './Components/Splash';
import Splash2 from './Components/Splash2';
import Login from './Components/Login';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Course from './Components/Course';
import PreRecorded from './Components/PreRecorded';
import LiveClasses from './Components/LiveClasses';
import EnrollCourse from './Components/EnrollCourse';
import EnrollPreRecord from './Components/EnrollPreRecord';
import EnrollLiveClass from './Components/EnrollLiveClass';
import CourseDetail from './Components/CourseDetail';
import BuyNow from './Components/BuyNow';
import PurchaseCourse from './Components/PurchaseCourse';
import DownloadedCourse from './Components/DownloadedCourse';
import CourseHistory from './Components/CourseHistory';
import JoinLiveClass from './Components/JoinLiveClass';
import WatchRecorded from './Components/WatchRecorded';
import Quizzes from './Components/Quizzes';
import Agree from './Components/Agree';
import Cycle from './Components/Cycle';
import Question from './Components/Question';
import Submit from './Components/Submit';
import ReviewAnswer from './Components/ReviewAnswer';
import WaitingResult from './Components/WaitingResult';
import Result from "./Components/Result";
import Assignment from './Components/Assignment';
import SubmitAssignments from './Components/SubmitAssignments';
import AssignmemtDeclared from './Components/AssignmemtDeclared';
import ScoreCard from './Components/ScoreCard';
import AssignmentsResult from './Components/AssignmentResult';
import LiveCourseDetail from './Components/LiveCourseDetail';
import BuyLiveCourse from './Components/BuyLiveCourse';
import ExamDetail from './Components/ExamDetail';
import MyExam from "./Components/MyExam";
import ExamHistory from './Components/ExamHistory';
import DetailExam from './Components/DetailExam';
import Payment from './Components/Payment';
import PaymentDetail from './Components/PaymentDetail';
import PayNow from './Components/PayNow';
import Profile from './Components/Profile';
import AskAbout from './Components/AskAbout';
import StudyMaterials from './Components/StudyMaterials';
import MaterialList from './Components/MaterialLIst';
import PdfList from './Components/PdfList';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Navigate to="/Login" replace />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Course" element={<Course />} />
          <Route path="/EnrollCourse" element={<EnrollCourse />} />
          <Route path="/CourseDetail" element={<CourseDetail />} />
          <Route path="/BuyNow" element={<BuyNow />} />
          <Route path="/PurchaseCourse" element={<PurchaseCourse />} />
          <Route path="/DownloadedCourse" element={<DownloadedCourse />} />
          <Route path="/CourseHistory" element={<CourseHistory />} />
          <Route path="/JoinLiveClass" element={<JoinLiveClass />} />
          <Route path="/WatchRecorded" element={<WatchRecorded />} />
          <Route path="/Quizzes" element={<Quizzes />} />
          <Route path="/Agree" element={<Agree />} />
          <Route path="/Cycle" element={<Cycle />} />
          <Route path="/Question" element={<Question />} />
          <Route path="/Submit" element={<Submit />} />
          <Route path="/ReviewAnswer" element={<ReviewAnswer />} />
          <Route path="/WaitingResult" element={<WaitingResult />} />
          <Route path="/Result" element={<Result />} />
          <Route path="/Assignment" element={<Assignment />} />
          <Route path="/SubmitAssignments" element={<SubmitAssignments />} />
          <Route path="/AssignmemtDeclared" element={<AssignmemtDeclared />} />
          <Route path="/ScoreCard" element={<ScoreCard />} />
          <Route path="/AssignmentsResult" element={<AssignmentsResult />} />
          <Route path="/LiveCourseDetail" element={<LiveCourseDetail />} />
          <Route path="/BuyLiveCourse" element={<BuyLiveCourse />} />
          <Route path="/ExamDetail" element={<ExamDetail />} />
          <Route path="/MyExam" element={<MyExam />} />
          <Route path="/ExamHistory" element={<ExamHistory />} />
          <Route path="/DetailExam" element={<DetailExam />} />
          <Route path="/Payment" element={<Payment />} />
          <Route path="/PaymentDetail" element={<PaymentDetail />} />
          <Route path="/PayNow" element={<PayNow />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/AskAbout" element={<AskAbout />} />
          <Route path="/StudyMaterials" element={<StudyMaterials />} />
          <Route path="/MaterialList" element={<MaterialList />} />
          <Route path='/PdfList' element={<PdfList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
