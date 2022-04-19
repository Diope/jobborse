const fastify = require('fastify');

const build = (opts = {}) => {
    const app = fastify(opts);
    app.get('/', (req, res) => {
        res.send({ test: 'sanity check' });
    });

    return app;
};

module.exports = build;
