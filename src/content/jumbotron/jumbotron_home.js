import styled from "styled-components";
import '../../script/bootstrap.min.css';
import illustrasi from "../../assets/illustration 1.png";
import {Nav} from 'react-bootstrap';
import { NavLink as Link } from "react-router-dom";

const JUMBOTRON = styled.div`
    padding: 40px 80px;
    margin-top: 25px;
    .row {
        padding: 10px 0 125px 0;
    }
    p {
        margin-top: 20px;
    }
    button {
        margin-top: 20px;
        width: 230px;
        padding: 15px 25px;
        border-radius: 50px;
        font-weight: bold;
        cursor: pointer;
        transition: all 0.2s;
        &:hover {
            transform: scale(1.2);
            font-weight: 600;
        }
    }
    @media only Screen and (max-width: 48em) {
        margin-top: 30px;
        padding: 2rem;
        background-image: url('${illustrasi}');
        background-position: center;
        background-size: cover;
        .right {
            display: none;
            visibility: hidden;
        }
        h1, p {
            text-shadow: 2px 2px 2px var(--white);
        }
        
    }
    
`;


const JumbotronHome = () => {
    return (
        <JUMBOTRON>
            <div className="row top">
                <div className="col left">
                    <h1>Bergabunglah dengan <br /> Pinteer ID</h1>
                    <p>Kami meluncurkan produk magangsmk.com 
                    untuk membantu dan memudahkan Siswa atau 
                    Siswi SMK dalam mencari tempat magang sesuai 
                    dengan kompetensinya sehingga tersinkronisasi 
                    antara industri dengan sekolah.
                    </p>
                    <Nav.Link className="nav-item" as={Link} to='/magang'><button className="btn btn-sm btn-primary" type="button">Jelajahi Sekarang</button></Nav.Link>
                </div>
                <div className="col right">
                    <img src={illustrasi} className="img-fluid" alt="illustration" />
                </div>
            </div>
        </JUMBOTRON>
    );
};

export default JumbotronHome;