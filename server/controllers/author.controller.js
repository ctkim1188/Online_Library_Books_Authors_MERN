const Author = require('../models/author.model')

module.exports.displayAll = (req, res) => {
    Author.find().sort({name: 'asc'})
        .then(allAuthor => res.json(allAuthor))
        .catch( err => res.json(err, {message: "something is wrong"}))
}

module.exports.createNewAuthor = (req, res) => {
    Author.create(req.body)
        .then(newAuthor => res.json({author:newAuthor}))
        .catch(err => res.status(400).json(err))
}

module.exports.findOneAuthor = (req, res) => {
    Author.findOne({_id : req.params.id})
        .then(oneAuthor => res.json(oneAuthor))
        .catch(err => res.json(err))
}

module.exports.deleteAuthor = (req, res) => {
    Author.deleteOne({_id : req.params.id})
        .then(delAuthor => res.json(delAuthor))
        .catch(err => res.json(err, {message : "did NOT delete"}))
}

module.exports.updateAuthor = (req, res) => {
    Author.findOneAndUpdate({_id : req.params.id}, req.body, {runValidators : true})
        .then(updatedAuthor => res.json(updatedAuthor))
        .catch(err => res.status(400).json(err))
}