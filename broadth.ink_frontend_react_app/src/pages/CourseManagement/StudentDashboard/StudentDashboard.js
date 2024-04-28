//import { useEffect } from "react";
import Card from "../../../components/Common/Card";
import './StudentDashboard'; 
import SideNavBar from "../../../components/Common/SideNavBar"; 
import { useState } from "react";
import { useEffect } from "react";

function StudentDashboard() {
	const [classes, setClasses] = useState([]); 

	const addClasses = () => {
		fetch('http://127.0.0.1:5000/get-enrolled', {
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
		setClasses(cards); 
	}

	useEffect(() => { 
		console.log("page loading");
		addClasses(); 
	}, []);

	// const options = classes.map(item => {
    //     return (
    //         <div class="indiv">
    //             <Card Course={item.course_name} description={item.short_description}></Card>
    //         </div>
    //     )
    // }) 
	
	return (
		<div className = 'StudentDashboard'>
			<div className='NavBar'>
				<SideNavBar></SideNavBar>
			</div> 
			<div className = 'Courses'> 
			{classes}
			</div>
			
			
		</div>
	);
	}

export default StudentDashboard;