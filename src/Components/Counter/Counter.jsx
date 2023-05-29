import React from "react";
import styled from 'styled-components'


const Title = styled.h2`
    font-size: 1.5em;
    text-align: center;
    color: #BF4F74;
`;

const Wrapper = styled.section`
    padding: 4em;
    background: papayawhip;
    .sp{
        color: ${props => props.count <= 5 ? 'red' : 'orange' };
    }
`;

const PriTitle = styled(Title)`
    font-size: 3.2em;
`

export class Counter extends React.Component{
    constructor(props){
        super(props);
        this.state = {count: 0};
    }

    

    componentDidMout(){
        setTimeout(() => {this.setState({ loading: false });}, 3000);
        console.log('Did mount')
    }
    onDecrease = () => {
        this.setState({ count: this.state.count-1 });
        console.log("-1")
    }

    onIncrease = () => {
        this.setState({ count: this.state.count+1 });
        console.log("+1")
    }

    render() {
        console.log('renderrrrrrr')
        return(
            <div>
                {
                    this.state.loading?
                    <div>Loadinggg</div> :
                    <>
                        <Wrapper count={this.state.count}>
                        console.log("aaaaa")
                        <Title>Hello {this.props.name}</Title>
                        <PriTitle>Override</PriTitle>
                        <button onClick={() => this.onDecrease()}>-</button>
                        <span className="sp" style={{marginLeft:30, marginRight:30}}>{this.state.count}</span>
                        <button onClick={() => this.onIncrease()}>+</button>
                        </Wrapper>
                    </>
                }
            </div>
        )
    }


}