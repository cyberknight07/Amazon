import styled from "styled-components";

export const SubHeading = styled.div`
    display: flex;
    padding: 0px 12px;
    gap: 12px;
    font-size: 12px;
    overflow-x: auto;
    scrollbar-width: none;
    background-color: #1e2323;
    color: #fff;

    .list{
        display: flex;
        gap: 12px;
    }

    .all, .list-item{
        display: flex;
        text-align: center;
        padding: 8px;
        width: max-content;
    }

    .all:hover, .list-item:hover{
        border: 1px solid #fff;
        border-radius: 4px;
        cursor: pointer;
    }
`;