import React from 'react'
import './homebar.css'

function Homebar() {
    return (
        <div className='navbar'>
            <div className="topLeft">
                <div className="logo"></div>
                <a className="name" href="/"><div className="link-text">AIT PLACEMENT CELL</div></a>
            </div>   
            <div className="topRight">
                <ul className="topList">
                    <li className="topListItem"> 
                        <a href="/student"><div className="link-text">Student</div></a> 
                    </li>
                    <li className="topListItem">
                        <a href="/admin"><div className="link-text">Admin</div></a>  
                    </li>
                </ul>
            </div>     
        </div>
    );
}

export default Homebar;

