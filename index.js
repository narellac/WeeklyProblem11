const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors());
app.use(express.json());
const port = 4000

let user = null;

app.post('/register', (req, res) => {
  res.status(200).json({
    name: req.body.fullname,
    user: req.body.email,
    password: req.body.password
  })
});

app.put('/login', (req, res) => {
  res.status(200).json({
    user: req.body.email,
    password: req.body.password
  })
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

