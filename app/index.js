const express = require('express')
const app = express()
app.get('/', (req, res) => res.send('Hello world from kubernetes!'))
app.listen(3000, () => console.log('Example app listening on port 3000!'))



//app.listen(80, '0.0.0.0', () => console.log('Example app listening on port 80!'))