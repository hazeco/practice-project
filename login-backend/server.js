const express = require('express');
const bodyParser = require('body-parser');
const { MongoClient } = require("mongodb");
const bcrypt = require('bcrypt');
const dotenv = require('dotenv');
const jwt = require("jsonwebtoken");

dotenv.config();

const uri = process.env.MONGO_URI;
const saltRounds = process.env.SALT_ROUNDS;

const app = express();

app.use(bodyParser.json());

//register
app.post("/register", async(req,res) => {
    const { username, password } = req.body;
    const client = new MongoClient(uri, { useUnifiedTopology: true});
    try{
        await client.connect();
        const database = client.db("users");
        const collection = database.collection("user");

        const hashedPassword = await bcrypt.hash(password, parseInt(saltRounds));

        const user = await collection.insertOne({
            username: username,
            password: hashedPassword
        });
        res.json({
            success: true,
            message: "Register successful",
        })
    }catch (error){
        res.json({
            success:false,
            message: "Register failed",
        })
    }finally{
        await client.close();
    }
});

//Login
app.post("/login", async (req, res) => {
    const { username, password } = req.body;
    const client = new MongoClient(uri, { useUnifiedTopology: true });
    try {
        await client.connect();
        const database = client.db("users");
        const collection = database.collection("user");

        const user = await collection.findOne({ username: username });

        if (user) {
            const match = await bcrypt.compare(password, user.password);
            if (match) {
                const token = jwt.sign({ username: username }, process.env.SECRET, {
                    expiresIn: "1h",
                });
                res.json({
                    success: true,
                    message: "login successful",
                    token: token
                });
            } else {
                res.json({
                    success: false,
                    message: "Login failed",
                });
            }
        }else{
            res.json({
                success:false,
                message: "Login failed",
            })
        }
    } catch (error) {
        res.json({
            success: false,
            message: "Login failed",
        });
    } finally {
        await client.close();
    }
}); 

//verify token
function verifyToken(req, res, next){
    const token = req.headers["authorization"];
    if (typeof token !== "undefined") {
        jwt.verify(token, process.env.SECRET, (err, authData) => {
            if (err) {
                res.sendStatus(403);
            } else {
                next();
            }
        });
    } else {
        res.sendStatus(403);
    }
}

//Get all users
app.get("/users", verifyToken, async(req, res) => {
    const client = new MongoClient(uri, { useUnifiedTopology: true });
    try {
        await client.connect();
        const database = client.db("users");
        const collection = database.collection("user"); // Changed from "users" to "user"

        const users = await collection.find({}).toArray();
        res.json({
            success: true,  // Changed from false to true
            message: "Get users successful",
            database: users,
        });
    } catch (error) {
        console.error("Error:", error); // Add error logging
        res.status(500).json({  // Added status code
            success: false,
            message: "Get users failed",
            error: error.message
        });
    } finally {
        await client.close();
    }
});

app.listen(3000, () => {
    console.log('Server is running on port http://localhost:3000');
});