import logo from "./logo.svg";
import "./App.css";

import ActionAreaCard from "./components/Common/Card.js";
import Button from "./components/Common/Button.js";
import DemographicForm from "./pages/UserRegistration/DemographicForm/DemographicForm";

function App() {
	return (
		<div className='App'>
			<DemographicForm></DemographicForm>
		</div>
	);
}

export default App;
