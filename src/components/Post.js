import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

function Post(props) {
    return (
        <div>
            {props.post && <div>
                <h1>{props.post.title}</h1>
                <p>{props.post.author}</p>
                <hr />
                <p>{props.post.content}</p>
            </div>}
            <Link to='/posts'><button>Back</button></Link>
        </div>
    )
}

let mapStateToProps = (state, props) => {
    let { id } = props.match.params
    console.log(111111111, id)
    let post = state.posts.data.find(post => Number(post.id) === Number(id))
    return { post }
}

export default connect(mapStateToProps)(Post)






// import React, { Component } from 'react'
// // import axios from 'axios'
// import { connect } from 'react-redux'
// import { Link } from 'react-router-dom'
// import Modal from 'react-modal'

// const customStyles = {
//     content: {
//         top: '50%',
//         left: '50%',
//         right: 'auto',
//         bottom: 'auto',
//         marginRight: '-50%',
//         transform: 'translate(-50%, -50%)'
//     }
// };
// Modal.setAppElement('#yourAppElement')

// class Post extends Component {
//     constructor() {
//         super()

//         this.state = {
//             modalIsOpen: false
//         }
//     }
//     openModal = () => {
//         this.setState({
//             modalIsOpen: true
//         })
//     }
//     afterOpenModal=()=> {
//         this.subtitle.style.color = '#f00';
//     }
//     closeModal = () => {
//         this.setState({
//             modalIsOpen: false
//         })
//     }

//     render() {
//         return (
//             <div>
//                 <Modal
//                     isOpen={this.state.modalIsOpen}
//                     onAfterOpen={this.afterOpenModal}
//                     onRequestClose={this.closeModal}
//                     style={customStyles}
//                 >
//                     {this.props.post && <div>
//                         <h1>{this.props.post.title}</h1>
//                         <p>{this.props.post.author}</p>
//                         <hr />
//                         <p>{this.props.post.content}</p>
//                     </div>
//                     }
//                     <Link to='/posts'><button>Back</button></Link>
//                 </Modal>
//             </div>
//         )
//     }
// }

// let mapStateToProps = (state, props) => {
//     let { id } = props.match.params
//     let post = state.posts.data.find(post =>
//         Number(post.id) === Number(id)
//     )
//     return { post }
// }

// export default connect(mapStateToProps)(Post)
