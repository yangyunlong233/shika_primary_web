import React, { Component } from "react";
// assets
import { HeaderLayout, Logo, Button } from "./HeaderPanel_styled";
import logo from "../../../assets/img/logo_img_w.svg";
import icon_label from "../../../assets/img/tpl/icon_label.svg";
import icon_feild from "../../../assets/img/tpl/icon_feild.svg";
import icon_code from "../../../assets/img/tpl/icon_code.svg";
import icon_square from "../../../assets/img/tpl/icon_square.svg";
import icon_circel from "../../../assets/img/tpl/icon_circel.svg";

class HeaderPanel extends Component {
    render() {
        return(
            <HeaderLayout>
                <Logo><img src={logo} alt="LOGO"/></Logo>
                <div className={"group"}>
                    <Button><img src={icon_label} alt="icon"/>Label</Button>
                    <Button><img src={icon_feild} alt="icon"/>Feild</Button>
                    <Button><img src={icon_code} alt="icon"/>UNI2Kcode</Button>
                    <Button><img src={icon_square} alt="icon"/>Square</Button>
                    <Button><img src={icon_circel} alt="icon"/>Circel</Button>
                </div>

            </HeaderLayout>
        );
    }
}

export  default HeaderPanel;