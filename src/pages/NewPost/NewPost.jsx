import React, {useState} from "react";
import readTime from "../../helpers/readTime.js";
import {Link} from "react-router-dom";
import axios from "axios";


function NewPost() {

    const [formState, setFormState] = React.useState({
        postTitle: "",
        postSubtitle: "",
        postAuthor: "",
        postContent: "",
    })
    const [errorMessage, toggleErrorMessage] = useState(false);
    const [submitSuccessId, setSubmitSuccessId] = useState(null);

    function handleChange(e) {
        const changedFieldName = e.target.name;

        setFormState({
            ...formState,
            [changedFieldName]: e.target.value,
        });

    }

    async function onFormSubmit(e) {
        e.preventDefault();
        const createdTime = new Date();
        try {
            toggleErrorMessage(false);
            const response = await axios.post('http://localhost:3000/posts/',
                {
                    "title": formState.postTitle,
                    "subtitle": formState.postSubtitle,
                    "content": formState.postContent,
                    "author": formState.postAuthor,
                    "created": createdTime.toISOString(),
                    "readTime": readTime(formState.postContent),
                    "comments": 0,
                    "shares": 0
                }
            );
            console.log(response.data)
            setSubmitSuccessId(response.data.id);
        } catch (err) {
            console.log(err);
            toggleErrorMessage(true);
        }
    }

    return (
        <>
            {/*            {Object.keys(formState).length === 0 &&
                <p>{errorMessage}</p>}
            {submitSuccessId && <>
                <p>{succesMessage}</p>
                <p>Je kunt deze <Link to='/post/${submitSuccessId}'>hier</Link> bekijken.</p>
            </>}*/}
            {!submitSuccessId ?
                <section className="new-post-section">
                    <form onSubmit={onFormSubmit}
                          className="new-post-form">
                        <h1>Nieuwe post</h1>
                        <label htmlFor="postTitle">
                            Titel:
                            <input
                                type="text"
                                id="postTitle"
                                name="postTitle"
                                onChange={handleChange}
                                required/>
                        </label>
                        <label htmlFor="postSubtitle">
                            Subtitel:
                            <input
                                type="text"
                                id="postSubtitle"
                                name="postSubtitle"
                                onChange={handleChange}
                                required/>
                        </label>
                        <label htmlFor="postAuthor">
                            Auteur:
                            <input
                                type="text"
                                id="postAuthor"
                                name="postAuthor"
                                onChange={handleChange}
                                required/>
                        </label>
                        <label htmlFor="postContent">
                            Bericht
                            <textarea
                                type="text"
                                id="postContent"
                                name="postContent"
                                onChange={handleChange}
                                minLength="300"
                                maxLength="2000"
                                required></textarea>
                        </label>
                        <button type="submit">Submit</button>
                        {errorMessage &&
                            <p>Er is iets misgegaan bij het versturen van het formulier. Probeer het opnieuw</p>}
                    </form>
                </section>
                : <p>De blogpost is succesvol toegevoegd. Je kunt deze <Link
                    to={`/post/${submitSuccessId}`}>hier</Link> bekijken.</p>}

        </>
    )
}

export default NewPost;