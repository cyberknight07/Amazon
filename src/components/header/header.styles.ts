import styled from "styled-components";

export const Heading = styled.header`
    display: flex;
    align-items: center;
    flex: 1 1 auto;
    gap: 12px;
    background-color: #0f1111;
    font-size: 12px;
    color: #fff;
    line-height: 14px;
    padding-right: 16px;
    position: sticky;
    top: 0px;
    z-index: 1000;

`;

export const Image = styled.div`
  img {
    width: 100px;
    height: auto;
    object-fit: contain;
  }
`;

export const Bold = styled.strong`
    font-size: 16px;
    font-weight: 800;
`;

export const Location = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Search = styled.div`
    display: flex;
    align-items: center;
    flex: 1;

    input{
        border-radius: 5px;
        border: 0px;
        padding: 8px;
        flex: 1;
    }
`;

export const Actions = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
`;


