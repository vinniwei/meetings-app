const express = require('express')
const app = express()
const port = 8000

app.get('/', (req, res) => res.send('<h1>Hello, this is the meeting-app\'s server</h1>'))

app.listen(port, () => console.log(`meeting-app server listening on port ${port}`))

