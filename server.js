const express = require ('express')

const app = express()

app.listen(3000, ()=> {
    console.log('server 3000')
}).on, err => console.log('server ignition failed:\n', err)