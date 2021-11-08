import styled from "styled-components";
import '../../script/bootstrap.min.css';
import logofooter from "../../assets/pinteer Logo-footer.png";

const FOOTER2 = styled.div`
    background: var(--footertwo);
    padding: 10px 40px;
    color: var(--grey);
    p {
        margin-top: 15px;
        font-size: 10px;
    }
`;

const Footer2 = () => {
    return (
        <FOOTER2>
            <div className="row justify-content-center">
                <p className="description">Copyright © 2021 All rights reserved | by </p>
                <img src={logofooter} />
            </div>
        </FOOTER2>
    );
};

export default Footer2;