//import { useEffect } from "react";
import Card from "../../../components/Common/Card";
import './StudentPage.css'; 
import Button from '@mui/material/Button';


function StudentPage() {
	// const [certificates, setCertificates] = useState([]); 
	// useEffect(() =>  {
	// 	getCertificates(); 

	// 	return () => {

	// 	};
	// }, []); 

	// const getCertificates = async () => {

	// }

	
	return (
		<div className = 'StudentCertificatePage'>
			<div className='NavBar'>
				
				<p> Nav Bar Holder Place</p>
			</div> 
		
			<div className = 'Certifiacates'>
				<Card></Card>
				<Card></Card>
				<Card></Card>
				<Button>Google Sign In Button</Button>
			</div>
		</div>
	);
	}

export default StudentPage;
