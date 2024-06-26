import { createGlobalStyle } from "styled-components";




const GlobalStyle = createGlobalStyle`

*,*::before,*::after,h1,h2,h3,h4,h5,h6{
    margin: 0;
    padding: 0;
}
h1,h2,h3,h4,h5,h6{
    display: inline-block;
}

@media screen and (max-width: 750px) { 
    LogoComponent, AnchorComponent, SocialIcons {
    display: none;
}
}


body{
    margin: 0;
    background-color:#DDD3C3;
    padding: 0;
    overflow-x: hidden;
    // overflow-y:hidden;
    font-family: 'Source Sans Pro',sans-serif;
}

`

export default GlobalStyle;