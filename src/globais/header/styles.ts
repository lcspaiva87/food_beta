import styled from "styled-components";

export const Container = styled.div`
    grid-area: H;
    background: #ff8b00;
`;
export const Box = styled.div`
    display: flex;
    /* flex-direction: column; */
    justify-content: space-between;
    /* padding: 14px; */
    align-items: center;
    /* margin: 10px; */
    margin: 5px;
`;

export const BoxDate = styled.div`
    display: flex;
    flex-direction: column;
    /* margin-right: 16px; */
    margin-left: 21px;
`;

export const BoxUser = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 21px;
    span:first-child {
        font-weight: 700;
        font-size: 28px;
        line-height: 32.81px;
    }
    span {
        font-size: 16px;
        font-weight: 400;
        line-height: 18.75px;
    }
`;
