import logo from "./logo.svg";
import "./App.css";

import ActionAreaCard from "./components/Common/Card.js";
import Button from "./components/Common/Button.js";
import DemographicForm from "./pages/UserRegistration/DemographicForm/DemographicForm";
import StudentPage from "./pages/ScoreAndCertificate/StudentUserCertificates/StudentUserCertificates"; 

function App() {
	return (
		<div className='App'>
			<StudentPage></StudentPage>
		</div>
	);
}

export default App;
