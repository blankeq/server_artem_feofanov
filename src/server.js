import express from 'express';

const app = express();

const port = 3000;

app.use(express.static('src/pages'))



app.listen(port, () => {
    console.log('Сервер работает на ' + port);
})