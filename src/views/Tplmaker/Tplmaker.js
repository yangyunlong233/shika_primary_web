import React, { Fragment, Component } from "react";
// redux
import { connect } from "react-redux";
import { set_canvas_width } from "../../redux/actions";
// components

// assets


class Tplmaker extends Component {

    fn() {
        this.props.set_canvas_width('100px');
    }

    render() {
        console.log(this.props);
        return(
            <Fragment>
                <div onClick={this.fn.bind(this)}>111</div>
                <div>{this.props.canvas.width}</div>
            </Fragment>
        );
    }
}

export default connect(
    (state, props) => Object.assign({}, props, state),
    {
        set_canvas_width
    }
)(Tplmaker);