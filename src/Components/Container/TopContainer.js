import React from 'react'
import { BiSearchAlt } from 'react-icons/bi'
import { FaBell } from 'react-icons/fa'
import ProfImg from 'assests/tony.webp'
function TopContainer() {
  return (
    <div className='topContainer'>
        <div className='inputBox'>
            <input type='text' placeholder='Search Item, Collection and Account..'></input>
            <i><BiSearchAlt/></i>
        </div>

        <div className='profileContainer'>
            <i className='profileIcon'>
                <FaBell />    
            </i> 

            <div className='profileImage'>
                <img src={ProfImg} alt="111"/>
            </div>       
        </div>   
    </div>
  )
}

export default TopContainer