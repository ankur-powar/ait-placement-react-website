import React from 'react';
import "./addpost.css";

function AddPost(props) {
    return (
        <div>
            <div class="external-div">
                <button class="btn btn-primary external-btn" data-bs-toggle="modal" data-bs-target="#addpost">Add Post</button>
            </div>

            <div class="modal fade" id="addpost" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog modal-xl">
                    <div class="modal-content">
                        <div class="modal-header">
                            <span class="notice-date">{props.date}</span>
                            <span class="notice-time">{props.time}</span>
                            <button type="button" class="btn btn-secondary " data-bs-dismiss="modal">Close</button>
                        </div>
                        <div class="modal-body">
                            <div class="title">
                                <input type="text" Placeholder="ADD TITLE Eg: BNY Interview ShortList" class="add-title"/>
                            </div>

                            <div class="tag-list">
                                <input type="text" Placeholder="ADD TAGS Eg: BNY JOB INTERNSHIP" class="add-title"/>
                                <span class="tag-name">{props.tags[0]}</span>
                                <span class="tag-name">{props.tags[1]}</span>
                                <span class="tag-name">{props.tags[2]}</span>
                            </div>
                            <hr/>

                            <div class="notice-text">
                                <textarea id="notice-text" name="" class="add-notice" placeholder="WRITE YOUR NOTICE HERE"/>  
                            </div>
                            <hr/>

                            <div class="notice-docs">
                                <a href={props.docLink}>
                                    <img src="https://icons.iconarchive.com/icons/papirus-team/papirus-mimetypes/72/x-office-document-icon.png"></img>
                                </a>
                                <p>{props.docName}</p>
                            </div>
                        
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-primary">Add Document</button>
                            <button type="button" class="btn btn-primary">Post</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default AddPost;