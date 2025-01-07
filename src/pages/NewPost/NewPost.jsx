import React from "react";
import readTime from "../../helpers/readTime.js";
import {useNavigate} from "react-router-dom";


function NewPost() {

    const [formState, setFormState] = React.useState({
        postTitle: "",
        postSubtitle: "",
        postAuthor: "",
        postContent: "",
    })
    const navigate = useNavigate();

    function handleChange(e) {
        const changedFieldName = e.target.name;

        setFormState({
            ...formState,
            [changedFieldName]: e.target.value,
        });
    }



    function onFormSubmit(e) {
        e.preventDefault();
        const createdTime = new Date();
        console.log({"title" : formState.postTitle,
        "subtitle" : formState.postSubtitle,
        "content" : formState.postContent,
        "author" : formState.postAuthor,
        "created": createdTime.toISOString(),
        "readTime": readTime(formState.postContent),
        "comments": 0,
        "shares": 0})
        navigate("/alle-posts")
    }

    return (
        <>
            <h1>NewPost</h1>
            <section className="new-post-section">
                <form onSubmit={onFormSubmit}
                      className="new-post-form">
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
                        <button type="submit">Submit</button>
                    </label>
                </form>
            </section>
        </>
    )
}

export default NewPost;