import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux'
import { HashRouter, Route, Switch } from 'react-router-dom'

import { getUser } from './ducks/reducers/user'

//components 
import Header from './components/Header'
import LandingPage from './components/LandingPage';
import PostsContainer from './components/PostsContainer'


class App extends Component {
  componentDidMount() {
    this.props.getUser()
  }
  

  // login = () => {
  //   let auth0domain = `https://${process.env.REACT_APP_AUTH0_DOMAIN}`
  //   let clientId = process.env.REACT_APP_AUTH0_CLIENT_ID
  //   let scope = encodeURIComponent('openid profile email')
  //   let redirectUri = encodeURIComponent(`${window.location.origin}/auth/callback`)
  //   // console.log(clientId)
    
  //   let location = `${auth0domain}/authorize?client_id=${clientId}&scope=${scope}&redirect_uri=${redirectUri}&response_type=code`

  //   window.location = location
  // }
  render() {
    return (
      <div className="App">
        <Header />
        

        <HashRouter>
          <Switch>
            <Route exact path='/' component={LandingPage} />
            <Route path='/posts' component={PostsContainer} />
          </Switch>
        </HashRouter>
        
        {/* <button onClick={this.login}>Login Please ▶</button> */}
      </div>
    );
  }
}

export default connect (null, { getUser })(App);
