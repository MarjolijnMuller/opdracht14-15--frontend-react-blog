import React from "react";
import {Link, useParams} from "react-router-dom";
import posts from '../../constants/data.json';
import dateFormatter from '../../helpers/dateFormatter.js'

function Blogpost() {
    const {id} = useParams();
    console.log(posts);

    const {
        title,
        readTime,
        subtitle,
        author,
        created,
        content,
        comments,
        shares
    } = posts.find(post => post.id.toString() === id);

    return (
        <>
            <article>
                <h2>{title} ({readTime} minuten) </h2>
                <h3>{subtitle}</h3>
                <p>Geschreven door {author} op {dateFormatter(created)}.</p>
                <p>{content}</p>
                <p>{comments} reacties - {shares} keer gedeeld</p>
                <p>Terug naar de <Link to='/alle-posts'>overzichtspagina</Link></p>
            </article>
        </>
    )
}

export default Blogpost;