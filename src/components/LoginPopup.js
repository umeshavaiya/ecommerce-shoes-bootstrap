import React from 'react'
import './LoginPopup.css'

function LoginPopup(props) {
    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
            <h3>Hell</h3>
                {props.children}
            </div>
        </div>
    ) : "";
}

export default LoginPopup
