import React from "react";
import { useLoaderData } from "react-router-dom";
import Post from "./Post.js";
import style from "./PostList.module.css";

export default function List() {
    const posts = useLoaderData()
    const myPosts = posts.map((post) => <Post key={post.id} id={post.id} author={post.author} body={post.body} />)

    return (
        <>  
            {posts.length > 0 &&
                <ul className={style.posts}>
                    {myPosts}
                </ul>
            }
            {posts.length === 0 && (
               <div style={{textAlign: "center", color: "white" }} >
                    <h2>There are no posts yet. </h2>
                    <p>Start adding some!</p>
               </div>
            )}
        </>
    )
}