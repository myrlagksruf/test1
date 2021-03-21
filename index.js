const express = require('express');
const fs = require('fs/promises');
const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile('index.html', {
        root:'./view'
    });
})

app.use('/public', express.static('./data'));

app.listen(3000, () => console.log('서버'));