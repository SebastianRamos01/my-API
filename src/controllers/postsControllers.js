const db = require("../../database/models")

const postControllers = {
    allPosts: (req, res) => {
        db.Posts.findAll()
            .then((post) => {
                res.status(200)
                res.json(post)
            })
            .catch(error => {
                console.log(error)
            })
    },
    postById: (req, res) => {

        const {id} = req.params
        db.Posts.findByPk(id)
            .then((post) => {
                if (!post) {
                    res.status(404)
                    res.json({ message: "Not Found" })
                }else{
                    res.status(200)
                    res.json(post)
                }
            })
            .catch(error => {
                res.status(500)
                console.log(error)
            })
    },
    insertPost: (req, res) => {

        const { title, body, author, featured } = req.body
        db.Posts.create({
            title,
            body,
            author,
            featured
        })
            .then(() => {
                if ( !title || !body || !author) {
                    res.status(400)
                    res.json({ message: "parameters-needed" })
                }else{
                    res.status(200)
                    res.json({message: "post-added"})
                }
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
                res.status(200)
                res.json({ message: "post-updated" })
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
                res.status(200)
                res.json({ message: "post-deleted" })
            })
            .catch(error => {
                res.status(500)
                console.log(error)
            })

    }
}

module.exports = postControllers