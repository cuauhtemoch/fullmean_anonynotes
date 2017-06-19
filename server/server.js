const express = require('express'),
      bodyParser = require('body-parser'),
      mongoose = require('mongoose'),
      path = require('path'),
      app = express();
      moment = require('moment'),


mongoose.connect('mongodb://localhost/notes');
mongoose.Promise = global.Promise;

var noteSchema = new mongoose.Schema({
  note: {type: String, required:[true, "A note is required"], minlength: 3}
}, {timestamps: true})

mongoose.model('note', noteSchema);
const Note = mongoose.model('note');


app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, '../public/dist')));
app.use(bodyParser.json());


app.post('/new', function(req, res, next){
    console.log(req.body)
    console.log("inside server")
    Note.create(req.body)
    .then((data)=>{
        console.log("successfully created!");
    })
    .catch((err)=>{
        console.log(err);
    })
})
app.get('/notes', function(req, res, next){
    Note.find()
    .then((data)=>{
        console.log('found data', data);
        res.json(data);
    })
    .catch((err)=>{
        console.log('err', err)
    })
})



app.listen(3000, function(){

    console.log("running on 3000")
})