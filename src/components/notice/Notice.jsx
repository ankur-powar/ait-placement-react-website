import React from 'react';
import './notice.css';

function Notice(props) {
    return (
        <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog modal-xl">
                <div class="modal-content">
                    <div class="modal-header">
                        <span class="notice-date">{props.date}</span>
                        <span class="notice-time">{props.time}</span>
                        <button type="button" class="btn btn-secondary " data-bs-dismiss="modal">Close</button>
                    </div>
                    <div class="modal-body">
                        <div class="title">
                            <span>{props.title}</span>
                        </div>

                        <div class="tag-list">
                            <span class="tag-name">{props.tags[0]}</span>
                            <span class="tag-name">{props.tags[1]}</span>
                            <span class="tag-name">{props.tags[2]}</span>
                        </div>
                        <hr/>

                        <div class="notice-text">
                            {props.text}
                        </div>
                        <hr/>

                        <div class="notice-docs">
                            <a href={props.docLink} target="_blank">
                                <img src="https://icons.iconarchive.com/icons/papirus-team/papirus-mimetypes/72/x-office-document-icon.png"></img>
                            </a>
                            <p>{props.docName}</p>
                        </div>
                    
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-primary">Posted By @Admin</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Notice;