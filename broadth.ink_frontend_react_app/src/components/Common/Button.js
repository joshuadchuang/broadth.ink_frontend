import React from "react";
import Button from "@mui/material/Button"; // Import Button component from Material UI

/*

Button to be used everywhere on the website

Example usage:
  import MyButtonComponent from "./components/Common/Button.js";

  <MyButtonComponent
    height='60px'
    width='200px'
    fontSize='25px'
    borderRadius='12px'
  />

Everything that's about size has to be set.
Everything that's about style has been set.


*/

function MyButtonComponent({ height, width, fontSize, borderRadius }) {
	return (
		<div>
			{/* Use the Button component from Material UI */}
			<Button
				variant='contained'
				sx={{
					backgroundColor: "#9172EC", // Set custom background color
					"&:hover": {
						backgroundColor: "#9172EC", // Darker shade for hover state
					},
					fontFamily: "Open Sans", // Set font family to Open Sans
					fontWeight: "800", // Extra bold
					textTransform: "none", // Keep the text in its original case
					borderRadius: borderRadius, // Setting the borderRadius size
					fontSize: fontSize, // Set font size to 25px
					height: height, // Use height prop for button height
					width: width, // Use width prop for button width
				}}>
				Click Me
			</Button>
		</div>
	);
}

export default MyButtonComponent;
