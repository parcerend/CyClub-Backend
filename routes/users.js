var express = require('express');
var router = express.Router();

const usersModel = require('../database/models/User');

// To manage all the tokens for the users
const jwt = require('jsonwebtoken');


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


/**
 * 
 * This route will check if the user exists in our DB and it'll return a token with our info about it
 * otherwise, it'll save it and will return a token
 * For this, the request body will request the next params
 * 
 * @status 200 if user logged in
 * @status 201 if user registered
 */
router.post('/SignInWithCredentials', (req, res) => {
  const { email, name } = req.body;
  
  usersModel.findByEmail(email, (err, user) => {
    if (err) throw err;
    if (user) {
      const id = user['_id'];
      const { name } = user;
      res.status(200).send({
        id,
        msg: "This user's been registered yet",
        name
      });
    } else {
      const user = {
        name,
        email,
      }
      usersModel.register(user, (err, data) => {
        if(err) throw err;
        res.status(201).send({
          msg: "User signed in successfully"
        });
      });
    }
  });
});


module.exports = router;
