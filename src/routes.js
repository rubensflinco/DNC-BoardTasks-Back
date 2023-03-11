function routes(app) {
    app.use('/users', require('./routes/users.js'));
    return;
}

module.exports = routes;