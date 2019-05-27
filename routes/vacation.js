var express = require('express');
var router = express.Router();
var Vacation = require('../models/vacation');
var passport = require('passport');
var mongoose = require('mongoose');
require('../config/passport')(passport);
var jwt = require('jsonwebtoken');
var User = require('../models/user');

//save vacation router
router.post('/create_vacation', passport.authenticate('jwt', { session: false}), function(req, res) {
    var token = getToken(req.headers);
    if (token) {
      // Vacation.create(req.body, function (err, post) {
      //   if (err) return next(err);
      //   res.json(post);
      // });
      //get user id from json web token

      var newVacation = new Vacation({
        vacation_nickname: req.body.vacation_nickname,
        start_date: req.body.start_date,
        end_date: req.body.end_date,
        user_id: req.user._id //@TODO FIGURE OUT HOW TO GET USER ID FROM JSON WEB TOKEN
      });
      newVacation.save(function(err, vacation) {
        if(err) {
          return res.json({success: false, msg: 'Failed to save new vacation'});
        }
        else
        {
          return res.json({success: true, msg: 'Created new Vacation', vacation: vacation, id: vacation.id});
        }

      });  
    } else {
      return res.status(403).send({success: false, msg: 'Unauthorized.'});
    }
  });

  router.get('/', passport.authenticate('jwt', { session: false}), function(req, res) {
    var token = getToken(req.headers);
    if (token) {
      Vacation.find({user_id: req.user._id}, function (err, vacations) {
        if (err) {
          return res.send({success: false, msg: 'Error finding vacation', err: err});
        } else {
          return res.json(vacations);
        }

      });
    } else {
      console.log('no token');
      
      return res.status(403).send({success: false, msg: 'Unauthorized.'});
    }
  });

  router.post('/delete_vacation', passport.authenticate('jwt', { session: false}), function(req, res) {
    var token = getToken(req.headers);
    if (token) {
      Vacation.findOneAndDelete({user_id: req.user._id, _id: req.body.vacation_id}, function (err, vacations) {
        if (err) {
          return res.json({success: false, msg: 'Error finding vacation', err: err});
        } else {
          return res.json({ success: true, msg: 'deleted vacation ' + req.body.vacation_id});

        }

      });
    } else {
      console.log('no token');
      
      return res.status(403).send({success: false, msg: 'Unauthorized.'});
    }
  });


  getToken = function (headers) {
    if (headers && headers.authorization) {
      var parted = headers.authorization.split(' ');
      if (parted.length === 2) {
        return parted[1];
      } else {
        return null;
      }
    } else {
      return null;
    }
  };

  module.exports = router;