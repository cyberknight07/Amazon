import styled from "styled-components";

export const BoxCard = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1 1 0;
    gap: 10px;
    background: white;
    padding: 0px 10px 10px 10px;
    border-radius: 8px;

    p:first-child{
        font-weight: 700;
        font-size: 24px;
    }

`;

export const Cat = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 16px;

    div{
        display: flex;
        flex-direction: column;
        flex: 1 1 calc(50% - 8px);
        align-items: center;
        overflow: hidden;
        gap: 8px;

        img{
            width: 100%;
            height: 150px;
            object-fit: cover;
            border-radius: 4px;
        }

        span{
            font-size: 12px;
            text-align: center;
            font-weight: 600;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            width: 100%;
        }
    }
`;