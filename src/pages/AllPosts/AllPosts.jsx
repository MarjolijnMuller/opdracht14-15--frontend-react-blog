import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import axios from "axios";


function AllPosts() {
    /*les 15*/

    const [allPosts, setAllPosts] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        async function fetchPosts() {
            setErrorMessage("");
            try {
                const result = await axios.get('http://localhost:3000/posts');
                setAllPosts(result.data);
                console.log(result)
            } catch (err) {
                console.log(err);
                setErrorMessage("Er is iets misgegaan. Probeer het opnieuw!");
            }
        }

        fetchPosts();
    }, []);

    /*functies voor buttons*/


    /*async function fetchOnePosts() {
        try {
            const result6 = await axios.get('http://localhost:3000/posts/6');
            console.log(result6)
        } catch (err) {
            console.log(err);
        }
    }*/

/*    async function setNewPost() {
        try {
            const result = await axios.post('http://localhost:3000/posts/', {
                "title": "Wat gebruiker heeft ingevuld",
                "subtitle": "Wat gebruiker heeft ingevuld",
                "content": "Wat gebruiker heeft ingevuld, in dit geval minder dan 100 woorden",
                "author": "Voornaam achternaam",
                "created": "2023-09-21T09:30:00Z",
                "readTime": 1,
                "comments": 0,
                "shares": 0
            });
            console.log("het is gelukt " + result)
        } catch (err) {
            console.log(err);
        }
    }*/

    /*async function deletePost() {
        try {
            const result = await axios.delete('http://localhost:3000/posts/20');
            console.log(result);
        } catch (err) {
            console.log(err);
        }
    }*/

    /*async function changePost() {
        try {
            const result = await axios.put('http://localhost:3000/posts/1',
                {
                    "title": "De Smaken van Italië",
                    "subtitle": "New subtitle",
                    "content": "Italië, het land van heerlijke pasta, pizza en gelato, is een culinair paradijs dat elke fijnproever moet ervaren. In deze blog nemen we je mee op een smakelijke reis door Bella Italia. Ontdek de geheimen achter de perfecte risotto, leer hoe je zelfgemaakte pasta maakt en proef de verrukkelijke regionale gerechten van Noord tot Zuid. Bereid je voor om je smaakpapillen te verwennen in de keuken van de laarsvormige natie.",
                    "created": "2023-09-21T09:30:00Z",
                    "author": "Anna de Kok",
                    "readTime": 5,
                    "comments": 12,
                    "shares": 8
                }
            );
            console.log(result)
        } catch (err) {
            console.log(err);
        }
    }*/

    /*eind les 15*/
    return (
        <>
            <h1>AllPosts</h1>

            {/*les 15*/}
            {Object.keys(allPosts).length === 0 && <p>{errorMessage}</p>}
            {/*buttons om de functies te testen met requests*/}

            {/*<button type="button"
                    onClick={() => {
                        fetchPosts()
                    }}>
                Alle posts ophalen
            </button>*/}

            {/*<button type="button"
                    onClick={() => {
                        fetchOnePosts()
                    }}>
                Alleen post 6 ophalen
            </button>*/}

            {/*<button type="button"
                    onClick={() => {
                        setNewPost()
                    }}>
                Nieuwe post sturen
            </button>*/}

            {/*<button type="button"
                    onClick={() => {
                        deletePost()
                    }}>
                Delete post
            </button>

            <button type="button"
                    onClick={() => {
                        changePost()
                    }}>
                Wijzig post
            </button>*/}

            {/*eind les 15*/}
            <article>
                {allPosts.map((post) => (
                    <div className="blogPostContainer" key={post.title}>

                        <h2><Link to={`/post/${post.id}`}>
                            {post.title} ({post.author})
                        </Link></h2>

                        <p>{post.comments} reacties - {post.shares} keer gedeeld</p>
                    </div>
                ))}
            </article>
        </>
    )
}

export default AllPosts;