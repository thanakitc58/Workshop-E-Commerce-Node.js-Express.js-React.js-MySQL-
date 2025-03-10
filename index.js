//Step 1 import
const express = require('express')
const app = express()
const morgan = require('morgan')


//middelware
app.use(morgan('dev'))

//Step 3 Router
app.get('/api', (req, res) => {
    res.send('Server is runningg....');
});


//Step 2 start server
app.listen(5002,
    () => console.log('Server is running o port 5002'))