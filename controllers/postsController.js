/* const express = require(express) */
const posts = require('../data/posts')
function index (req, res){
    res.json(posts)
}
function show (req, res){
    res.json(posts.find(post => post.slug === req.params.id ))
}
function store (req, res){
    res.send('create post')
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