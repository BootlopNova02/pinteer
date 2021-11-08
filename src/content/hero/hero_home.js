import styled from "styled-components";
import hero from "../../assets/illustration 2.png";
import '../../script/bootstrap.min.css';

const HERO = styled.div`
    padding: 80px;
    .row {
        padding: 40px 0;
    }
    .text {
        margin-top: 100px;
    }
    @media only Screen and (max-width: 48em) {
        padding: 1rem;
        .left {
            visibility: hidden;
            display: none;
        }
        .text {
            margin-top: 0;
        }
    }
`;

const HeroHome = () => {
    return (
        <HERO>
            <div className="row">
                <div className="col left">
                    <img src={hero} className="img-fluid" alt="illustration" />
                </div>
                <div className="col text">
                    <h3>Dapatkan tempat magangmu Sekarang</h3>
                    <p>Solusi dari Pinteer ID dengan menyediakan media Informasi yang menjembatani dalam pencarian tempat magang untuk peserta didik SMK dengan platform website magangsmk.com sehingga dapat membantu Siswa & Siswi SMK dalam merekomendasikan tempat magang yang sesuai dengan kompetensi yang dibutuhkan pihak Industri atau Perusahaan.</p>
                </div>
            </div>
        </HERO>
    );
};

export default HeroHome;