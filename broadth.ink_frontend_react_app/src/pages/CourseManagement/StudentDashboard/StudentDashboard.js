//import { useEffect } from "react";
import Card from "../../../components/Common/Card";
import './StudentDashboard'; 
import SideNavBar from "../../../components/Common/SideNavBar"; 


function StudentDashboard() {
	
	return (
		<div className = 'StudentDashboard'>
			<div className='NavBar'>
				<SideNavBar></SideNavBar>
			</div> 
			<div className = 'Courses'> 
		    <Card></Card>
			<Card></Card>
			<Card></Card>
			</div>
			
			
		</div>
	);
	}

export default StudentDashboard;