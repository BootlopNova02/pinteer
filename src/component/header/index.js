import React, { Component } from "react";
import logo from "../../assets/pinteer Logo-167px.png";
import styled from "styled-components";
import '../../script/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav} from 'react-bootstrap';
import { NavLink as Link } from "react-router-dom";
import telp from "../../assets/hp.svg";


const Headers = styled.header`
    padding: 60px;
    position: relative;
    .nav {
        padding: 0 40px;
    }
    .nav-item:hover, .nav-item:focus, .nav-item:active {
        font-weight: bold;
        text-decoration: underline;
    }
    .nav-item {
        color: #588bd3 !important;
        margin-left: 50px;
    }
    @media only Screen and (max-width: 64em) {
        padding: 0.5rem;
        text-align: center;
    }
    @media only Screen and (max-width: 40em) {
        padding: 1rem;
    }
`;

const Button = styled.button`
    width: 200px;
    padding: 15px 25px;
    border-radius: 50px;
    border: 1px solid var(--nav);
    background: var(--white);
    color: var(--nav) !important;
    font-weight: lighter;
    cursor: pointer;
    transition: all 0.2s;
    &:hover {
        transform: scale(1.2);
        font-weight: 600;
    }
    @media only Screen and (max-width: 64em) {
        display: none;
        content: "";
    }
`;

export default class Header extends Component {
    render() {
        return (
            <Headers>
                <Navbar className="fixed-top nav" bg="white" expand="lg">
                    <Navbar.Brand>
                        <img src={logo} alt="logo pinteer" />
                    </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mx-auto">
                                <Nav.Link className="nav-item" as={Link} to='/'>Beranda</Nav.Link>
                                <Nav.Link className="nav-item" as={Link} to='/magang'>Magang</Nav.Link>
                                <Nav.Link className="nav-item" as={Link} to='/tentangkami'>Tentang Kami</Nav.Link>
                                <Nav.Link className="nav-item" as={Link} to='/kontak'>Kontak</Nav.Link>
                            </Nav>
                            <Button href="tel:+6287760533570"> <img src={telp} /> 0877 6053  3570 </Button>
                        </Navbar.Collapse>
                </Navbar>
            </Headers>
        );
    };
};