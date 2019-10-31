import React, {Component} from "react";
// shika-ui
import { Page, Box } from "../../components/shika-ui-page";
import ColorShema from "../../components/shika-color-schema";
import { FormGroup } from "../../components/shika-ui-input";
import { Button } from "../../components/shika-ui-button";
// assets
import Logo from "../../assets/img/logo_w.svg";

class Login extends Component {
    render() {
        return(
            <Page background={ColorShema.DARK}>
                <Box width={"5rem"}><img style={{width: "100%"}} src={Logo} alt="Logo"/></Box>
                <Box width={"330px"} background={ColorShema.LIGHT} radius={".4rem"}>
                    <FormGroup className={"dark"}>
                        <label>username</label>
                        <input type="text"/>
                    </FormGroup>
                    <FormGroup className={"dark"}>
                        <label>password</label>
                        <input type="text"/>
                    </FormGroup>
                    <Button primary>Login</Button>
                </Box>
                <Box exCss={"color: #fff;text-align: center;"}>
                    Copyright @2019. Cloudhand
                </Box>
            </Page>
        );
    }
}

export default Login;