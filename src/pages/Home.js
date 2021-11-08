import React, { Component } from "react";
//import { lazy } from "react";
import JumbotronHome from "../content/jumbotron/jumbotron_home";
import HeroHome from "../content/hero/hero_home";
import Visi from "../component/visi_misi/index";
import Testi from "../component/testimonial/index";
//import styled from "styled-components";

export default class Home extends Component {
    render() {
        return (
            <div>
                <JumbotronHome />
                <Visi />
                <HeroHome />
                <Testi />
            </div>
        )
    };
};