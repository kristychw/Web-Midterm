const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({
    extended:true
}));

app.use(bodyParser.json());

// MongoDB connection
const dbConfig = require('./config/database.config');
const mongoose = require('mongoose');

mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(()=>{
    console.log('DB is connected!');

}).catch(err=>{
    console.log('DB is NOT connected!! Please check!', err);
    process.exit();
})


app.get('/',(req, res)=>{
    res.json({
        "message": "It is working!"
    })
})

require('./app/routes/student.route')(app);

app.listen(4000, ()=>{
    console.log('Server is working!!');
})