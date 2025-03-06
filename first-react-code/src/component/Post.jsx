import React, { useState } from "react";
import "./Post.css";
import image from "C:/Users/LENOVO/Desktop/PRV/IMG_20241111_113554_787.jpg";

const Post = (props) => {
    const [value, SetValue] = useState(false);
    return (
    <div className="pub">
        <img src={image} />
        <h1>{props.pub.title}</h1>
        <h1>{props.pub.nameUser}</h1>
        <h1>{props.pub.content}</h1>
        <button
            onClick={(e) => {
            if (value) {
                e.target.textContent = "subscribed";
                SetValue(!value);
            } else {
                e.target.textContent = "non";
                SetValue(!value);
            }
            }}
        ></button>
        </div>
    );
};

export default Post;
