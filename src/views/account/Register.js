import React, {Component} from "react";
// shika-ui
import ColorShema from "../../components/shika-color-schema";
import { Page, PageMain, Box } from "../../components/shika-ui-page";
import { FormGroup } from "../../components/shika-ui-input";
import { Button } from "../../components/shika-ui-button";
// assets
import { HeaderTitle} from "./Register_styled";
import Logo from "../../assets/img/logo_w.svg";

class Register extends Component {
    render() {
        return(
            <Page background={ColorShema.DARK}>
                <PageMain>
                    <Box width={"5rem"}><img style={{width: "100%"}} src={Logo} alt="Logo"/></Box>
                    <Box width={"330px"} background={ColorShema.LIGHT} radius={".4rem"}>
                        <HeaderTitle>Register</HeaderTitle>
                        <FormGroup className={"dark"}>
                            <label>E-mail</label>
                            <input type="text"/>
                        </FormGroup>
                        <FormGroup className={"dark"}>
                            <label>username</label>
                            <input type="text"/>
                        </FormGroup>
                        <FormGroup className={"dark"}>
                            <label>password</label>
                            <input type="text"/>
                        </FormGroup>
                        <Button primary yes_no={"confirm"}>Submit</Button>
                    </Box>
                    <Box exCss={"color: #fff;text-align: center;"}>
                        Copyright @2019. Cloudhand
                    </Box>
                </PageMain>
            </Page>
        );
    }
}

export default Register;