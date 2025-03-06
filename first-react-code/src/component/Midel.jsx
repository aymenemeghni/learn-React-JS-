import React from "react";
import Post from "./Post";

const Midel = (props) => {
    const list = props.PUB;
    const allPUB = list.map(function (e) {
        <Post pub={e} />;
    });
    return <div>{allPUB}</div>;
};
export default Midel;
