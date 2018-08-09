const express = require('express')
const bodyParser = require('body-parser')
const session = require('express-session')
const massive = require('massive')
const path = require('path')
require('dotenv').config()

const app = express()
const port = process.env.PORT || 4007

app.use(bodyParser.json())
app.use(express.static(`${__dirname}/../build`))

//controllers
const AuthCtrl = require('./controllers/AuthCtrl')
const PostsCtrl = require('./controllers/PostsCtrl')

massive(process.env.CONNECTION_SESSION).then(db => {
    app.set('db', db)
    console.log('Never gonna run around and desert db!')
})

app.use(session({
    secret: process.env.SESSION_SECRET,
    saveUninitialized: false,
    resave: false,
}))

//endpoints
app.get('/auth/callback', AuthCtrl.auth)
app.get('/api/currentUser', (req, res) => {
    res.send(req.session.user)
})
app.get('/api/logout', (req, res) => {
    req.session.destroy()
    res.sendStatus(200)
})

//endpoints for posts
app.get('/api/posts', PostsCtrl.read)
app.post('/api/posts', PostsCtrl.create)



app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, '../build/index.html'), function (err) {
        if (err) {
            res.status(500).send(err)
        }
    })
})

app.listen(port, () => {
    console.log(`Never gonna give ${port} up, Never gonna let ${port} down.`)
})