//import { useEffect } from "react";
import Card from "../../../components/Common/Card";
import './StudentUserCertificates.css'; 
import SideNavBar from "../../../components/Common/SideNavBar"; 
import React, { useState, useEffect } from 'react';



function StudentCerficatePage() {
	const [cards, setCards] = useState([]); 

	const createCertificate = () => {
		fetch('http://127.0.0.1:5000/student-certificates', {
			method: 'GET',
			headers: {
				Accept: 'application.json', 
				'Content-Type' : 'application/json'
			},

		})
		.then(response => response.json())
		.then(data => {
			console.log(data)
			updateBlock(data)

		})
		.catch(error => { 
			console.log('Error: ', error)
		})
	}

	function updateBlock(blockData) { 
		const cards = blockData.map(data => (
			<Card 
				courseName={data.course_name} 
				tags={["Python", "Javascript"]} 
				score={data.course_grade} 
				description={data.short_description}
			/>
		));
		setCards(cards); 
	}
	

	useEffect(() => { 
		console.log("page loading");
		createCertificate(); 
	}, []);
	 
	return (
		<div className = 'StudentCertificatePage'>
			<div className='NavBar'>
				<SideNavBar></SideNavBar>
			</div> 
			<div className = 'Certificates'> 
				{cards}
			</div>
			
			
		</div>
	);
}

export default StudentCerficatePage;
