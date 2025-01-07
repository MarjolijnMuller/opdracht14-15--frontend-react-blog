import React from 'react';
import posts from '../../constants/data.json';
import {Link} from "react-router-dom";


function AllPosts() {
    return (
        <>
            <h1>AllPosts</h1>
            <article>
                {posts.map((post) => (
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