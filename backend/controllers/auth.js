const db= require('../connect');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');


function login(req, res){
  const q = "SELECT * FROM users WHERE username = ?";

  db.query(q, [req.body.username], (err, data)=>{
    if(err){
      return res.status(500).json(err)
    }if(data.length == 0){
      return res.status(404).json("User not found")
    }
    const checkPassword = bcrypt.compareSync(req.body.password, data[0].password)

    if(!checkPassword){
      return res.status(400).json("Wrong password or username!")
    }
    const token = jwt.sign({id: data[0].id}, "secretkey") //vai meter nos cookies um cookie secretkey com o seu valor

    const {password, ...others}/*pega todas exceto a password*/= data[0] 

    res.cookie("accessToken", token, {
      httpOnly: true,
    }).status(200).json(others)
  })
}

function register(req, res){
  
  const q = "SELECT * FROM users WHERE username = ?"

  db.query(q, [req.body.username], (err, data)=>{
    if(err){
        return res.status(500).json(err)
    }
    if(data.length/*se o user já exister*/){
        return res.status(409).json("User already exists!")
    }
    const salt = bcrypt.genSaltSync(10)
  const hashedPassword = bcrypt.hashSync(req.body.password, salt)
   const q = "INSERT INTO users (username, email, password, name) VALUES (?,?,?,?)";

  db.query(q, [req.body.username, req.body.email, hashedPassword, req.body.name], (err, data)=>{
    if(err){
        return res.status(500).json(err)
    }else{
        return res.status(200).json("User has been created!")
    }
  })
  })


}

function logout(req, res){
  res.clearCookie("accessToken", {
    secure: true,
    sameSite: "none"
  }).status(200).json("User has been loged out")
}

module.exports = {login, register, logout}