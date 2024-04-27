import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import HomePage from './pages/MarketPage/MarketPage';
import Nav from './components/Common/SideNavBar';
import Dem from './pages/UserRegistration/DemographicForm/DemographicForm';
import StudentCertificates from './pages/ScoreAndCertificate/StudentUserCertificates/StudentUserCertificates'; 
import StudentDashboard from './pages/CourseManagement/StudentDashboard/StudentDashboard'; 
import StudentJoinNewCourse from './pages/CourseManagement/StudentJoinNewCourse/StudentJoinNewCourse'; 

import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";

// const router = createBrowserRouter([
//   // {
//   //   path: "/",
//   //   element: <HomePage/>,
    
//   // },
//   {
//     path: "/student-dashboard",
//     element: <StudentDashboard />,
//   },
//   {
//     path: "/demographics",
//     element: <Dem />,
//   },
//   {
//     path: "/student-certificates",
//     element: <StudentCertificates />,
//   },
//   {
//     path: "/courses",
//     element: <Nav />,
//   },
// ]); 

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
    <App></App>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
