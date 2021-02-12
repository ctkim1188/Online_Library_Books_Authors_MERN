const express = require('express');
const app = express();
const cors = require('cors');
const routes = require('./server/routes/author.routes');

require('./server/config/mongoose.config')

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

//make sure this is below express.json()
routes(app);

app.listen(8000, () => {
    console.log("8000 is active")
})