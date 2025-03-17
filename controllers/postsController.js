/* const express = require(express) */
const posts = require('../data/posts')
function index (req, res){
    res.json(posts)
}
function show (req, res){
    res.json(posts.find(post => post.slug === req.params.id ))
}
function store (req, res){
    const newId = 23876328
    const newPost = {
        title: req.body.title,
        slug : req.body.slug,
        content : req.body.content,
        image : req.body.image,
        tags : req.body.tags

    }

    posts.push(newPost)
    console.log(posts);
    console.log(req.body);
    
    res.status(201)
    res.json(newPost)
  
}
function update (req, res){
    res.json(posts.find(post => post.id === req.params.id ))
}
function modify (req, res){
    res.send('modify whole post' + req.params.id)
}
function destroy (req, res){
    const postIndex =posts.indexOf(posts.find(post => post.slug === req.params.id))
    posts.splice(postIndex, 1)

    console.log(posts);

    res.sendStatus(204)
    

}

module.exports = {
    index,
    show,
    store,
    update,
    modify,
    destroy
}