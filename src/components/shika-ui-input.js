/*
* shika-ui INPUT styled
* React UI Components
* require moudel: style-components
* version 0.1
* */

import styled from "styled-components";
import ColorShema from "./shika-color-schema";

export const FormGroup = styled.div`
position: relative;
display: block;
margin: 1rem;
  
&.inline-gp {
display: inline-block;
}

&.light {
label {
color: ${ColorShema.LIGHT};
}
input {
color: ${ColorShema.DARKEN};
background: ${ColorShema.LIGHTEN};
}
}

&.dark {
label {
color: ${ColorShema.DARK};
}
input {
color: ${ColorShema.LIGHTEN};
background: ${ColorShema.DARK};
}
}

input, label {
display: block;
text-align: left;
}
input {
width: calc(100% - .6rem);
border: 0;
margin: .5rem 0;
padding: .3rem;
height: 1.2rem;
line-height: 1.2rem;
border-radius: .2rem;
}
label {
height: 1.2rem;
line-height: 1.2rem;
}

.verify {
position: absolute;
right: 0;
bottom: -.5rem;
margin: .5rem 0;
padding: .3rem;
height: 1.2rem;
line-height: 1.2rem;
text-align: right;
}
.verify+input {
width: 50%;
}
`;