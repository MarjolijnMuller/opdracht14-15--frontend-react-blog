import React, {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import dateFormatter from '../../helpers/dateFormatter.js'
import axios from "axios";

function Blogpost() {
    const {id} = useParams();
    const [post, setPost] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");


    useEffect(() => {
        async function fetchOnePosts() {
            setErrorMessage("")
            try {
                const result = await axios.get(`http://localhost:3000/posts/${id}`);
                setPost(result.data);
                console.log(result)
            } catch (err) {
                console.log(err);
                setErrorMessage("Er is iets misgegaan. Probeer het opnieuw!");
            }
        }

        fetchOnePosts();
    }, []);

    const {
        title,
        readTime,
        subtitle,
        author,
        created,
        content,
        comments,
        shares
    } = post/*.find(post => post.id.toString() === id)*/;

    return (
        <>
            {Object.keys(post).length === 0 ?
                <>
                    <p>{errorMessage}</p>
                    <p>Terug naar de <Link to='/alle-posts'>overzichtspagina</Link></p>
                </>
                :
                <article>
                    <h2>{title} ({readTime} minuten) </h2>
                    <h3>{subtitle}</h3>
                    <p>Geschreven door {author} op {dateFormatter(created)}.</p>
                    <p>{content}</p>
                    <p>{comments} reacties - {shares} keer gedeeld</p>
                    <p>Terug naar de <Link to='/alle-posts'>overzichtspagina</Link></p>
                </article>}
        </>
    )
}

export default Blogpost;