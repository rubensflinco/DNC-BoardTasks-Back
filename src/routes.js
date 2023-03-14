function routes(app) {
    app.use('/usuario', require('./routes/usuario.js'));
    return;
}

module.exports = routes;