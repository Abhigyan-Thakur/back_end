const express = require("express")
// import express from 'express'
const dotenv = require("dotenv")
const app = express()
dotenv.config({
    path: './.env'
})
app.get('/', (req, res) => {//when user route to / then hello world will be send
    res.send('hello world')
})

app.get('/twitter', (req, res) => {//when user routes to /twitter it will be shown
    res.send("jdsfh skjdk ksjd")
})
app.listen(process.env.PORT || 8000, () => {//.listen method is also from express to print port in callback 
    console.log(`the server is running on port:${process.env.PORT}`)
})