// import express
const express = require('express')

const dataService = require('./services/dataService')

const jwt = require('jsonwebtoken')

const cors =require('cors')


//create an app using express

const app = express()

//to use cors in orgin

app.users(cors({
    orgin:'http://localhost:4200'
}))

//to parse json

app.use(express.json())


// application specific middlewarwe

const logMiddleware = (req, res, next) => {
    console.log("logMiddleware");
    next()
}

app.use(logMiddleware)

// to resolve http requests
app.get('/', (req, res) => {
    res.send("get method")
})

//post -to create data
app.post('/', (req, res) => {
    res.send("post method")
})

//put-to mpdify/update compleetly data
app.put('/', (req, res) => {
    res.send("put method")
})
// patch-modify and update partially data
app.patch('/', (req, res) => {
    res.send("patch method")
})
// delete - to delete data
app.delete('/', (req, res) => {
    res.send("delete method")
})





// set port for server

app.listen(3000, () => {
    console.log("server started at port no:3000")
})


//BankApp ServerSide

// JWTMIDDLEWARE FOR TO VERIFY TOKEN

const jwtmiddleware = (req, res, next) => {
    try {
        const token = req.headers["x-access-token"]
        console.log(jwt.verify(token, 'supersecretkey123456'))
        const data = jwt.verify(token, 'supersecretkey123456')
        req.currentAcc = data.currentAcno
        next()

    }
    catch {
        res.status(422).json({
            statusCode: 422,
            status: false,
            message: "please Log In"
        })
    }
}

// Register Api
app.post('/register', (req, res) => {

    //asynchronus

    dataService.register(req.body.usrname, req.body.acno, req.body.password)
        .then(result => {
            res.status(result.statusCode).json(result)
        })
})

//login api
app.post('/logIn', (req, res) => {

    dataService.logIn(req.body.acno, req.body.password)
        .then(result => {
            res.status(result.statusCode).json(result)
        })
})
// deposit api
app.post('/deposit', jwtmiddleware, (req, res) => {

    dataService.deposit(req.body.acno, req.body.password, req.body.amount)
        .then(result => {
            res.status(result.statusCode).json(result)
        })

})


// withdraw api
app.post('/withdraw',jwtmiddleware,(req, res) => {

        dataService.withdrawl(req, req.body.acno, req.body.password, req.body.amount)
        .then(result => {

            res.status(result.statusCode).json(result)
        })

})
// get transaction

app.post('/transaction', (req, res) => {

    dataService.getTransaction(req.body.acno)
        .then(result=>{

            res.status(result.statusCode).json(result)
        })

})
