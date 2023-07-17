const express = require('express')
const app = express()
const authRoutes = require('./routes/auth.js')
const userRoutes = require('./routes/users')
const postRoutes = require('./routes/posts')
const commentRoutes = require('./routes/comments')
const likeRoutes = require('./routes/likes')
const relationshipRoutes = require('./routes/relationships.js')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const multer = require('multer')

app.use((req, res, next)=>{
    res.header("Access-Control-Allow-Credentials", true)
    next()
})
app.use(express.json())
app.use(cors({
    origin: 'http://localhost:3000'
}))
app.use(cookieParser())


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, '../frontend/public/uploads')
    },
    filename: function (req, file, cb) {
      
      cb(null, Date.now() + file.originalname)
    }
  })
  
  const upload = multer({ storage: storage })

  app.post("/api/upload", upload.single("file"), (req, res)=>{
    const file = req.file;
    res.status(200).json(file.filename)
  })


app.use("/api/users", userRoutes)
app.use("/api/auth", authRoutes)
app.use("/api/posts", postRoutes)
app.use("/api/comments", commentRoutes)
app.use("/api/likes", likeRoutes)
app.use("/api/relationships", relationshipRoutes)

app.listen(8800, ()=>console.log('API working'))