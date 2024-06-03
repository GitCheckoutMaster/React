import React, { useState } from 'react'
import appwriteService from '../appwrite/postBlog.service.js'
import { PostCard, Container } from "../components/index.js";
import { Query } from 'appwrite';
import { useSelector } from 'react-redux';

function AllPosts() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const userId = useSelector(state => state.auth.userData.$id);

    appwriteService
		.getPosts([
			Query.equal("status", "active"),
			Query.equal("userId", userId),
		])
		.then((res) => {
			setPosts(res.documents);
			setLoading(false);
		});

    return !loading ? (
        <div className='py-8'>
            <Container>
                {posts.map((post) => (
                    <div key={post.$id} className='p-2 w-1/4'>
                        <PostCard {...post} />
                    </div>
                ))}
            </Container>
        </div>
    ) : (
        <div className='py-8'>
            Loading.....
        </div>
    )
}

export default AllPosts