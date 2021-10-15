import React from 'react'
import '../Waiting.css';
import VideocamIcon from '@material-ui/icons/Videocam';
import KeyboardIcon from '@material-ui/icons/Keyboard';
import {NavLink} from 'react-router-dom';
import Navbar from "../components/Navbar";
import SettingsIcon from '@material-ui/icons/Settings';
import HelpIcon from '@material-ui/icons/Help';
import InfoIcon from '@material-ui/icons/Info';

function Waiting() {
    return (
        <>
        <Navbar />
        <div className="body">
            <div className="left">
                <h2 className="heading">seamless meetings!</h2>
                <p className="tagline">Experience smooth and smart meetings</p>
            
            <div className="btn">
                <NavLink to='/wait'><button className="green"><VideocamIcon className='z'/>New meeting</button></NavLink>
                <button className="simple"><KeyboardIcon className='z'/>Enter code or link</button>
                <button type="button" className="btn-join">Join</button>
                </div>
            </div>
            <div className="right">
                <div className="content">
                <img src="https://image.freepik.com/free-vector/webinar-concept-illustration_114360-4764.jpg" />
                </div>
            </div>
        </div>
   
       </>
    )
}

export default Waiting
