const express = require("express")
const morgan = require("morgan")
const cors = require('cors')
const app = express()
const postsRouter = require("./routes/postsRoutes")
const dotenv = require('dotenv')
dotenv.config()

const PORT = process.env.PORT || 3001
app.listen(PORT, () => console.log("Conectado al puerto " + PORT))

app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

app.use(postsRouter)
