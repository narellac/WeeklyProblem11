const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors());
app.use(express.json());
const port = 4000

let user = null;

app.post('/register', (req, res) => {
    user = req.body;
    res.json({result: 'success'})
})

app.put('/login', (req, res) => {
    const body = req.body;
    if(user && user.email === body.email && user.password === body.password) {
        res.json({result: 'success'})
    } else {
        res.json({result: 'error'})
    }
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

