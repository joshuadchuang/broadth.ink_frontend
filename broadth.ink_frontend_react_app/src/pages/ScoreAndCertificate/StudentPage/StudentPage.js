//import { useEffect } from "react";
import Card from "../../../components/Common/Card";
import './StudentPage.css'; 
import SideNavBar from "../../../components/Common/SideNavBar"; 


function StudentPage() {
	
	return (
		<div className = 'StudentCertificatePage'>
			<div className='NavBar'>
				<SideNavBar></SideNavBar>
			</div> 
			<div className = 'Certificates'> 
		    <Card></Card>
			<Card></Card>
			<Card></Card>
			</div>
			
			
		</div>
	);
	}

export default StudentPage;
