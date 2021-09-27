import React from 'react';
import './menubar.css';

function Menubar() {
    return (
        <div class="menu-bar">
            <div class="nav-item dropdown filter">
            <a class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Filter
            </a>
            <ul class="dropdown-menu extra-width" aria-labelledby="navbarDropdown">
                <li><a class="dropdown-item" href="#">Jobs</a></li>
                <li><a class="dropdown-item" href="#">Interships</a></li>
                <li><a class="dropdown-item" href="#">Workshops</a></li>
                <li><a class="dropdown-item" href="#">Contests</a></li>
            </ul>
            </div>
            <div class="search-bar">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            </div>
        </div>

    );
}

export default Menubar;