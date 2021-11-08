import styled from "styled-components";
import '../../script/bootstrap.min.css';
import startupdigital from "../../assets/1000 footer.png";
import innovative from "../../assets/innovative footer.png";
import kominfo from "../../assets/kominfo footer.png";
import {Nav} from 'react-bootstrap';
import { NavLink as Link } from "react-router-dom";

const FOOTER = styled.footer`
    padding: 80px;
    background: var(--footerone);
    color: var(--grey);
    @media only Screen and (max-width: 48em) {
        padding: 0.5rem;
    }
`;

const Content = styled.div`
    padding: 100px 0 125px 0;
    h6 {
        color: var(--testi);
    }
    a {
        text-decoration: none;
        color: var(--grey);
    }
    img {
        margin-left: 10px;
        margin-top: 10px;
    }
    @media only Screen and (max-width: 48em) {
        margin: 1rem;
        a {
            margin-top: 5px;
        }
        h6{
            margin-top: 15px;
        }
    }
`;

const Footer = () => {
    return (
        <FOOTER>
            <Content>
                <div className="row">
                    <div className="col-sm konten">
                        <h6 className="title">PINTEER ID</h6>
                        <a className="description">
                            PINTEER INDONESIA Jl. Griyan Baru VI No.2 Baturan Colomadu Karanganyar Jawa Tengah Kode Pos 57171 Telp/Hp.  0877 6053  3570
                        </a>
                        <a href=""  className="description"><p>✉  Email. admin@pinteer.id</p></a>
                    </div>
                    <div className="col-sm konten">
                        <h6 className="title">MAGANG</h6>
                        <a className="description">Magang SMK</a>
                    </div>
                    <div className="col-sm konten">
                        <h6 className="title">LINK AKTIF</h6>
                        <Nav.Link className="nav-item" as={Link} to='/tentangkami'><a className="description"><p>Tentang Kami</p></a></Nav.Link>
                        <Nav.Link className="nav-item" as={Link} to='/magang'><a className="description"><p>Magang</p></a></Nav.Link>
                        <Nav.Link className="nav-item" as={Link} to='/kontak'><a className="description"><p>Kontak</p></a></Nav.Link>
                    </div>
                    <div className="col-sm konten">
                        <h6 className="title">DIDUKUNG OLEH</h6>
                        <div className="row img">
                            <a href="https://1000startupdigital.id/"><img className="footer-image img-fluid" src={startupdigital} /></a>
                            <a href="https://www.iaugm.com/"><img className="footer-image img-fluid" src={innovative} /></a>
                            <a href="https://kominfo.go.id/"><img className="footer-image img-fluid" src={kominfo} /></a>
                        </div>
                    </div>
                </div>
            </Content>
        </FOOTER>
    );
};

export default Footer;