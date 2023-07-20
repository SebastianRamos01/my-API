const db = require("../../database/models")

const postControllers = {
    allPosts: (req, res) => {
        db.Posts.findAll()
            .then((post) => {
                res.json({
                    totalPosts: post.length,
                    posts: post
                })
            })
            .catch(error => {
                console.log(error)
            })
    },
    postById: (req, res) => {

        const {id} = req.params
        db.Posts.findByPk(id)
            .then((post) => {
                res.json(post)
            })
            .catch(error => {
                res.status(500)
                console.log(error)
            })
    },
    insertPost: (req, res) => {

        const { title, body, author, featured } = req.body
        console.log(title)
        db.Posts.create({
            title,
            body,
            author,
            featured
        })
            .then(() => {
                res.json("post-added")
            })
            .catch(error => {
                res.status(500)
                console.log(error)
            })
    },
    updatePost: (req, res) => {

        const { title, body, author, featured } = req.body
        const {id} = req.params

        db.Posts.update({
            title,
            body,
            author,
            featured
        },
        {
            where: {id: id}
        })
            .then(() => {
                res.json("post-updated")
            })
            .catch(error => {
                res.status(500)
                console.log(error)
            })
    },
    deletePost: (req, res) =>{
        
        const {id} = req.params
        db.Posts.destroy({where: {id: id}})
            .then(() => {
                res.json("post-deleted")
            })
            .catch(error => {
                res.status(500)
                console.log(error)
            })

    }
}

module.exports = postControllers