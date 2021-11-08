import styled from "styled-components";
import '../../script/bootstrap.min.css';
import visi from "../../assets/visi.png";
import misi from "../../assets/misi.png";

const SECTION = styled.div`
    padding: 40px 80px;
    
    @media only Screen and (max-width: 48em) {
        padding: 0.5rem;
    }
`;

const VisiMisi = styled.div`
    padding: 40px 0;
    img {
        margin-top: 50px;
    }
    p{
        padding-bottom: 25px;
    }
    @media only Screen and (max-width: 48em) {
        margin: 0.5rem;
    }
`;

const Kard = styled.div`
    box-shadow: 0.5px 0.5px 1px 1px rgba(0, 0, 0, 0.25);
    margin: 20px;
    background: var(--white);
`;

const Visi = () => {
    return (
        <SECTION>
            <VisiMisi  className="row text-center">
                <Kard className=" col-sm">
                    <img src={visi} alt="visi pinteer" />
                    <div className="card-body">
                        <h3 className="card-title">Visi</h3>
                        <p className="card-text">Meningkatkan kualitas Sumber Daya Manusia dari peserta
                        didik SMK untuk siap bekerja dan berkarakter sesuai dengan
                        Kebutuhan Industri.</p>
                    </div>
                </Kard>
                <Kard className=" col-sm">
                    <img src={misi} alt="visi pinteer" />
                    <div className="card-body">
                        <h3 className="card-title">Misi</h3>
                        <p className="card-text">Menyelesaikan masalah pendidikan dengan
                        teknologi dan kolaborasi antara sekolah, industri dan pihak terkait.</p>
                    </div>
                </Kard>
            </VisiMisi>
        </SECTION>
    );
};

export default Visi;