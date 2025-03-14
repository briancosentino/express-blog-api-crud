/* const express = require(express) */

function index (req, res){
    res.send('get postList')
}
function show (req, res){
    res.send('show post' + req.params.id)
}
function store (req, res){
    res.send('create post')
}
function update (req, res){
    res.send('modify partial post' + req.params.id)
}
function modify (req, res){
    res.send('modify whole post' + req.params.id)
}
function destroy (req, res){
    res.send('delete post' + req.params.id)
}

module.exports = {
    index,
    show,
    store,
    update,
    modify,
    destroy
}