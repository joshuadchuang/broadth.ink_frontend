import React, { useState } from 'react';
import CustomButton from '../../../components/Common/Button.js';

const formContainerStyle = {
    background: '#FFFFFF', // Background color for the form
    borderRadius: '8px', // Eccentricity of the corners
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Box shadow for the form
    padding: '40px',
    maxWidth: '60%',
    marginTop: '20px',
    margin: '40px auto',
    fontFamily: '"Noto Sans", sans-serif',
};

const titleStyle = {
    textAlign: 'center', 
    fontWeight: 'bold', 
    fontSize: '60px',
    color: '#333', 
    marginBottom: '20px',
};

const labelStyle = {
    color: '#686868', 
    marginBottom: '7px',
    textAlign: 'left',
    display: 'block',
    fontFamily: '"Noto Sans", sans-serif',
    fontWeight: 'bold',
    fontSize: '16px',
};

const inputStyle = {
    width: '100%',
    padding: '10px 15px',
    marginBottom: '30px',
    border: '2px solid #7A5CFA',
    borderRadius: '4px',
    borderwidth: 'thick',
    boxSizing: 'border-box',
    color: '#686868',
    fontFamily: '"Noto Sans", sans-serif',
    fontSize: '16px' 
};

const checkboxContainerStyle = {
    margin: 'auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '20px',
};

const checkboxStyle = {
    marginRight: '10px'
};

const checkboxLabelStyle = {
    color: '#686868',
    fontFamily: '"Noto Sans", sans-serif',
    fontSize: '19px'
};


const DemographicForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        studentId: '',
        email: '',
        pronouns: '',
        genderIdentity: '',
        ethnicityRace: '',
        dateOfBirth: '',
        gradeLevel: '',
        majorFieldOfStudy: '',
        careerInterest: '',
        primaryLanguage: '',
        courses: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent the default form submission behavior
        console.log(formData);
    
        // URL of your Flask endpoint
        const url = 'http://127.0.0.1:5000/create_new_student';
    
        // Fetch API to send the POST request
        fetch(url, {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                sid: formData.studentId, // Ensure that this ID is an integer or converted to one in your backend if necessary
                name: formData.name,
                demographic: JSON.stringify({
                    email: formData.email,
                    pronouns: formData.pronouns,
                    genderIdentity: formData.genderIdentity,
                    ethnicityRace: formData.ethnicityRace,
                    dateOfBirth: formData.dateOfBirth,
                    gradeLevel: formData.gradeLevel,
                    majorFieldOfStudy: formData.majorFieldOfStudy,
                    careerInterest: formData.careerInterest,
                    primaryLanguage: formData.primaryLanguage,
                    courses: formData.courses
                })
            }),
            mode: 'cors'
        })
        .then(response => response.json())  // Parse the JSON response
        .then(data => {
            console.log('Success:', data);
            alert('New student created successfully!'); // Display success message
        })
        .catch((error) => {
            console.error('Error:', error);
            alert('Error creating student'); // Display error message
        });
    };    

    return (
        <div style={formContainerStyle}>
            <h1 style={titleStyle}>Sign Up</h1>
            <form onSubmit={handleSubmit} style={formContainerStyle}>
                <label style={labelStyle} htmlFor="name">Name</label>
                <input style={inputStyle} type="text" name="name" value={formData.name} onChange={handleChange} />

                <label style={labelStyle} htmlFor="studentId">Student ID</label>
                <input style={inputStyle} type="text" name="studentId" value={formData.studentId} onChange={handleChange} />

                <label style={labelStyle} htmlFor="email">Email Address</label>
                <input style={inputStyle} type="email" name="email" value={formData.email} onChange={handleChange} />

                <label style={labelStyle} htmlFor="pronouns">Pronouns</label>
                <input style={inputStyle} type="text" name="pronouns" value={formData.pronouns} onChange={handleChange} />

                <label style={labelStyle} htmlFor="genderIdentity">Gender Identity</label>
                <input style={inputStyle} type="text" name="genderIdentity" value={formData.genderIdentity} onChange={handleChange} />

                <label style={labelStyle} htmlFor="ethnicityRace">Ethnicity/Race</label>
                <input style={inputStyle} type="text" name="ethnicityRace" value={formData.ethnicityRace} onChange={handleChange} />

                <label style={labelStyle} htmlFor="dateOfBirth">Date of Birth</label>
                <input style={inputStyle} type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} />

                <label style={labelStyle} htmlFor="gradeLevel">Grade Level</label>
                <input style={inputStyle} type="text" name="gradeLevel" value={formData.gradeLevel} onChange={handleChange} />

                <label style={labelStyle} htmlFor="majorFieldOfStudy">Major/Field of Study</label>
                <input style={inputStyle} type="text" name="majorFieldOfStudy" value={formData.majorFieldOfStudy} onChange={handleChange} />

                <label style={labelStyle} htmlFor="careerInterest">Career Interest</label>
                <input style={inputStyle} type="text" name="careerInterest" value={formData.careerInterest} onChange={handleChange} />

                <label style={labelStyle} htmlFor="primaryLanguage">Primary Language</label>
                <input style={inputStyle} type="text" name="primaryLanguage" value={formData.primaryLanguage} onChange={handleChange} />

                <label style={labelStyle} htmlFor="courses">Relevant Coursework</label>
                <textarea style={inputStyle} name="courses" value={formData.courses} onChange={handleChange} />

            </form>
            <div style={checkboxContainerStyle}>
                    <input type="checkbox" style={checkboxStyle} />
                    <label style={checkboxLabelStyle}>I Agree to the Terms & Conditions</label>
            </div>
            <CustomButton 
                    mode="primary"
                    text="Submit"
                    onClick={handleSubmit}
                    height='60px'
                    width='200px'
                    fontSize='25px'
                    borderRadius='12px'>
            </CustomButton>
        </div>
    );
};

export default DemographicForm;
