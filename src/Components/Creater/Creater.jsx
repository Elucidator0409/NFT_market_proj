import styled from "styled-components"
import { Button } from "Components/Button";

import top1 from "assests/top1.svg"
import top2 from "assests/top2.svg"
import top3 from "assests/top3.svg"
import top4 from "assests/top4.svg"
import top5 from "assests/top5.svg"
import top6 from "assests/top6.svg"

let topUsers = [
    {
        id: 1,
        name: "Michael Jordan",
        user: "@jordan_",
        img:  top1 ,
    },
    {
        id: 2,
        name: "John Tibao",
        user: "@johnti60",
        img:  top2 ,
    },
    {
        id: 3,
        name: "Teresa",
        user: "@teresa",
        img:  top3 ,
    },
    {
        id: 4,
        name: "Johan Hawn",
        user: "@j_hawn",
        img:  top4 ,
    },
    {
        id: 5,
        name: "Maria Alison",
        user: "@m_alison",
        img:  top5 ,
    },
    {
        id: 6,
        name: "Sam Erricson",
        user: "@erricsonsam",
        img:  top6 ,
    }
];

const StyledCreater = styled.div`
    width: 400px;;
    height: 350px;

    background: #FFFFFF;
    border-radius: 16px;
    .top-creater{
        display: flex;
        justify-content: space-around;
        flex-direction: row;
        align-items: center;
        padding-top: 32px;
        margin-bottom: 10px;
        a{
            text-decoration: none;
        }        
    }
    .top-title{
        font-family: 'DM Sans';
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 31px;
        

        /* Text/color1 */

        color: #27262E;
    }
    .top-see{
        font-family: 'DM Sans';
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 21px;
        /* identical to box height */

        text-align: right;
        font-feature-settings: 'salt' on;

        /* Text/color2 */

        color: #747475;
    }
    .top-user{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
    .stt{
        margin-left: 20px;
        font-family: 'DM Sans';
        color: #27262E;
    }
    h6{
        color: #747475;
    }

    .btn {
        margin-right: 20px;
    }
    .imgg{
        position: relative;
        display: flex;
        justify-content: center;
        align-content: center;
        margin-right: 50px;
    }
`;
export const Creater = () => {
    return (
        <StyledCreater>
            <div className="top-creater">
                <div className="top-title"><span>Top Creater</span></div>
                <div><a className="top-see" href="#">See All</a></div>
            </div>
            <div className="top-users">
            {topUsers.map((topUser) => {
        const list = (
          <div className="top-user">
            <p className="stt">{topUser.id}</p>
            <img className="imgg" src={topUser.img} />
            <div className="top-users-title"><h5>{topUser.name}</h5><h6>{topUser.user}</h6></div>
            <Button className="btn"  width={78} height={36} textColor="#5429FF" bgColor="#5429ff1a" borderRadius={40} >Follow</Button>
          </div>
        );
        return list;
      })}
            </div>
        </StyledCreater>
    );
}