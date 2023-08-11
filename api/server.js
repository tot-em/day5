// Importing Modules

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const { MongoClient } = require('mongodb')


// Instance
const app = express()

// mongodb
//middlewares
app.use(bodyParser.json())
app.use(cors())


app.post('/signup', async (req, res)=>{

    const {NAME, EMAIL, PASSWORD} = req.body

    console.log('logged from the api')
    console.log(NAME)
    console.log(EMAIL)
    console.log(PASSWORD)

    // mongodb 
    const uri = 'mongodb+srv://cfagbeko:Lakjn2LjkoiII5bl@firstcluster.ertzlhn.mongodb.net/?retryWrites=true&w=majority'
    const client = new MongoClient(uri)

    try{
        await client.connect();
        console.log('CONNECTED TO DATABASE')

        const clusterDatabase = client.db('firstCluster')
        const userCollection = clusterDatabase.collection('users')

        const data = {
            name: NAME,
            email: EMAIL,
            password: PASSWORD
        }
        // SQL & NOSQL
        await userCollection.insertOne(data)

    }catch(error){
        console.log(error)
    }finally{
        await client.close();
    }

    return console.log('received by the api')
})

const port = 3000

app.listen(port, ()=>{
    console.log(`SERVER RUNNING ON PORT: ${port}`)
})

//Research on Objects, arrays and IP
//Learn more about express, body-parser and cors in nodejs

/**
 * 
 */

//passwords for mongodb:Lakjn2LjkoiII5bl

//create repo for day3,4,5