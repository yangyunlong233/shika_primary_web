import React, { Component } from "react";
// redux
import { connect } from "react-redux";
import { set_canvas_size } from "../../../redux/actions"
// assets
import { PopLayout, Button } from "./Pop_styled";

class CreatePop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width: this.props.canvas.width,
            height: this.props.canvas.height
        }
    }

    set_width(e) {
        this.setState({width: e.target.value});
    }

    set_height(e) {
        this.setState({height: e.target.value});
    }

    set_size(w, h) {
        this.setState({width: w, height: h});
    }

    confirm_size() {
        let n = new Date();
        this.props.set_canvas_size({name:n.getTime(), width: this.state.width, height: this.state.height})
    }

    render() {
        return(
            <PopLayout>
                <div className={"pop-win"}>
                    <h1>Create Canvas</h1>
                    <div className={"group"}>
                        <h2>Presets</h2>
                        <Button onClick={this.set_size.bind(this, 297, 210)}>A4 horizontal</Button>
                        <Button onClick={this.set_size.bind(this, 210, 297)}>A4 Vertical</Button>
                        <Button onClick={this.set_size.bind(this, 85.6, 54)}>CR80 horizontal</Button>
                        <Button onClick={this.set_size.bind(this, 54, 85.6)}>CR80 Vertical</Button>
                    </div>
                    <div className={"group"}>
                        <h2>Custom</h2>
                        <div>
                            <label>width</label>
                            <input type="text" value={this.state.width} onChange={this.set_width.bind(this)}/>
                            <span>mm</span>
                        </div>
                        <div>
                            <label>height</label>
                            <input type="text" value={this.state.height} onChange={this.set_height.bind(this)}/>
                            <span>mm</span>
                        </div>
                    </div>
                    <div className={"group submit"}>
                        <Button primary onClick={this.confirm_size.bind(this)}>confirm</Button>
                    </div>
                </div>
            </PopLayout>
        );
    }
}

export default connect(
    (state, props) => Object.assign({}, props, state),
    {
        set_canvas_size
    }
)(CreatePop);