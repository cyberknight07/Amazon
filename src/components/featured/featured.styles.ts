import styled from "styled-components";


export const Feature = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    padding: 0px 6px;


    .arrow{
        width: 80px;
        height: 80px;
        position: absolute;
        top: 90px;
        stroke-width: .6;
        stroke-dashoffset: 10px;
        fill: none;
        stroke: black;
        stroke-linecap: butt;
        stroke-linejoin: bevel;
    }


    .arrow:hover{
        cursor: pointer;
    }

    .left{
        left: 10px;
    }

    .right{
        right: 10px;
    };


   
`;

export const Image = styled.img`
    display: flex;
    width: 100%;
    height: 65%;
    object-fit: contain;
`;