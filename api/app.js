const express = require('express');
require('./db/mongoose');
const Info = require('./models/info');
const path = require('path');
const cors = require('cors');
const hbs = require('hbs');
const bodyParser = require('body-parser');

const app = express();

const viewsPath = path.join(__dirname, 'views');

app.set('view engine', 'hbs');
app.set('views', viewsPath);

app.use(express.static('public'));
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render('home');
    //console.log(req.query);
    // const info = new Info(req.body);
    // console.log(info);

    // info.save().then(() => {
    //     res.status(201).send(info);
    // }).catch(e => {
    //     res.status(400).send(e);
    // });
    //console.log(info);
});

app.post('/', (req, res) => {
    // const info = new Info({
    //     question1: req.body.question1,
    //     question2: req.body.question2
    // });

    // const info = new Info(req.body);
    // //console.log(info);
    // info.save().then(() => {
    //     res.json(info);
    // }).catch(e => {
    //     res.status(400).send(e);
    // });

    Info.create(req.body, function(error, post){
        if(error) {
            return error;
        }
        res.json(post);
    });
});

module.exports = app;