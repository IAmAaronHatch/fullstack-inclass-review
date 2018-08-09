import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

function Posts(props) {
    return (
        <div>
            {props.posts.map(post => {
                return (
                    <div key={post.id}>
                        <Link to={`/posts/${post.id}`}>
                            <h1>{post.title}</h1>
                        </Link>
                        <p>{post.author}</p>
                    </div>
                )
            })}
        </div>
    )
}

let mapStateToProps = state => {
    return {
        posts: state.posts.data
    }
}

export default connect(mapStateToProps)(Posts)