import logo from "./logo.svg";
import "./App.css";

import ActionAreaCard from "./components/Common/Card.js";
import Button from "./components/Common/Button.js";

function App() {
	return (
		<div className='App'>
			<ActionAreaCard></ActionAreaCard>
			<Button
				mode='primary'
				text='Click Me!'
				onclick=''
				height='60px'
				width='200px'
				fontSize='25px'
				borderRadius='12px'></Button>
		</div>
	);
}

export default App;
