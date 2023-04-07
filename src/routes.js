function routes(app) {
    app.use('/usuario', require('./routes/usuario.js'));
    app.use('/tarefa', require('./routes/tarefa.js'));
    app.use('/comentario', require('./routes/comentario.js'));
    return;
}

module.exports = routes;