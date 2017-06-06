var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.send('respond with a resource');
  res.send([
    {
      _id: 1,
      username: "user1"
    },
    {
      _id: 2,
      username: "user2"
    },
    {
      _id: 3,
      username: "user3"
    },
    {
      _id: 4,
      username: "user4"
    }
  ]);
});

module.exports = router;
