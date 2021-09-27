import React from 'react';
import './navbar.css';

function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg navbar-light nav-color">
            <div class="container-fluid">
                <div class="brand">AIT Placement Cell</div> 
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <button class="btn btn-success mainBtn" >Profile</button>
                    <button class="btn btn-danger mainBtn" >Logout</button>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;