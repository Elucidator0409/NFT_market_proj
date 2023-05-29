import React, {useState} from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from 'react-router-dom';
import { SidebarData } from "./SidebarData";
import { SidebarProfileData } from "./SidebarProfileData";
import './Navbar.css';
import { IconContext } from 'react-icons'
import NftIcon from "assests/nftlogo.png"



function Navbar() {
    const [sidebar,setSidebar] = useState(false)

    const showSidebar = () => setSidebar(!sidebar)
    return(
        <>
        
            
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className="nav-menu-items" /*onClick={showSidebar}*/>
                    <li className="logo">
                        <img src={NftIcon} alt="nft"></img>
                    </li>
                    {SidebarData.map((item,index) => {
                        return(
                            <li key={index} className={item.cName}>
                                <Link to={item.path}>
                                    <img src={item.icon} alt="icon" />
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        )
                    })}
                    <li className="Title">
                        <span>PROFILE</span>
                    </li>
                    {SidebarProfileData.map((item,index) => {
                        return(
                            <li key={index} className={item.cName}>
                                <Link to={item.path}>
                                    <img src={item.icon} alt="icon" />
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        )
                    })}
                    <li className="Title">
                        <span>Other</span>
                    </li>
                </ul>
            </nav>
            
        </>
    )
}

export default Navbar