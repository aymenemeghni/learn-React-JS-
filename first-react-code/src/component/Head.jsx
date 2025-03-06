import React from "react";
import './Head.css'

const Head = () => {
    return (
        <div className="HH">
            <input type="search" placeholder="write.....;" id="search" />
            <button id="login">log in</button>
            <button id="signin">sign up</button>
        </div>
    );
};

export default Head;
