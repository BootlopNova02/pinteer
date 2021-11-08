import React, { Component } from "react";
import Service from "../content/hero/hero_magang";
import JumbotronMagang from "../content/jumbotron/jumbotron_magang";
import Testi from "../component/testimonial/index";

//import styled from "styled-components";

export default class Magang extends Component {
    render() {
        return (
            <div>
                <JumbotronMagang />
                <Service />
                <Testi />
            </div>
        )
    };
};