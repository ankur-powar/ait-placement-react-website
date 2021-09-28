import React from 'react';
import './studentDashboard.css';


function StudentDashboard(props) {
    return (
        <div>
            <div class="student-dashboard">
                <span>Student Dashboard</span>
            </div>
            <hr class="border-t border-gray" id="line-break"/>

            <div class="student-details">
                <div>
                    <img class="student-photo" src={props.imgSrc} alt="" />
                </div>
                
                <div class="student-info">
                <p class="student-text">{props.rollNo}, {props.name}</p>
                <p class="student-text">{props.regdNo}, {props.emailId}</p>
                <p class="student-text">{props.year}, {props.branch}</p>
                </div>
            </div>
            <div class="external-div">
                <a href="https://anubhav.aitoss.club" target="_blank">
                    <button class="btn btn-primary external-btn" >For AIT Exclusive Interview Experiences</button>
                </a>
            </div>
        </div>
    );
}

export default StudentDashboard;