import React, { useState } from 'react';
import CustomButton from '../../../components/Common/Button.js';

const inputStyle = {
    width: '100%',
    padding: '15px',
    margin: '5px 0 20px 0',
    border: '1px solid #ccc',
    borderRadius: '4px',
    boxSizing: 'border-box',
};

const labelStyle = {
    display: 'block',
    marginBottom: '5px',
    color: '#999',
};

const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '500px',
    margin: '0 auto',
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
        e.preventDefault();
        console.log(formData);
    };

    return (
        <form onSubmit={handleSubmit} style={formStyle}>
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

            <label style={labelStyle} htmlFor="courses">Courses</label>
            <textarea style={inputStyle} name="courses" value={formData.courses} onChange={handleChange} />

            <CustomButton 
                mode="primary"
                text="Submit"
                onclick={handleSubmit}
                height='60px'
                width='200px'
                fontSize='25px'
                borderRadius='12px'></CustomButton>
        </form>
    );
};

export default DemographicForm;
