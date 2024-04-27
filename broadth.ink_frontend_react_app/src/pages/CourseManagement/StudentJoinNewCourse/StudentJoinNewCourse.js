//import { useEffect } from "react";
import Card from "../../../components/Common/Card";
import './StudentJoinNewCourse'; 
import SideNavBar from "../../../components/Common/SideNavBar"; 


function StudentCertificatePage() {
	
	return (
		<div className = 'StudentCertificatePage'>
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

export default StudentCertificatePage;
