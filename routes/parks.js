var express = require('express');
var router = express.Router();
var Vacation = require('../models/vacation');
var passport = require('passport');
var mongoose = require('mongoose');
require('../config/passport')(passport);
var jwt = require('jsonwebtoken');
var User = require('../models/user');
var Themeparks = require('themeparks');


// const parks_available = [
//   ThemeParks.Parks.WaltDisneyWorldMagicKingdom,
//   ThemeParks.Parks.WaltDisneyWorldEpcot,
//   ThemeParks.Parks.WaltDisneyWorldAnimalKingdom,
//   ThemeParks.Parks.WaltDisneyWorldHollywoodStudios,
//   ThemeParks.Parks.UniversalStudiosFlorida,
//   ThemeParks.Parks.UniversalIslandsOfAdventure,
// ];



router.post('/', passport.authenticate('jwt', { session: false}), function(req, res) {
    var token = getToken(req.headers);
    if (token) {
        var themepark = req.body.park_id;
        var date_to_query = req.body.date_to_query;
        var themepark_response = {
          success: false,
          msg:'',
          park: {},
          rides: []
        }
        var park_chosen;
        console.log('requesting parks info');
        console.log(req.body);
        switch(themepark) {
          case "WDW_MK":
            park_chosen = new Themeparks.Parks.WaltDisneyWorldMagicKingdom();
          break;
          case "WDW_EPCOT":
            park_chosen = new Themeparks.Parks.WaltDisneyWorldEpcot();
            break;
          case "WDW_HS":
            park_chosen = new Themeparks.Parks.WaltDisneyWorldHollywoodStudios();
            break;  
          case "WDW_AK":
            park_chosen = new Themeparks.Parks.WaltDisneyWorldAnimalKingdom();
            break;
          case "USTUDIOS_FL":
            park_chosen = new Themeparks.Parks.UniversalStudiosFlorida();
            break;
          case "USTUDIOS_IOA_FL":
            park_chosen = new Themeparks.Parks.UniversalIslandsOfAdventure();
            break;

          default:
            themepark_response.msg = 'Unsupported Park requested';
            return res.json(themepark_response);
            break;
        }  
        park_chosen.GetWaitTimes().then(function(rides) {
          // themepark_response.rides = rides;
          // themepark_response.park = park_chosen;
          for(var i=0, ride; ride=rides[i++];) {
            //console.log(ride.name + ": " + ride.waitTime + " minutes wait");
            themepark_response.rides.push({
              name: ride.name,
              id: ride.id,
              waitTime: ride.waitTime,
              active: ride.active,
              status: ride.status,
              lastUpdate: ride.lastUpdate,
              fastPass: ride.fastPass
            });
          }
          return res.json(rides);
          // console.log('Rides');
          // console.log(rides);
        })
        .catch((error) => {
          console.log(error);
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