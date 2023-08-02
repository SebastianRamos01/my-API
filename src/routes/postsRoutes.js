const express = require("express")
const router = express.Router()
const postsControllers = require("../controllers/postsControllers")

router.get("/posts", postsControllers.allPosts)
router.get("/posts/:id", postsControllers.postById)
router.post("/posts", postsControllers.insertPost)
router.put("/posts/:id", postsControllers.updatePost)
router.delete("/posts/:id", postsControllers.deletePost)

module.exports = router