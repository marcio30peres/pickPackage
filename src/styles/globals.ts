import { createGlobalStyle } from "styled-components";

export const Globals = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root {
        --background: rgb(95, 190, 95);
        --overlay: rgba(0, 0, 0, .75);
        --modal: rgba(255, 255, 255, .75);
    }

    html {
        @media (max-width: 1080px) {
            font-size: 93.75%;
        }
        @media (max-width: 720px) {
            font-size: 87.5%;
        }
    }

    body {
        width: 100vw;
        height: 100vh;

        background-color: var(--background);
        -webkit-font-smoothing: antialiased;
    }

    body, button, textarea, input {
        font-family: 'Fira Code', monospace;
        font-weight: 400;
    }

    strong, h1, h2, h3, h4, h5, h6 {
        font-weight: 600;
    }
`