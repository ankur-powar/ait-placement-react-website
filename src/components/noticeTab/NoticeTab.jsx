import React from 'react';
import './noticeTab.css';

function NoticeTab(props) {
    return (
        <div class="notice-tab">
            <div class="notice-title-block" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
            <div class="title">
                <span>{props.title}</span>
            </div>

            <div class="tag-list">
                <span class="tag-name">{props.tags[0]}</span>
                <span class="tag-name">{props.tags[1]}</span>
                <span class="tag-name">{props.tags[2]}</span>
            </div>
            </div>

            <div class="notice-date-block">
                <div class="date">{props.date}</div>
                <div class="time">{props.time}</div>
            </div>
        </div>
    );
}

export default NoticeTab;



