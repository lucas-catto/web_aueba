
const express    = require('express');
const bodyParser = require('body-parser');
const db         = require('./db');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.post('/add-user', async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const [result] = await db.query(
            'INSERT INTO users VALUES (null, ?, ?, ?)',
            [name, email, password]
        );
        res.send('Success To Create a User!');
    }
    catch (error) {
        res.status(500).send('Error To Create a User: ' + error.message);
    }
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
