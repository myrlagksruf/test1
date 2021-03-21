import express from 'express';
import fs from 'fs/promises';

const app = express();

app.use('/data', express.static('./data'));

app.get('/', (req, res) => {
    res.sendFile('index.html', {
        root:'./view'
    });
});

app.listen(3000, () => console.log('서버 작동 중'));