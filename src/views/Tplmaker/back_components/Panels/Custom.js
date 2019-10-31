import React, { Component } from "react";
// assets
import { PanelSon, Button } from "../Panel_styled";

class Custom extends Component {
    constructor(props) {
        super(props);
        this.dpi96 = 3.779527559;
        this.state = {
            width: (parseFloat(this.props.canvas.width) / this.dpi96).toFixed(0),
            height: (parseFloat(this.props.canvas.height) / this.dpi96).toFixed(0),
        }
    }

    // 设置宽度
    set_width(e) {
        this.setState({width: e.target.value});
    }

    // 设置高度
    set_height(e) {
        this.setState({height: e.target.value});
    }

    /*
    * [parent]set size method
    * */
    set_size() {
        this.props.set_canvas_size(
            `${(Number(this.state.width) * this.dpi96).toFixed(0)}px`,
            `${(Number(this.state.height) * this.dpi96).toFixed(0)}px`
        );
    }

    render() {
        return(
            <PanelSon>
                <div className={"panel-layout"}>
                    <h1>Custom Size<span onClick={this.props.handle_show_panel.bind(this, null)}>×</span></h1>
                    <div className={"form-gp"}>
                        <label>width(mm)</label>
                        <input type="text" value={this.state.width} onChange={this.set_width.bind(this)}/>
                    </div>
                    <div className={"form-gp"}>
                        <label>height(mm)</label>
                        <input type="text" value={this.state.height} onChange={this.set_height.bind(this)}/>
                    </div>
                    <div className={"form-gp"}>
                        <Button onClick={this.set_size.bind(this)}>Confirm</Button>
                    </div>
                </div>
            </PanelSon>
        );
    }
}

export default Custom;