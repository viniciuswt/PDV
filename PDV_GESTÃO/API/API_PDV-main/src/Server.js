require('dotenv').config()
const express = require("express")
const app = express()
const Router = require("./routes/")
const cors = require('cors')


app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(cors())

const PORT = process.env.PORT | 3001

app.use('/', Router)


app.listen(PORT, () => {
    console.log(`Server is running | PORT:${PORT}`)
})