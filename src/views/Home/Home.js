import React, { Fragment } from "react";
import { Link } from "react-router-dom";
// assets
import { Main, Menus, Copy } from "./Home_styled";
import logo from "../../assets/img/logo_d.svg"

function Home() {
    return(
        <Fragment>
            <Main><img src={logo} alt="LOGO"/></Main>
            <Menus>
                <div className={"links"}>
                    <Link to={"/tplmaker"}>template maker</Link>
                    <span>/</span>
                    <Link to={"/pathlab"}>Convertor</Link>
                    <span>/</span>
                    <Link to={"/pathlab"}>SVG path lab</Link>
                </div>
            </Menus>
            <Copy>Copyright @2019. CLOUDHAND</Copy>
        </Fragment>
    );
}

export default Home;