import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

import DashIcon from "assests/dashboard.png"
import MarketIcon from "assests/market.png"
import BidIcon from "assests/bid.png"

import PortfolioIcon from "assests/portfo.png"
import Wallet from "assests/wallet.png"
import Favourites from "assests/fav.png"
import History from "assests/history.png"
import Settings from "assests/setting.png"



export const SidebarData = [
    {
        title: 'Dashboard',
        path: '/',
        icon: DashIcon,
        cName: 'nav-text'

    },

    {
        title: 'Market',
        path: '/market',
        icon: MarketIcon,
        cName: 'nav-text'

    },

    {
        title: 'Active Bids',
        path: '/activebids',
        icon: BidIcon,
        cName: 'nav-text'

    },

  

    

    

]