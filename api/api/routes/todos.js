var express = require('express');
var router = express.Router();

var todos = [
  { checked: true, text: 'Installing Angular', class: 'important'},
  { checked: false, text: "Getting started with Angular", class: "important"},
  { checked: true, text: "Having a coffee", class: "super-important"},
  { checked: false, text: "Pet my cat", class: "not-important"},
];

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(todos);
});

router.post('/', function(req, res, next) {
  console.log(req);
  todos.push(req.body);
  res.status(201).send(req.body); 
});

router.delete('/', function(req, res, next) {
  let index = todos.findIndex(todo => todo.text == req.body.text && todo.class == req.body.class);
  if (index < 0) {
    res.statusCode(404).send(req.body);
  }
  else {
    todos.splice(index, 1);
    res.send();
  }
});

module.exports = router;
