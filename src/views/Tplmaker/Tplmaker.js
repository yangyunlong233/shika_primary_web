import React, { Fragment, Component } from "react";
// components
import ToolPanel from "./components/ToolPanel";
// assets
import { Canvas } from "./Tplmaker_styled";

class Tplmaker extends Component {
    render() {
        return(
            <Fragment>
                <Canvas>123</Canvas>
                <ToolPanel />
            </Fragment>
        );
    }
}

export default Tplmaker;