import React from "react";
import EthIcon from "assests/eth.png"
import styled from "styled-components"
import { Button } from 'Components/Button'

const Title = styled.h4`
    
    text-align: left;
    color: #747475;
    margin: 20px 30px;

    font-family: 'DM Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 18px;

`;

const Wrapper = styled.section`
    width: 164px;
    height: 167px;
    background: #FFFFFF;
    border-radius: 12px;
    box-shadow: 0px 3px 4px #999;
    display: flex;
    flex-direction: column;
    margin : 0.5rem;

    .sp{
        color: #747475;
    }

    .amount{
        color: black;
        font-family: 'DM Sans';
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 31px;

    }

    img{
        margin-top: 5px;
    }
    .btn{
        margin-left: 5px;
        margin-top: 20px;
    }
`


export const Card = ({ title, amount, percent ,content}) => {
    return (
        <Wrapper>
            <Title>{title}</Title>
            { amount ?
            <span className="sp"><img src={EthIcon} alt="eth"></img><span className="amount"> {amount}</span>  ETH</span>
            :
            <span className="amount">{content}</span>
            }
            <Button className="btn" percent={percent} width={"115px"} height={"46px"} borderColor={"#E9E9E9"}>{percent}%</Button>
        </Wrapper>
    )
}