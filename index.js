// Project needs NODE.JS as the back-end server
// Express JS is the framework that will allow us to pass in variables / db

/* -- CONSTANTS ---------------------------------------------- */
// These are constant variables required to run the poject
const express = require('express');
const app = express();
const mysql = require('mysql');
const session = require('express-session');
const exp = require('constants');
const { Console } = require('console');

// this to parse JSON data that gets retrieve from the data base
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// kinda like session login token
app.use(session({
    secret: 'groupSix',
    resave: true,
    saveUnitialized: true
}));

// this to serve / render static css stylesheet "style.css" and other
app.use(express.static(__dirname));

// this will convert normal html to ejs files that Express Framework
app.set('views', __dirname + '/pages');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

// DEFINE THE SQL CONNECTION - given by our prof
var pool = mysql.createPool({
    host: "107.180.1.16",
    port: "3306",
    user: "fall2021group6",
    password: "group6fall2021",
    database: "cis440fall2021group6"
});

// Calling the variable above and connecting the db
// IF connect, terminal will say "Connection establish..."
pool.query('select 1+1', (err, results) => {
    if (err) {
        console.log('Error connecting to Db');
        return;
    }
    console.log('Connection established');
});

app.listen(3000);
console.log('Website Sever Is Running on Port 3000. Access via LOCALHOST:3000');
/* ----------------------------------------------------------- */
// .
// .
// .
// .


/* ----------------------------------------------------------- */



