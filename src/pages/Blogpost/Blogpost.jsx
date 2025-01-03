import React from "react";
import {useParams} from "react-router-dom";

function Blogpost() {
    const {id} = useParams();

    return (
        <>
        <h1>Blogpost</h1>
        <div>Het postnummer is {id}</div>
        </>
    )
}
export default Blogpost;