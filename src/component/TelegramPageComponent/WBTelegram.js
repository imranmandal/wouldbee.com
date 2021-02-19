import React , { useState } from 'react';
import Navbar from '../Navbar';
import TelegramCard from './TelegramCard'
import ReactPlayer from 'react-player';

// TODO: reduce extra spacing
 
function Telegram() {
    return (
        <div>
            <Navbar />
            <div className="telegram-outer">
                <h1>Would Bee on Telegram</h1>
                <p className="outer-p">Would Bee is world's first digital matrimony service that is offered through a Telegram Bot. With our Telegram Bot, you can get the curated biodata of your matches right in your Telegram messenger.</p>
                <div className="telegram-inner">
                    <div className="telegram-inner-upper" >
                            <TelegramCard
                                icon="mobile"
                                text="Install Telegram"
                                link="https://play.google.com/store/apps/details?id=org.telegram.messenger&hl=en_IN&gl=US"
                            />
                            <TelegramCard
                                icon="paper-plane"
                                text="Send Bio Data"
                                link=""
                            />
                            <TelegramCard
                                icon="heart"
                                text="Get Curated Profiles"
                                link=""
                            />
                    </div>
                    <div className="telegram-btn">
                        <button> 
                            <a href="https://t.me/WouldBee_Bot">
                                <i className="fa fa-paper-plane"></i>
                                Register on Telegram 
                            </a>                       
                                                
                        </button>
                    </div>
                </div>
                <div className="telegram-video">
                <p>This Youtube video explains how to Register for our Telegram service in just 5 minutes.</p>
                        <ReactPlayer
                            className="react-player"
                            url="https://youtu.be/wgnfPBLghZQ"
                            height="65%"
                            width="100%"
                        />
                </div>
                
            </div>
            
            
           
        </div>
  )
}
 
export default Telegram;
 