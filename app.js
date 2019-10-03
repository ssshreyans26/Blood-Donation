var express = require('express'),
     app = express(),
     port = 5000,
     mongoose = require('mongoose');


mongoose.connect(
    'mongodb+srv://Admin:admin@cluster0-njbbm.mongodb.net/admin?retryWrites=true&w=majority',{useNewUrlParser: true}); 
    
mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log("Mongodb connected!");
    });
      
app.set("view engine", "ejs");

app.get('/', (req, res) => res.render("index"))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))