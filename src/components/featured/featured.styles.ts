import styled from "styled-components";


export const Banner = styled.div`
    display: flex;
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
    }
`;

export const Feature = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    padding: 0px 6px;
`;

export const Image = styled.img`
    display: flex;
    width: 100%;
    height: 65%;
    object-fit: contain;
`;

export const FeatureCard = styled.div`
    display: flex;
    width: 96.5%;
    position: absolute;
    padding: 0px 20px;
    gap: 25px;
    top: 200px;
    background-color: #e9f7e542;
`;

