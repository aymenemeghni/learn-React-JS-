import React from "react";
import "./Post.css";
import image from "C:/Users/LENOVO/Desktop/PRV/IMG_20241111_113554_787.jpg"

const Post = (props) => {
    return (
        <div className="pub">
        <img 
            src={image}
        />
        <h1>{props.pub.title}</h1>
        <h1>{props.pub.nameUser}</h1>
        <h1>{props.pub.content}</h1>
        </div>
    );
};

export default Post;
