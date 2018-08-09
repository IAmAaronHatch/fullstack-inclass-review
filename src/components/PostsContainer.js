import React, { Component } from 'react'
// import axios from 'axios'
import { connect } from 'react-redux'

import { getPosts } from '../ducks/reducers/posts'

class PostsContainer extends Component {

    componentDidMount() {
        this.props.getPosts()
    }

    render() {
        return (
            <div>
                posts Container
            </div>
        )
    }
}

export default connect(null, {getPosts})(PostsContainer)
