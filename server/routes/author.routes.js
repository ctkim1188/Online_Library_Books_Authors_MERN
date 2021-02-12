const AuthorController = require('../controllers/author.controller')

module.exports = app => {
    app.post('/api/author/create', AuthorController.createNewAuthor);
    app.get('/api/authors', AuthorController.displayAll);
    app.get('/api/author/:id', AuthorController.findOneAuthor);
    app.delete('/api/author/:id', AuthorController.deleteAuthor);
    app.put('/api/author/:id', AuthorController.updateAuthor);
}