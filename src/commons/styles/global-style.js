import { createGlobalStyle } from 'styled-components';
import CovidImg from '../../assets/images/covid.jpg';

const GlobalStyle = createGlobalStyle`
    * {
        outline: none;
        box-sizing: border-box;
    }
    a {
        color: white;
    }
    body { 
        line-height: normal;
        letter-spacing: -0.033em;
        background-color: #00374c;
    }
    html, body {
        width: 100%;
        min-height: 100%;
        display: flex;
        padding: 0;
        margin: 0;
    }
    #root {
        background: url(${CovidImg});
        height: 100%;
        width: 100%;
        background-size: cover;
        background-position: center center;
    }
    .mb-2 {
        margin-bottom: 2rem;
    }
    .pt-2 {
        padding-top: 2rem;
    }
    .cursor { 
        cursor: pointer;
    }
`

export default GlobalStyle