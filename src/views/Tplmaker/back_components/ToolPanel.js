import React, { Component } from "react";
import { connect } from "react-redux";
// components
import PanelMenu from "./PanelMenu";
// assets
import { Panel } from "./Panel_styled";

class ToolPanel extends Component{
    render() {
        let a = true;
        console.log('康康：',this.props);
        return(
            <Panel>
                <div className={"panel-layout"}>
                    {a?<PanelMenu/>:<div>1</div>}
                </div>
            </Panel>
        );
    }
}

export default connect((state, props)=>{
    return Object.assign({}, state, props)
})(ToolPanel);