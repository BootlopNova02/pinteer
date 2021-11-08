import styled from "styled-components";
import '../../script/bootstrap.min.css';
import illustrasi3 from "../../assets/illustration 3.png";
import {Nav} from 'react-bootstrap';
import { NavLink as Link } from "react-router-dom";

const JUMBOTRON = styled.div`
    padding: 30px 80px;
    margin-top: 15px;
    .right {
        margin-top: 75px;
    }
    h2 p button {
        margin-top: 25px;
    }
    button {
        background: var(--nav);
        color: var(--white);
        width: 180px;
        padding: 15px 25px;
        border-radius: 10px;
        font-weight: bold;
        cursor: pointer;
        transition: all 0.2s;
        &:hover {
            transform: scale(1.2);
            font-weight: 600;
        }
    }
    @media only Screen and (max-width: 48em) {
        padding: 2rem;
    }
`;
    
const Text = styled.div`
    margin-top: 80px;
    background: var(--testi);
    padding: 30px 80px;
    text-align: center;
    p {
        margin-top: 20px;
        color: var(--white);
    }
    @media only Screen and (max-width: 48em) {
        padding: 0.5rem 1rem;
    }
`;

const JumbotronMagang = () => {
    return (
        <div>
            <JUMBOTRON>
                <div className="row top">
                    <div className="col-sm left">
                        <img src={illustrasi3} className="img-fluid" alt="illustration" />
                    </div>
                    <div className="col-sm right">
                        <h2>Kami berfokus pada bidang Pendidikan khususnya SMK</h2>
                        <p>Pinteer ID menyediakan media Informasi yang menjembatani siswa atau siswi
                            SMK dalam mencari tempat magang ke industri yang sesuai dengan kompetensinya
                            dengan produk yang berplatform website magangsmk.com
                        </p>
                        <Nav.Link className="nav-item" as={Link} to='/tentangkami'><button className="btn btn-sm" href="" type="button">Tentang Kami</button></Nav.Link>
                    </div>
                </div>
            </JUMBOTRON>
            <Text>
                <p><marquee behavior="alternate" direction="right">Sudah siapkah anda untuk pengalaman magang yang sesuai dengan bidang Kompetensi anda?</marquee></p>
            </Text>
        </div>
    );
};

export default JumbotronMagang;