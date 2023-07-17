const db = require('../connect')
const jwt = require('jsonwebtoken')

const getRelationships = (req, res)=>{
    console.log("get")

        const q = "SELECT followerUserId FROM relationships WHERE followedUserId = ?"

    db.query(q, [req.query.followedUserId], (err, data)=>{
        if(err){
            return res.status(500).json(err)
        }else{
            return res.status(200).json(data.map(relationship=>relationship.followerUserId))
        }
    })
}

const addRelationships = (req, res)=>{
    console.log("add")
    const token = req.cookies.accessToken;
    if(!token){
        return res.status(401).json("Not logged in")
    }
    

    jwt.verify(token, "secretkey", (err, userInfo)=>{
        if(err){
            return res.status(403).json("Token is not valid")
        }

        const q = "INSERT INTO relationships (`followerUserId`, `followedUserId`) VALUES (?)"

        const values = [
            userInfo.id,
            req.body.userId
        ]

    db.query(q, [values], (err, data)=>{
        if(err){
            return res.status(500).json(err)
        }else{
            return res.status(200).json("Following")
        }
    })
})
}

const deleteRelationships = (req, res)=>{
    console.log("delete")
    const token = req.cookies.accessToken;
    if(!token){
        return res.status(401).json("Not logged in")
    }
    

    jwt.verify(token, "secretkey", (err, userInfo)=>{
        if(err){
            return res.status(403).json("Token is not valid")
        }

        const q = "DELETE FROM relationships WHERE `followerUserId` = ? and `followedUserId` = ?"

    db.query(q, [userInfo.id, req.query.userId], (err, data)=>{
        if(err){
            return res.status(500).json(err)
        }else{
            return res.status(200).json("Unfollowed")
        }
    })
})
}

module.exports = {getRelationships, addRelationships, deleteRelationships}