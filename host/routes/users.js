var express = require('express');
var router = express.Router();
require('../models/state')


// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});
// define the home page route
router.get('/', function(req, res) {
  res.send('User home page');
});
// define the about route
router.get('/about', function(req, res) {
  res.send('About Users');
});

router.get('/getUser/:id/', function(req,res){
  models.User.findById(req.params.id,{include:[models.State]}).then(function(usr){
    res.send(usr);
  });
});


router.get('/new', function(reg, res) {
  var state = models.State;
  models.User.create({
    firstName: 'Antonia',
    lastName: 'Fuchs',
    gender: 'female',
    address: "WartheStr. 23a",
    city: 'Schwaig',
    StateId:1,
    // State: {
    //   id:1,
    //   abbreviation: "BY",
    //   name: "Bayern"
    // },
    orderTotal: 200

  }, {
    include: state
  }).then(function(user){
    res.send(user);
  });
});



router.get('/getAll', function(req, res) {
  // models.User.find({ include: [models.State]})..then(function(usr) {
  models.User.findAll({include:[models.State]}).then(function(usr) {
  // models.User.getAll({include:models.State}).then(function(usr) {
    res.send(usr);
  });

});

module.exports = router;
