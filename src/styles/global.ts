
import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}
body {
        color: #fff;
        background:#172026
}
html,body,#root{
    height:100%
}
*,input,button{
    border:0;
    outline:0;
    font-family:'ROBOTO',sans-serif
}
button{
    cursor:pointer;
    background:#000
}

`;
export const Container = styled.div`
    display:grid;

`;
