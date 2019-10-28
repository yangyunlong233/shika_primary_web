import React, { Component } from "react";
import { connect } from "react-redux";
// assets
import { PanelSon, Button } from "../Panel_styled";
// import Custom from "./Custom";

class Preset extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
        this.dpi96 = 3.779527559;
    }

    /*
    * [parent]preset size set method
    * params    [int]: print size
    * */
    set_size(w, h) {
        this.props.set_width(`${Number(w * this.dpi96).toFixed(0)}px`);
        this.props.set_height(`${Number(h * this.dpi96).toFixed(0)}px`);
    }


    render() {
        return(
            <PanelSon>
                <div className={"panel-layout"}>
                    <h1>Preset Size<span onClick={this.props.handle_show_panel.bind(this, null)}>×</span></h1>
                    <div className={"form-gp"}>
                        <Button onClick={this.set_size.bind(this, 297, 210)}>A4 horizontal</Button>
                        <Button onClick={this.set_size.bind(this, 210, 297)}>A4 Vertical</Button>
                        <Button onClick={this.set_size.bind(this, 85.6, 54)}>CR80 horizontal</Button>
                        <Button onClick={this.set_size.bind(this, 54, 85.6)}>CR80 Vertical</Button>
                    </div>
                </div>
            </PanelSon>
        );
    }
}

export default connect((state, props)=>{
    return Object.assign({}, props, state)
},{
    set_width(value) {
        return {type: 'set_width', value}
    },
    set_height(value) {
        return {type: 'set_height', value}
    }
})(Preset);