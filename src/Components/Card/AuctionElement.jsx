import React from "react";
import Product1 from "assests/product1.png"
import styled from "styled-components"
import { Button } from 'Components/Button'
import EthIcon from "assests/eth.png"
import ProfImg from 'assests/tony.webp'

const Title = styled.h4`
    
    text-align: left;
    width: 143px;
    height: 31px;

    font-family: 'DM Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 31px;
    margin-left: 20px ;
    

`;

const Wrapper = styled.section`
    width: 348px;
    height: 364px;
    background: #FFFFFF;
    border-radius: 12px;
    box-shadow: 0px 3px 4px #999;
    display: flex;
    flex-direction: column;
    gap:15px;
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
        margin-top: 0px;
    }
    .btn{
        margin-left: 5px;
        margin-top: 20px;
    }
    

    .profileImage img{
        object-fit: cover;
        width: 28px;
        height: 28px;
        border-radius: 50%;
    }

    .title{
        display: flex;
        justify-content: space-between;
    }

    .likes{
        margin-right: 20px ;
        margin-top: 7px;
        width: 150px;
        height: 21px;
        left: 247px;
        top: 240px;

        font-family: 'DM Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 21px;
        text-align:right;

    }
    .status{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .status img{
        
    }
`


export const AuctionElement = ({ title, likes ,name, amount}) => {
    return (
        <Wrapper>
            <img src={Product1} alt="eth"></img>
            <div className="title">
                <Title>Smilling Ape</Title>
                <span className="likes">21,5K Likes</span>
            </div>
            <div className="name-tag">
                <span className='profileImage'>
                    <img src={ProfImg} alt="111"/>
                </span>  
                <span>@ m_tony</span>
            </div>

            <div className="status">
                <span>Current Bid</span>
                <span className="sp"><img src={EthIcon} alt="eth"></img><span className="amount"> 6,12</span>  ETH</span>
            </div>
            
          
            
            
            
            
           
        </Wrapper>
    )
}