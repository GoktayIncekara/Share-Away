import React from 'react'
import './popup.css'

function Popup(props) {
    return (props.trigger) ? (
        <div className='popup'>
            <div className='popup-inner'>
                <button className='cls-btn' onClick={() => props.setTrigger(false)}>OK, I understand!</button>
                {props.children}
            </div>
        </div>
    ) : "";
}

export default Popup