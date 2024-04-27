//image is blurry
//change text align
//change color opacity and text color to match?
//maybe we can add margins so that the shadow shows up on hover
//import styles from './Nav.module.css'
import { useState } from 'react'
import Button from '@mui/material/Button';
import { dividerClasse, Box } from '@mui/material';
import ButtonGroup from '@mui/material/ButtonGroup';
import { createTheme } from '@mui/material/styles';
import Btn from './Button.js'
import logo from '../logo.png'

//todo: switch into using the button object xx
//ensure column margins
//active select
//change radius?
//tweak appearances
//top nav watermark


//usestate with props for active page
//render together

//new component button: returns a button w the given label + if true class

const App = props => {
    let pageSet = ["Courses", "Join New", "Certificate"];
    let active = props.def in pageSet ? props.def : "Courses"
    const [pages, setPages] = useState([active]+pageSet)

    const options = pageSet.map(item => {
        return (
            <div class="indiv">
                <Btn width={150} nav={0} mode={item===active ? "0" : "2"} text={item} borderRadius={20} justifyContent="flex-start"></Btn>
            </div>
        )
    })   

    //flex display
    //fix colors
    return(
        <>
        <img src = {logo} width={170}></img>
        <div class="btns">{options}</div>
        </>
        
        
    )

}

export default App
