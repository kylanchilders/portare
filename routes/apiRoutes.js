var db = require("../models");
var passport = require("../config/passport");
var apiRoutes = require('express').Router();
var moment = require("moment");
moment().format();
var now = moment();
var { Op } = require('sequelize')


    // Using the passport.authenticate middleware with our local strategy.
    // If the user has valid login credentials, send them to the members page.
    // Otherwise the user will be sent an error
    apiRoutes.post("/signin", passport.authenticate("local"), function(req, res) {
      // Since we're doing a POST with javascript, we can't actually redirect that post into a GET request
      // So we're sending the user back the route to the members page because the redirect will happen on the front end
      // They won't get this or even be able to access this page if they aren't authed
      res.json("/myaccount");
    });

apiRoutes.post("/signup", function(req, res) {
    console.log(req.body);
    db.User.create({
      email: req.body.email,
      password: req.body.password
    }).then(function() {

      res.redirect(307, "/signin");
    }).catch(function(err) {
      console.log(err);
      res.json(err);
      // res.status(422).json(err.errors[0].message);
    });
});

apiRoutes.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/");
  });

apiRoutes.post("/postride", function(req, res) {
  console.log(req.body);
  db.driver_posted_rides.create({
    date: req.body.date,
    pickup_location: req.body.pickup_location,
    trail_name: req.body.trail_name,
    pickup_time: req.body.pickup_time,
    dropoff_time: req.body.dropoff_time,
    slots_available: req.body.slots_available,
    cost: req.body.cost,
    UserId: req.body.UserId
  }).then(function() {
    res.redirect(307, "/postride");
  }).catch(function(err) {
    console.log(err);
    res.json(err);
    // res.status(422).json(err.errors[0].message);
  });
})

apiRoutes.put("/signuprider", function(req, res){
  db.driver_posted_rides.update(
    {slots_available: req.body.reserved_slots},
    {where: {
      id: req.body.id
    }}
  )
})

apiRoutes.post("/user_rides_taken", function(req, res) {
  db.user_rides_takens.create({
    driverPostedRideId: req.body.driver_posted_rides_id,
    UserId: req.body.users_id
  }).then(function() {
    res.redirect(307, "/user_rides_taken");
  }).catch(function(err) {
    console.log(err);
    res.json(err);
    // res.status(422).json(err.errors[0].message);
  });
})

apiRoutes.get("/getride", function(req, res) {
  console.log(req.body);
  db.driver_posted_rides.findAll({
    where: {
      date: {
        [Op.gte]: now
      }
    }
  }).then(function(db_driver_posted_rides) {
    res.json(db_driver_posted_rides);
  }).catch(function(err) {
    console.log(err);
    res.json(err);
    // res.status(422).json(err.errors[0].message);
  });
})

apiRoutes.get("/getuserid", function(req, res) {
    db.User.findOne({
      where: {email: req.body.email}
    }).then(function(db_User){
      res.json(db_User);
      console.log(db_User);
    })
})

apiRoutes.put("/driversignup", function(req, res) {
    db.User.update({
      vehicle_make: req.body.vehicle_make,
      vehicle_model: req.body.vehicle_model,
      vehicle_color: req.body.vehicle_color,
      license_plate: req.body.license_plate,
      license_number: req.body.license_number
    }, {
      where: {
        id: req.body.id
      }
    })
});

apiRoutes.get("/myridestaken", function(req, res) {
  db.user_rides_takens.findAll({
    
  })
})




module.exports = apiRoutes;