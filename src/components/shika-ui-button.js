/*
* shika-ui BUTTON styled
* React UI Components
* require moudel: style-components
* version 0.1
* */

import styled from "styled-components";
import ColorShema from "./shika-color-schema";

/*
* Botton
* params:
* primary      [primary | null]   block | inline-block
* yes_no       [confirm | cancel]   background:green | background:red
* exCss        [string]   exclued style
* */
export const Button = styled.div`
cursor: default;
display: ${props=>props.primary?"block":"inline-block"};
margin: 2rem 1rem;
padding: .8rem 1rem;
text-align: center;
font-size: 16px;
font-family: hm, sans-serif;
background: ${props=>props.background?props.background:ColorShema.PRIMARY};
color: ${props=>props.color?props.color:"#FFFFFF"};
border-radius: .3rem;
${props=>{
    switch (props.yes_no) {
        case "confirm":
            return `background: ${ColorShema.CONFIRM}`;
        case "cancel":
            return `background: ${ColorShema.CANCEL}`;
        default:
            return
    }
}};
${props=>props.exCss};

&:hover {
background: ${props=>props.background?props.background:ColorShema.PRIMARY_HOVER};
${props=>{
    switch (props.yes_no) {
        case "confirm":
            return `background: ${ColorShema.CONFIRM_HOVER}`;
        case "cancel":
            return `background: ${ColorShema.CANCEL_HOVER}`;
        default:
            return
    }
}};
}
`;