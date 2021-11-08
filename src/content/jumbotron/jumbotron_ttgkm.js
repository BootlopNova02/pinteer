import styled from "styled-components";
import '../../script/bootstrap.min.css';
import illustrasi4 from "../../assets/illustration 4.png";

const JUMBOTRON = styled.div`
    padding: 30px 80px;
    margin-top: 15px;
    h2 p{
        margin-top: 25px;
    }
    @media only Screen and (max-width: 64em) {
        padding: 2rem;
        margin-top: 50px;
    }
    @media only Screen and (max-width: 48em) {
        padding: 1rem;
    }
`;

const JumbotronTentangKami = () => {
    return (
        <div>
            <JUMBOTRON>
                <div className="row top">
                    <div className="col-sm left">
                        <img src={illustrasi4} className="img-fluid" alt="illustration" />
                    </div>
                    <div className="col-sm rightt">
                        <h2>Apasih Pinteer ID itu ?</h2>
                        <p>Pinteer ID membantu Siswa atau Siswi SMK untuk menyelesaikan masalah pencarian tempat magang atau praktek kerja industri sesuai dengan kompetensi yang dibutuhkan di perusahaan atau bidang usaha tersebut.
                            Magang atau Praktek Kerja Industri merupakan pintu gerbang bagi peserta didik SMK untuk masuk dalam dunia kerja. Maka dibutuhkan sinkronisasi dan link and match dalam kebutuhan tenaga kerja antara pihak Industri dengan pihak sekolah. Solusi dari Pinteer ID dengan menyediakan media Informasi yang menjembatani dalam pencarian tempat magang untuk peserta didik SMK dengan platform website magangsmk.com sehingga dapat membantu Siswa & Siswi SMK dalam merekomendasikan tempat magang yang sesuai dengan kompetensi yang dibutuhkan pihak Industri atau Perusahaan.
                            Diharapkan memberi dampak dalam sinkronisasi antara industri dengan sekolah sehingga adanya peningkatan Sumber Daya Manusia yang unggul dan berkarakter.
                        </p>
                    </div>
                </div>
            </JUMBOTRON>
        </div>
    );
};

export default JumbotronTentangKami;