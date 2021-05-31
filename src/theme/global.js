import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }
  body {
    height: 100vh;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    padding: 0;
    margin: 0;
    font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    transition: all 0.25s linear;
  }
  footer {
    position: absolute;
    bottom: 5%;
    left: 50%;
    transform: translateX(-50%);
  }
  small {
    display: block;
  }
  button {
    display: block;
  }
  a {
    color: ${({ theme }) => theme.text};
  }

  article{
    background:${({ theme }) => theme.articleColor};
    margin:10px;
  }

  span{
    color:${props=>props.theme === 'dark'?'white':'black'};  
  }

  aside{
    color:${({ theme }) => theme.text};
    background:${({ theme }) => theme.asideBGColor};

    @media all and (max-width: 768px) { 
      position: fixed;
      left: 0;
      bottom: 0;
      width: 100vw;
      color:${({ theme }) => theme.text};
      background:${({ theme }) => theme.asideBGColor};
    }
  }

  section{
    display:flex;
    justify-content: center;

    width:92vw;
    height:100vh;

    @media all and (max-width: 768px) {  
     width:100vw;
     height:92vh;
    }
  }

`;