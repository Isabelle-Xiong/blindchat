// runs https server
const express = require("express");
// call server from any other origin
const cors = require("cors");
const axios = require("axios");
const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

// create post end point for authentication
app.post("/authenticate", async (req, res) => {
    // takes username from request body and returns a fake user with username and password
    const { username } = req.body;
    //taking username from above request, get user from chat engine if they already exist, if not then create user
    try {
        const r = await axios.put(
            'https://api.chatengine.io/users/',
            { username: username, secret: username, first_name: username },
            //private key allows us to create and destroy users
            { headers: { "private-key": "82b28663-2e6a-4d9b-bf90-d213a4cc0815" } }
        );
        //the response from the api call above will dictate the status of api call and data within it
        return res.status(r.status).json(r.data);
    } catch (e) {
        return res.status(e.response.status).json(e.response.data);
    };


    return res.json({ username: username, secret: "sha256..." });
});

app.listen(3001);