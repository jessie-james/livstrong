import React from "react"
import { Link } from 'react-router-dom'

function Nav() {
    return (
        <div className="liveStrong-nav-wrapper">
            <div className="liveStong-logo"></div>
            <div className="nav-listContanier">
                <ul>
                    <li>Who Are we?</li>
                    <ul>Our Team
                        <li>Therapy</li>
                        <li>Staff</li>
                    </ul>
                    
                    <li>The Right Fit</li>
                    <li></li>
                    <li>Contact</li>
                    <li>Admissions</li>
                </ul>
            </div>
        </div>
    )
}
export default withContext(Nav);