import React from 'react'
import style from './Post.module.css'
import { Link } from 'react-router-dom'

export default function Post({ id, author, body}) {
    return (
        <li className={style.post}>
            <Link to={id}>
                <p className={style.author}>{author} </p >
                <p className={style.text}>{body}</p>
            </Link>
        </li>
    )
}