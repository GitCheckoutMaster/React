import React from 'react'
import { Container, PostForm } from "../components/index.js"
import { useSelector } from 'react-redux'

function AddPost() {

    return (
        <div className='py-8'>
            <Container>
                <PostForm />
            </Container>
        </div>
    )
}

export default AddPost
