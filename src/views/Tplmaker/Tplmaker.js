import React, { Fragment, Component } from "react";
// components
import CreatePop from "./components/CreatePop";
// redux
import { connect } from "react-redux";
import { set_canvas_size, field_add } from "../../redux/actions";
// assets


class Tplmaker extends Component {

    render() {
        console.log(this.props);
        return(
            <Fragment>
            {this.props.canvas.name?'':<CreatePop/>}
                
            </Fragment>
        );
    }
}

export default connect(
    (state, props) => Object.assign({}, props, state),
    {
        set_canvas_size,
        field_add
    }
)(Tplmaker);
