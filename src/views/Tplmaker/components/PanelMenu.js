import React, { Component, Fragment } from "react";
// assets
import icon_preset from "../../../assets/img/tpl/icon_preset.svg";
import icon_custom from "../../../assets/img/tpl/icon_custom.svg";
import icon_bgcolor from "../../../assets/img/tpl/icon_bgcolor.svg";
import icon_bgimg from "../../../assets/img/tpl/icon_bgimg.svg";
import icon_label from "../../../assets/img/tpl/icon_label.svg";
import icon_feild from "../../../assets/img/tpl/icon_feild.svg";
import icon_square from "../../../assets/img/tpl/icon_square.svg";
import icon_circel from "../../../assets/img/tpl/icon_circel.svg";
import icon_code from "../../../assets/img/tpl/icon_code.svg";

class PanelMenu extends Component {
    render() {
        return(
            <Fragment>
                <h1>Canvas Settings</h1>
                <ul>
                    <li><span><img src={icon_preset} alt="icon"/></span><span>Preset Size</span></li>
                    <li><span><img src={icon_custom} alt="icon"/></span><span>Custom Size</span></li>
                    <li><span><img src={icon_bgcolor} alt="icon"/></span><span>Background Color</span></li>
                    <li><span><img src={icon_bgimg} alt="icon"/></span><span>Background Image</span></li>
                </ul>
                <h1>Create Elements</h1>
                <ul>
                    <li><span><img src={icon_label} alt="icon"/></span><span>Label</span></li>
                    <li><span><img src={icon_feild} alt="icon"/></span><span>Feild</span></li>
                    <li><span><img src={icon_square} alt="icon"/></span><span>Square</span></li>
                    <li><span><img src={icon_circel} alt="icon"/></span><span>Circel</span></li>
                    <li><span><img src={icon_code} alt="icon"/></span><span>UNI2KCODE</span></li>
                </ul>
            </Fragment>
        );
    }
}

export default PanelMenu;