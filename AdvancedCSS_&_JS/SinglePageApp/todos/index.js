var express = require('express'),
    router  = express.Router(),
    mongoose = require('mongoose'),
    db      = require('./todo');

mongoose.set('debug', true);
mongoose.connect('mongodb://localhost:27017/TodoList', {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  });
mongoose.Promise = Promise;

// Show All Todos
router.get('/', function(req, res){
    db.find()
    .then(function(todos){
        res.json(todos);
    })
    .catch(function (err) {
        res.send(err);
    })
});

//Create Todos
router.post('/', function (req, res){
    db.create(req.body)
    .then(function(todo){
        res.json(todo);
    })
    .catch(function(err){
        console.log(err);
    })
});

//Edit todos
router.put('/:todoId', function(req, res){
    db.findByIdAndUpdate({_id: req.params.todoId}, req.body, {new: true})
    .then(function (updatedtodo) {
        res.json(updatedtodo);
    })
    .catch(function (err){
        res.send(err);
    })
});

//Delete Todos
router.delete('/:todoid', function(req, res){
    db.findByIdAndRemove({_id: req.params.todoid})
    .then(function(todo){
        res.json({});
    })
    .catch(function(err){
        res.send(err);
    })
});

module.exports = router;