const express = require('express');
const fs = require('fs/promises');
const app = express();

app.get('/', (req, res) => {
    res.sendFile('index.html', {
        root:'./view'
    });
})

app.use('/public', express.static('./data'));

app.listen(80, () => console.log('서버'));