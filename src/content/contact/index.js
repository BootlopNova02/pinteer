import styled from "styled-components";
import '../../script/bootstrap.min.css';
import lokasi from "../../assets/location_on.svg";
import phone from "../../assets/phone_android.svg";
import time from "../../assets/access_time.svg";
import email from "../../assets/email.svg";

const CONTACT = styled.div`
    padding: 0 80px;
    margin: 0;
    position: relative;
    h2 {
        letter-spacing: 0.2rem;
        margin-bottom: -10px;
    }
    .form-control {
        padding: 10px;
        background: var(--white);
        border: 1px solid var(--grey);
    }
    .form-control::-webkit-input-placeholder { 
        color: #6e6e6e;
        padding: 5px;
        font-size: 15px;
    }
    }
    .btn {
        width: 30%;
        margin-bottom: 50px
    }
    .fiture {
        margin-bottom: 50px;
        color: rgba(0, 0, 0, 0.5);
    }
    h5 {
        justify-content: center;
        margin: 15px;
    }
    @media only Screen and (max-width: 64em) {
        margin-top: 100px;
        padding: 10px;
        .btn {
            width: 150px;
        }
    }
    @media only Screen and (max-width: 40em) {
        padding: 0.3rem;
    }
`;

const Contact = () => {
    return (
        <CONTACT>
            <div className="container">
                    <div className="col-md pt-3 fiture">
                        <div className="row">
                            <img src={lokasi} />
                            <h5>Baturan, Karanganyar</h5>
                        </div>
                        <div className="row">
                            <img src={phone} />
                            <h5>0877 6053 3570</h5>
                        </div>
                        <div className="row">
                            <img src={time} />
                            <h5>Senin-Jumat 09.00-17.00 WIB</h5>
                        </div>
                        <div className="row">
                            <img src={email} />
                            <h5>admin@pinteer.id</h5>
                        </div>
                    </div>
                    <h2>Kontak</h2>
                <form>
                    <div className="row pt-5 mx-auto form">
                        <div className="col-8 form-group mx-auto">
                            <textarea className="form-control" id="" cols="30" rows="8" placeholder="Masukkan Pesan" name="message" />
                        </div>
                        <div className="col-8 pt-2 mx-auto">
                            <input type="text" className=" form-control" placeholder="Masukkan Nama" name="name" />
                        </div>
                        <div className="col-8 pt-4 mx-auto">
                            <input type="email" className=" form-control" placeholder="Masukkan Email" name="email" />
                        </div>
                        <div className="col-8 form-group pt-4 mx-auto">
                            <input type="text" className="form-control" placeholder="Masukkan Subjek" name="subject" />
                        </div>
                        <div className="col-sm-7 pt-3 mx-auto text-center">
                            <input type="submit" className="btn btn-info" value="Kirim Pesan"></input>
                        </div>
                    </div>
                </form>
            </div>
        </CONTACT>
    );
};

export default Contact;