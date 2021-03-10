import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default props => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                console.log(response.data)
                setPosts(response.data)
            })
    }, [])

    function getTitle() {
        return posts.map(post => {
            return <li key={post.id}>{post.title}</li>
        })
    }

    return (
        <div>
            <ul>
                {getTitle()}
            </ul>
        </div>
    )

}