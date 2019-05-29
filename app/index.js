const express = require('express')
const app = express()
const port = 4000
const version = require('../package.json').version

app.get('/', (req, res) => res.send('jjhg API running.'));
app.get('/version', (req, res) => res.send(version));

app.listen(port, () => console.log(`Example app listening on port ${port}!`))