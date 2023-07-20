module.exports = (sequelize, dataTypes) => {
    const Post = sequelize.define("Posts", {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: dataTypes.STRING
        },
        body: {
            type: dataTypes.TEXT
        },
        author: {
            type: dataTypes.STRING
        },
        featured: {
            type: dataTypes.BOOLEAN
        },
    },{
        tableName: "posts",
        timestamps: true
    })

    return Post
}