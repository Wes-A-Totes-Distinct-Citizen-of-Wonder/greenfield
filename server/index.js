const express = require('express');
const app = express();
const path = require('path');

app.listen(8080, () => {
    console.log('Bitches be crazy');
});

app.use(express.static(path.join(__dirname, '../client/dist')));
