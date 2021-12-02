import React, { useState } from 'react'
import '../Call.css'
import CloseIcon from '@material-ui/icons/Close';
import GroupIcon from '@material-ui/icons/Group';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import MicIcon from '@material-ui/icons/Mic';
import CallIcon from '@material-ui/icons/Call';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import PresentToAllIcon from '@material-ui/icons/PresentToAll';
import ClosedCaptionIcon from '@material-ui/icons/ClosedCaption';

function Call() {
    let [clr,stclr]=useState('')
    let cancel=()=>{
        stclr('none')
        console.log('clicked')
        console.log(clr)
        
    }
    return (
       <>
       <div className="mains">
           <div className="card1" style={{display:clr}}>
               <CloseIcon id='cancel' onClick={cancel} />
               <h6>Your meeting's ready</h6>
               <button id='btn'>Add others</button>
               <h6 className='t'>Or share this meeting link</h6>
               <h6 id='share'>localhost:3000:dvn-dvsd-dvd</h6>
               <h6 className='t'>Joined as abc@gmail.com</h6>
           </div>
           <div className="up">
               <GroupIcon className='centre'/>
               <ChatBubbleIcon className='centre'/>
               <AccountCircleIcon className='centre'/>
           </div>
           <div className="footer">
               <div className="icon">
               <MicIcon className='fc'/>
               <CallIcon className='fc'/>
               <VideoCallIcon className='fc'/>
               <PresentToAllIcon id='present'/>
               <ClosedCaptionIcon id='cap'/>
               </div>
               
           </div>
       </div>
       </>
    )
}

export default Call;
