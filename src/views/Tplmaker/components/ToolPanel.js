import React, { Component } from "react";
// components
import PanelMenu from "./PanelMenu";
// assets
import { Panel } from "./Panel_styled";

class ToolPanel extends Component{
    render() {
        let a = true;
        return(
            <Panel>
                <div className={"panel-layout"}>
                    {a?<PanelMenu/>:<div>1</div>}
                </div>
            </Panel>
        );
    }
}

export default ToolPanel;