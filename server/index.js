const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const reminder = require('./db/reminders');

const app = express();

app.use(morgan('tiny'));
app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.json({
        message: 'Behold The MEVN Stack!'
    });
});

app.get('/reminder', (req, res) => {
    reminder.getAll().then((reminder) => {
        res.json(reminder);
    });
});

app.post('/reminder', (req, res) => {
    console.log(req.body);
    reminder.create(req.body).then((message) => {
        res.json(message);
    }).catch((error) => {
        res.status(500);
        res.json(error);
    });
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`listening on ${port}`);
});