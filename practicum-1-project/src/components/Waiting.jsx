import React from 'react'
import '../Waiting.css';
import VideocamIcon from '@material-ui/icons/Videocam';
import KeyboardIcon from '@material-ui/icons/Keyboard';
import {NavLink} from 'react-router-dom'
import SettingsIcon from '@material-ui/icons/Settings';
import HelpIcon from '@material-ui/icons/Help';
import InfoIcon from '@material-ui/icons/Info';

function Waiting() {
    return (
        <>
         <img className='ig' src="https://www.gstatic.com/meet/google_meet_horizontal_wordmark_2020q4_2x_icon_124_40_292e71bcb52a56e2a9005164118f183b.png" />
        <div className="body">
            <SettingsIcon id='setg'/>
            <HelpIcon id='help'/>
            <InfoIcon id='info'/>
            <div className="left">
                <h2>Premium video meeting</h2>
                <p>We re-engineered the service we built for secure business
              meetings, Google Meet, to make it free and available for all.</p>
            
            <div className="btn">
                <NavLink to='/wait'><button className="green"><VideocamIcon className='z'/>New meeting</button></NavLink>
                <button className="simple"><KeyboardIcon className='z'/>Enter code or link</button>
                <a id='j' href="#"><h4>join</h4></a>
                </div>
                <hr />
                <div>
         <a id='a'>Learn more</a> about google meet
            </div>
            </div>
            <div className="right">
                <div className="content">
                <img src="https://www.gstatic.com/meet/google_meet_marketing_ongoing_meeting_grid_427cbb32d746b1d0133b898b50115e96.jpg" />
                </div>
            </div>
        </div>
   
       </>
    )
}

export default Waiting
