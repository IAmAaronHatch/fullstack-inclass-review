import React from 'react'
import logo from '../logo.svg';
import { connect } from 'react-redux'


function Header (props) {
    return (
        <div style={styles.header}>
            <div id='logo' style={styles.logo}>
                <h1>WSL1 Rocks!</h1>
                <img src={logo} className="App-logo" alt="logo" />
            </div>
            <div id='navbar'style={styles.navbar}>
                <a href=''>Posts</a>
                {/* this is to check, if they are logged in, show logout button, vice versa */}
                {props.user ? <a href=''>Logout</a> : <a href=''>Login</a>}
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

export default connect(mapStateToProps)(Header)

let styles = {
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: 20,
        alignItems: 'center',
        backgroundColor: 'gray',
    },
    logo: {
        flex: 4,
        display: 'flex',
        justifyContent: 'flex-start',
    },
    navbar: {
        flex: 1,
        display: 'flex',
        justifyContent: 'space-around',
    }
}