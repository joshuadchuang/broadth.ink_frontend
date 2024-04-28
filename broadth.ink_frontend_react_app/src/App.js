import logo from "./logo.svg";
import HomePage from './pages/MarketPage/MarketPage';
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Switch} from "react-router-dom";
import Dem from './pages/UserRegistration/DemographicForm/DemographicForm';
import Nav from './components/Common/SideNavBar';


import ActionAreaCard from "./components/Common/Card.js";
import Button from "./components/Common/Button.js";
import DemographicForm from "./pages/UserRegistration/DemographicForm/DemographicForm";
import StudentPage from "./pages/ScoreAndCertificate/StudentUserCertificates/StudentUserCertificates"; 
import StudentDashboard from './pages/CourseManagement/StudentDashboard/StudentDashboard'; 
import StudentJoinNewCourse from './pages/CourseManagement/StudentJoinNewCourse/StudentJoinNewCourse'; 
import StudentCertificates from './pages/ScoreAndCertificate/StudentUserCertificates/StudentUserCertificates'; 


function App() {
	return (
		<Routes>
		<Route path="/" element={<HomePage />} />
		<Route path="/demographics" element={<Dem />} />
		<Route path="/nav" element={<Nav />} />
		<Route path="/Courses" element={<StudentDashboard />} />
		<Route path="/Join New" element={<StudentJoinNewCourse />} />
		<Route path="/Certificates" element={<StudentCertificates />} />
	  	</Routes>
		
	);
}

export default App;
