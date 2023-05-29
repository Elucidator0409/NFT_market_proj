import styled from "styled-components"
import greenArrow from "assests/green-arrow.png"
import redArrow from "assests/red-arrow.png"
const ButtonWrapper = styled.button`
    width:${props => `${props.width}px`};
    height:${props => `${props.height}px`};
    border: ${props => props.borderColor  ? `1px solid ${props.borderColor}` : `none`};
    border-radius: 12px;
    background: ${props => props.bgColor};
    font-weight: 500;
    font-size: 16px;
    line-height: 21px;
    letter-spacing: -0.02em;
    color:${props => props.textColor};
    padding: 11px 22px;
    img {
        margin-right: 8px;
    }

`;

export const Button = ({ width, height, textColor, bgColor, borderColor, percent , children, ...rest }) => {
    return <ButtonWrapper 
    percent={percent}
    width={width}
    height={height}
    textColor = {textColor}
    bgColor = {bgColor}
    borderColor = {borderColor}
    {...rest}
    >

        {percent && <img src={percent<6 ?redArrow : greenArrow} alt="arr"></img>}
        {children}
    </ButtonWrapper>
}

Button.defaultProps = {
    textColor: '#5429FF',
    bgColor: '#FFFFFF',
    width: 128,
    height:46
}