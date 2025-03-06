import React from 'react'
import './Post.css'

const Post = (props) => {
    
    return (
    <div key={props.id}>
        <img src="C:\Users\LENOVO\Desktop\PRV" alt="" />
        <h1>{props.title}</h1>
        <h1>{props.nameUser}</h1>
        <h1>{props.content}</h1>

    </div>
)
}

export default Post;