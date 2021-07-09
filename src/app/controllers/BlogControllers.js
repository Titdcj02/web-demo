const Blog = require('../models/Blog');
const {arraysToObject} = require('../../util/mongoose')
const {arrayToObject} = require('../../util/mongoose')
class BlogController {

    index(req, res, next) {
        Blog.find({})
        .then((Blogs) => {
            res.render('blog', {
                Blogs: arraysToObject(Blogs)
            })
        })
        .catch((err) => next)
    }
    
    show(req, res, next) {
        Blog.findOne({slug: req.params.slug})
        .then((blog) => {
            res.render('blogs/show', { 
                blog: arrayToObject(blog)
            })
        })
        .catch((err) => next)
    }
    
}

module.exports = new BlogController();
