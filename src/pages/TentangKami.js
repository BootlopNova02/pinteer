import React, { Component } from "react";
//import { lazy } from "react";
import Visi from "../component/visi_misi/index";
import JumbotronTentangKami from "../content/jumbotron/jumbotron_ttgkm";
//import styled from "styled-components";

export default class TentangKami extends Component {
    render() {
        return (
            <div>
                <JumbotronTentangKami />
                <Visi />
            </div>
        )
    };
};