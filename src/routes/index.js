const blogRouter = require('./blog');
const newsRouter = require('./news');
const siteRouter = require('./site');

function route(app) {
    app.use('/blog', blogRouter);
    app.use('/news', newsRouter);
    app.use('/', siteRouter);
}

module.exports = route;
