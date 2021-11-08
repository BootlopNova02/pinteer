import styled from "styled-components";
import fitur1 from "../../assets/feature_1.svg";
import fitur2 from "../../assets/feature_2.svg";
import fitur3 from "../../assets/feature_3.svg";
import '../../script/bootstrap.min.css';

const SERVICE = styled.div`
    margin-top: 50px;
    padding: 20px 150px;
    margin-bottom: 50px;
    position: relative;
    .cell {
        text-align: center;
        margin-top: 5px;
    }
    .fitur {
        margin-top: 25px;
        background: var(--white);
        border-radius: 10px;
        cursor: pointer;
        transition: all 0.5s;
        &:hover {
            transform: scale(1.1);
            box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.25);
        }
    }
    .teks {
        justify-content: center;
        margin-top: 10px;
    }
    @media only Screen and (max-width: 64em) {
        padding: 1rem;
        margin: 10px;
        .fitur {
            width: 100%
            padding: 5px;
            &:hover {
                transform: none;
                box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.25);
            }
        }
    }
    @media only Screen and (max-width: 40em) {
        padding: 1rem;
    }
`;

const Service = () => {
    return (
        <SERVICE>
            <div className="row fitur">
                <div className="cell col">
                    <img src={fitur1} alt="img1" />
                    <div className="teks">
                        <h5>Website Mobile</h5>
                        <p>magangsmk.com dapat diakses dimana saja menggunakan handphone ataupun komputer.</p>
                    </div>
                </div>
            </div>
            <div className="row fitur">
                <div className="cell col">
                    <img src={fitur2} alt="img2" />
                    <div className="teks">
                        <h5>Rekomendasi Tempat Magang</h5>
                        <p>Produk akan memberikan rekomendasi tempat magang yang sesuai dengan Kompetensi.</p>
                    </div>
                </div>
            </div>
            <div className="row fitur">
                <div className="cell col">
                    <img src={fitur3} alt="img3" />
                    <div className="teks">
                        <h5>Workshop dan Seminar serta Info Lowongan Kerja</h5>
                        <p>User yang terdaftar akan mendapatkan info Workshop dan Seminar yang sesuai dengan kompetensi.<br /> Serta mendapatkan informasi Lowongan Kerja sesuai dengan kompetensi untuk SMK.</p>
                    </div>
                </div>
            </div>
        </SERVICE>
    );
};

export default Service;