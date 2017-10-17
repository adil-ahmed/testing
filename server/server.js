const express = require('express');

var app = express();

app.get('/', (req,res) => {
    res.status(404).send({
        error : 'Page not found',
        name : 'Adil'
    });
  
});
// app.get('/', (req,res) => {
    
//     res.status(200).send('Hello world!');
// });
// app.get('/users', (req,res) => {
//     res.status(200).send({
//         name : 'Adil',
//         age : 23
//     });
// });

app.get('/users', (req,res) => {
    res.status(200).send({
        name : 'Adil',
        age : 23
    }
);
});

app.listen(3000);
module.exports.app = app;