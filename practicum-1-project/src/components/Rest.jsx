import React from 'react'
import '../rest.css';
import Navbar from "./Navbar";
import CallIcon from '@material-ui/icons/Call';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

function Rest() {
    return (
        
        <div className='main2'>
        <Navbar />
            <h5 id='side'>xyz@gmail.com</h5>
            <AccountCircleIcon id='acc'/>
            <div className="centre-left">
                <h3 id='cam'>Camera is off</h3>
                <CallIcon id='callof'/>
                <VideoCallIcon id='vdc'/>
            </div>

            <div className="centre-right">
                <h3>Wait till someone allows</h3>
                <button id='ask'>Ask to join</button>
                <button id='presentit'>Present</button>
            
            </div>
        </div>
    )
}

export default Rest
