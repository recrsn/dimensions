const express = require('express');
const router = express.Router();

const User = require('../../models/user');

/* GET users listing. */
router.get('/', function(req, res, next) {
  User.find().lean().exec().then((users) => {
    users = users  || [];
    res.render('admin/users.html.twig', {
      users: users
    });
  }).catch((err) => {
    next(err);
  });
});

router.post('/', function (req, res) {
  console.log(req.body);
  res.redirect('/admin/user');
});

module.exports = router;
