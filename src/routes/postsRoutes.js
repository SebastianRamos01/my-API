const express = require("express")
const router = express.Router()
const productControllers = require("../controllers/postsControllers")

router.get("/posts", productControllers)

module.exports = router