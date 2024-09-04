import React from 'react'
import './banner.css'

const banner = () => {
    return (
        <div className='banner'>
            <div><h1 >MANN’S</h1></div>
            <div><p>DISCOVER THE POER OF MANN’S IN CREATING A HAPPY AND
                FULFILLING LIFE .TAKE THE FIRST STEP TOWARDS MENTAL-WELL
                BEING AND OVERALL HAPPINESS.</p></div>
            <div>
                <button className='checkedone'>Services</button>
                <button className='uncheckedone'>About-us</button>
            </div>
        </div>
    )
}

export default banner
