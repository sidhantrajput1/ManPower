

const app = require('./app.js');
const dotenv = require('dotenv');


// load enviroment variable from .env file
dotenv.config();


const PORT = process.env.PORT || 5500;

app.listen(PORT, () => {
    console.log(`Server is running on PORT https://localhost:${PORT}`)
})

