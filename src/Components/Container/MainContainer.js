import React from 'react'
import "./MainContainer.css"
import { AuctionElement, Card } from '../../Components/Card';
import { Button } from 'Components/Button'
import { Creater } from 'Components/Creater'
import background from 'assests/banner.png'

function MainContainer() {
  return (
    <div>
    <div className='mainContainer'>
        <div className='left'>
            <div className='banner'
                style={{ background: `url(${background})` }}
            >

                <div className='textContainer'>
                    <h1>Discover, Create and Sell Your Own NFT.</h1>
                    <div className='button'>

                        <Button className="btn"  width={"115px"} height={"46px"} borderColor={"#E9E9E9"}>Discover</Button>
                        <Button className="btn"  width={"115px"} height={"46px"} borderColor={"#E9E9E9"}>Create</Button>
                    </div>
                </div>
            </div>
            
            
        </div>

        

       

        <div className='right'>
            
            <div className='item'>
                <div class="blank-containers"></div>
                <Card title={"Revenue"} amount={5} percent={12.3} />
                <Card title={"Revenue"} amount={5} percent={12.3} />
            </div>
            <div className='item'>
                <div class="blank-containers"></div>
                <Card title={"Revenue"} amount={5} percent={12.3} />
                <Card title={"Revenue"} amount={5} percent={12.3} />
            </div>

            <div className='ranking'>
        <Creater />
    </div>

            {/* <div className='item'><Card title={"Spending"} amount={2} percent={8} /></div>
            <div className='item'><Card title={"ROI"} content={"+14.02%"} percent={5}/></div>
            <div className='item'><Card title={"Estimated"} amount={7} percent={3} /></div> */}
        </div>
    </div>
    
    <div className='card'>
        <div className='fil'>
            <div className='filters'>
                <div className='filters-title'>
                    <h2>Trending Auctions</h2>
                </div>
            </div>
            <div className='filter-button'>
                <a href="#" className='fil-button'>Art</a>
                <a href="#" className='fil-button'>Music</a>
                <a href="#" className='fil-button'>Collectibles</a>
                <a href="#" className='fil-button'>Utility</a>
            </div>
        </div>

        <div className='auc-element'>
            <AuctionElement />
            <AuctionElement />
            <AuctionElement />
            <AuctionElement />
        </div>
    </div>

    

    
    </div>
    
  )
}

export default MainContainer