const Blog = require('../models/Blog');
class SiteController {

    home(req, res) {

        Blog.find({}, function(err, Blogs) {
            if(!err){
                res.json(Blogs);
            } else {
                res.status(400).json({error: 'ERROR !'})
            }
        })
    }
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
