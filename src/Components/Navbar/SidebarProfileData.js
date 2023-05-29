import React from "react";


import PortfolioIcon from "assests/portfo.png"
import Wallet from "assests/wallet.png"
import Favourites from "assests/fav.png"
import History from "assests/history.png"
import Settings from "assests/setting.png"



export const SidebarProfileData = [
    

    {
        title: 'My Portfolio',
        path: '/portfolio',
        icon: PortfolioIcon,
        cName: 'nav-text'

    },

    {
        title: 'Wallet',
        path: '/Wallet',
        icon: Wallet,
        cName: 'nav-text'

    },

    {
        title: 'Favourites',
        path: '/favourites',
        icon: Favourites,
        cName: 'nav-text'

    },

    {
        title: 'History',
        path: '/history',
        icon: History,
        cName: 'nav-text'

    },

    {
        title: 'Settings',
        path: '/settings',
        icon: Settings,
        cName: 'nav-text'

    },

    

    

    

]