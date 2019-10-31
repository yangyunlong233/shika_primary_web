/*
* shika-ui PAGE styled
* React UI Components
* require moudel: style-components
* version 0.1
* */

import styled from "styled-components";

/*
* Page
* params:
* background   [string]   background
* exCss        [string]   exclued style
* */
export const Page = styled.div`
display: block;
position: fixed;
top: 0;
right: 0;
bottom: 0;
left: 0;
margin: 0;
padding: 0;
overflow: hidden;
background: ${props=>props.background};
${props=>props.exCss};
`;

/*
* pageMain
* params:
* background   [string]   background
* hiddenX      [hiddenX | null]   hidden x-axis
* hiddenY      [hiddenY | null]   hidden y-axis
* exCss        [string]   exclued style
* */
export const PageMain = styled.div`
display: block;
position: absolute;
top: 0;
right: 0;
bottom: 0;
left: 0;
overflow: auto;
background: ${props=>props.background};
${props=>(props.hiddenX?"overflow-x: hidden;":"")}
${props=>(props.hiddenY?"overflow-y: hidden;":"")}
${props=>props.exCss};
`;

/*
* Box
* params:
* onMargin     [onMargin | null]    0 | 1rem
* onPadding    [onPadding | null]   0 | 1rem
* background   [string]   background
* radius       [string]   border-radius
* exCss        [string]   exclued style
* */
export const Box = styled.div`
display: block;
position: relative;
margin: ${props=>props.onMargin?"0":"1rem"};
padding: ${props=>props.noPadding?"0":"1rem"};
background: ${props=>props.background};
${props=>{
    if(props.width && !props.noMargin) {
        return `width: ${props.width}; margin: 1rem auto`;
    }
    else if (props.width) {
        return `width: ${props.width};`;
    }
}};
border-radius: ${props=>props.radius};
${props=>props.exCss};
`;