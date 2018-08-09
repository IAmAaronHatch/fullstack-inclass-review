import React from 'react'
import logo from '../logo.svg';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { logout } from '../ducks/reducers/user'


function Header(props) {
    return (
        <div style={styles.header}>
            <div id='logo' style={styles.logo}>
                <Link to='/'><h1>WSL1 Rocks!</h1></Link>
                <img src={logo} className="App-logo" alt="logo" />
            </div>
            <div id='navbar' style={styles.navbar}>
                <Link to='/posts'><button>Posts</button></Link>
                {/* this is to check, if they are logged in, show logout button, vice versa */}
                {props.user ?
                    <Link to='/' onClick={props.logout}><button>Logout</button></Link> :
                    <Link to='/'><button>Login</button></Link>
                }
            </div>
        </div>
    )
}

let mapStateToProps = state => {
    let { data } = state.user
    return {
        user: data
    }
}

export default connect(mapStateToProps, {logout})(Header)

let styles = {
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: 20,
        alignItems: 'center',
        backgroundColor: 'gray',
        // textDecoration: 'none'
    },
    logo: {
        flex: 4,
        display: 'flex',
        justifyContent: 'flex-start',
        // textDecoration: 'none',
    },
    navbar: {
        flex: 1,
        display: 'flex',
        justifyContent: 'space-around',
    },

}