import React from "react";

import { BiCalendar } from "react-icons/bi";
import { BiWorld } from "react-icons/bi";

export default function Navigation() {

    return (
        <nav className="navbar navbar-expand-lg navbar-light mx-5 mt-3 pb-3">
            <div className="container-fluid px-0">
                <a className="navbar-brand" href="/home">
                    <h4></h4>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 pe-5 mb-lg-0">
                        <li className="nav-item">
                            <a>
                                <input type="date" name="" className="nav-link border-0 date-picker mt-1" id="" />
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/#" id="hideListButton">
                                <BiWorld size={30}/>
                            </a>
                        </li>
                    </ul>
                    <div className="d-flex right-buttons">
                        <button>Export</button>
                    </div>
                </div>
            </div>
        </nav>
    )
}