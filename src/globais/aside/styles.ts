import styled from "styled-components";

export const Container = styled.div`
    grid-area: AS;
    background: #f0f0f0;
    ul {
        width: 100%;
        padding-left: 17px;
        padding-top: 173px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 2rem;
        align-items: center;

        li {
            position: relative;
            list-style: none;
            width: 100%;
            a {
                position: relative;
                display: block;
                width: 100%;
                display: flex;
                text-decoration: none;
                color: #000;
                .icon {
                    position: relative;
                    display: block;
                    min-width: 60px;
                    height: 60px;
                    line-height: 60px;
                    text-align: center;
                }
                .icon svg {
                    font-size: 1.5em;
                }
                .title {
                    position: relative;
                    display: block;
                    padding-left: 10px;
                    height: 60px;
                    line-height: 46px;
                    white-space: normal;
                }
            }
        }
    }
`;
