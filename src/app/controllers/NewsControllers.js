class NewsController {
    index(req, res) {
        res.render('news');
    }
    show(req, res) {
        res.send('Details News');
    }
}

module.exports = new NewsController();
