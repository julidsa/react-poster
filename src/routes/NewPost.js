import React from 'react';
import style from './NewPost.module.css'
import Modal from '../components/Modal'
import { Form, Link, redirect } from 'react-router-dom';

export default function NewPost(props) {

    return (
        <Modal>
            <Form method='post'  className={style.form} >
                <p>
                    <label htmlFor="body">Text</label>
                    <textarea id="body" name="body" required rows={3} />
                </p>
                <p>
                    <label htmlFor="name" >Your name</label>
                    <input type="text" name="author" id="name" required />
                </p>
                <p className={style.actions}>
                    <Link type="button" to="/" >Cancel</Link>
                    <button>Submit</button>
                </p>
            </Form>
        </Modal>
    )
}

export async function action({ request }) {
    const formData = await request.formData()
    const postData = Object.fromEntries(formData); // result in {body: '...', author: '...'}
    console.log(formData)
    
    await fetch('http://localhost:8080/posts', {
        method: 'POST',
        body: JSON.stringify(postData),
        headers: {
            'Content-Type': 'application/json'
        }
    })

    return redirect('/')
}