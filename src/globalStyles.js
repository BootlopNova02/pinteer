import { createGlobalStyle } from "styled-components";
import latar from "./assets/14043.jpg";

export const GlobalStyle = createGlobalStyle`
:root {
    --white: #ffffff;
    --nav: #588bd3;
    --testi: #615CFD;
    --footerone: #0C2140;
    --footertwo: #102E59;
    --grey: #7D8B9F;
    --black: #000000;
}

html{
    ${"" /* overflow-y: scroll; */}
    scroll-behavior:smooth;
    width: 100%;
}
    body,
    html,
    a {
        font-family: 'Poppins', sans-serif;
    }
    body {
        margin:0;
        background-image: url('${latar}');
        background-size: cover;
    }
    a {
        text-decoration: none;
    }
`;