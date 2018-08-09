import React, { Component } from 'react'
// import axios from 'axios'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom'

import { getPosts } from '../ducks/reducers/posts'

//controllers
import Posts from './Posts'
import Post from './Post'

class PostsContainer extends Component {

    componentDidMount() {
        this.props.getPosts()
    }

    render() {
        return (
            <Switch>
                <Route exact path='/posts' component={Posts} />
                <Route path='/posts/:id' component={Post} />
            </Switch>
        )
    }
}

export default connect(null, {getPosts})(PostsContainer)
