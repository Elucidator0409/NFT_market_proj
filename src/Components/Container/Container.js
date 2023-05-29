import React from 'react'
import "./Container.css"
import TopContainer from './TopContainer'
import MainContainer from 'Components/Container/MainContainer';

function Container() {
  return (
    <div className='container'>
        <TopContainer />
        <MainContainer />
    </div>
  )
}

export default Container