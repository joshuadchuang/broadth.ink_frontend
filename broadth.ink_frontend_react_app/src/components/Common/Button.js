import React from "react";
import Button from "@mui/material/Button"; // Import Button component from Material UI
import { alignProperty } from "@mui/material/styles/cssUtils";

//include margins
//include a default max-width

/*

Button to be used everywhere on the website. 
Primary has color purple, and secondary has color gray.

Example usage:
  import MyButtonComponent from "./components/Common/Button.js";

  <MyButtonComponent
    mode="primary"
    text="Click Me!"
    onclick={Your Function Here}
    height='60px'
    width='200px'
    fontSize='25px'
    borderRadius='12px'
  />

Everything that's about size has to be set.
Everything that's about style has been set.


*/

function MyButtonComponent({
    mode,
    text,
    onClick,
    height,
    width,
    fontSize,
    borderRadius,
    justifyContent="center",
    padding=1,
    nav=1, //default value
}) {
    const primaryColor = "#9172EC";
    const secondaryColor = "#EDEAEA";
    const blankColor = "#ffffff"

    const BGcolors = [primaryColor, secondaryColor, blankColor]
    const TXTcolors = ["#ffffff", "#000000", "#000000"]

    return (
        <div>
            {/* Use the Button component from Material UI */}
            <Button
                variant='contained'
                onClick={onClick}
                sx={{
                    //backgroundColor: mode === "secondary" ? secondaryColor : primaryColor,
                    boxShadow: nav, //if nav is 0 (true) then we have no shadow
                    backgroundColor: BGcolors[mode],
                    "&:hover": {
                        backgroundColor:
                            //mode === "secondary" ? secondaryColor : primaryColor,
                            BGcolors[mode],
                        boxShadow:
                            nav
                    },
                    fontFamily: "Open Sans", // Set font family to Open Sans
                    // fontWeight: mode === "secondary" ? "400" : "700", // Extra bold for primary
                    // color: mode === "secondary" ? "black" : "white",
                    fontWeight: mode === 0 ? "700" : "400", // Extra bold for primary
                    color: TXTcolors[mode],
                    textTransform: "none", // Keep the text in its original case
                    borderRadius: borderRadius, // Setting the borderRadius size
                    fontSize: fontSize, // Set font size
                    height: height, // Use height prop for button height
                    width: width, // Use width prop for button width
                    justifyContent: justifyContent,
                }}>
                {text} {/* Display custom text */}
            </Button>
        </div>
    );
}

export default MyButtonComponent;



