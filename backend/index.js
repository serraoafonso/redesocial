const express = require('express')
const app = express()
const authRoutes = require('./routes/auth.js')
const userRoutes = require('./routes/users')
const postRoutes = require('./routes/posts')
const commentRoutes = require('./routes/comments')
const likeRoutes = require('./routes/likes')
const cookieParser = require('cookie-parser')
const cors = require('cors')

app.use((req, res, next)=>{
    res.header("Access-Control-Allow-Credentials", true)
    next()
})
app.use(express.json())
app.use(cors({
    origin: 'http://localhost:3001'
}))
app.use(cookieParser())


app.use("/api/users", userRoutes)
app.use("/api/auth", authRoutes)
app.use("/api/posts", postRoutes)
app.use("/api/comments", commentRoutes)
app.use("/api/likes", likeRoutes)

app.listen(8800, ()=>console.log('API working'))