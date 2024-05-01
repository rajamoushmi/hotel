const express = require("express");
const mongodb = require("mongodb");
const cors = require("cors");

const app = express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

mongodb.connect("mongodb+srv://prasunna:prasunna@cluster0.hak77fw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log("MongoDB connected")
})

const userSchema = new mongodb.Schema({
    name: String,
    email: String,
    password: String
})

const User = new mongodb.model("Users", userSchema)
//Routes
app.post("/login", (req, res)=> {
    const { email, password} = req.body
    User.findOne({ email: email}, (err, user) => {
        if(user){
            if(password === user.password ) {
                res.send({message: "Login Successfull", user: user})
            } else {
                res.send({ message: "Password didn't match"})
            }
        } else {
            res.send({message: "User not registered"})
        }
    })
}) 


app.post("/signin", (req, res)=> {
    const { name, email, password} = req.body
    User.findOne({email: email}, (err, user) => {
        if(user){
            res.send({message: "User already registerd"})
        } else {
            const user = new User({
                name,
                email,
                password
            })
            user.save(err => {
                if(err) {
                    res.send(err)
                } else {
                    res.send( { message: "Successfully Registered, Please login now." })
                }
            })
        }
    })
    
}) 

app.get("/getUsers",(req,res)=>{
    res.json(users)
}).catch(function(err){
    console.log(err)
})

app.listen(3001,() => {
    console.log("Express server (Web Server) started at port 3001")
})