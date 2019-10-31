import React, {Component, Fragment} from "react";
import { connect } from "react-redux";
// components
import Preset from "./Panels/Preset";
import Custom from "./Panels/Custom";
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
    constructor(props) {
        super(props);
        this.state = {
            show_panel: null,
            canvas: {
                width: this.props.width,
                height: this.props.height
            }
        };
    }

    handle_show_panel = (comp)=>{
        this.setState({show_panel: comp});
    };

    set_canvas_size = (w, h)=>{
        this.setState({
            canvas: {
                width: w,
                height: h
            }
        })
    };

    render() {
        return(
            <Fragment>
                <h1>Canvas Settings</h1>
                <div>{this.state.canvas.width}</div>
                <div>{this.state.canvas.height}</div>
                <div>{this.props.width}</div>
                <div>{this.props.height}</div>

                <ul>
                    <li onClick={this.handle_show_panel.bind(this, Preset)}><span><img src={icon_preset} alt="icon"/></span><span>Preset Size</span></li>
                    <li onClick={this.handle_show_panel.bind(this, Custom)}><span><img src={icon_custom} alt="icon"/></span><span>Custom Size</span></li>
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
                {this.state.show_panel?
                    <this.state.show_panel
                        canvas={this.state.canvas}
                        handle_show_panel={this.handle_show_panel}
                        set_canvas_size={this.set_canvas_size}
                    />:''}
            </Fragment>
        );
    }
}

export default connect(
    (state, props)=>{
        return Object.assign({}, props, state);
    }, {}
)(PanelMenu);