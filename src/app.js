const express = require("express")
const morgan = require("morgan")
const app = express()
const postsRouter = require("./routes/postsRoutes")
const dotenv = require('dotenv')

const PORT = process.env.PORT || 3001
app.listen(PORT, () => console.log("Conectado al puerto " + PORT))

app.use(express.json())
app.use(morgan('dev'))

app.use(postsRouter)
