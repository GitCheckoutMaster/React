import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import appwriteService from '../appwrite/postBlog.service.js';
import { Container, PostForm } from '../components/index.js';

function EditPost() {
    const [post, setPost] = useState(null)
    const {slug} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (slug) {
            appwriteService.getPost(slug).then((res) => {
                setPost(res);
            });
        } else {
            navigate('/');
        }
    }, [slug, navigate]);

    return post ? (
        <div className='py-8'>
            <Container>
                <PostForm post={post} />
            </Container>
        </div>
    ) : null;
}

export default EditPost