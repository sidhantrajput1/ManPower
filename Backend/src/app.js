

const express = require('express');
const cors = require('cors');

const app = express();

//Middleware
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    return res.status(200).json({
        message : 'I am coming from backend',
        status : true
    })
})


module.exports = app;