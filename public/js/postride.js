$(document).ready(function() {
    // Getting references to our form and input
    var postride = $("form#postride");
    var rideDate = $("input#rideDate");
    var rideDepartureTime = $("input#rideDepartureTime")
    var rideReturnTime = $("input#rideReturnTime");
    var cost = $("input#cost");
    var departureLocation = $("input#departureLocation");
    var Trail = $("input#trail");
    var numberOfRiders = $("input#numberOfRiders");
    var UserId = 1;
  
    
    postride.on("submit", function(event) {
    event.preventDefault();
      var postRideData = {
        date: rideDate.val().trim(),
        pickup_location: departureLocation.val().trim(),
        trail_name: Trail.val().trim(),
        pickup_time: rideDepartureTime.val().trim(),
        dropoff_time: rideReturnTime.val().trim(),
        slots_available: numberOfRiders.val().trim(),
        cost: cost.val().trim(),
        UserId: UserId
      };
  
      if (!postRideData.date || !postRideData.pickup_location || !postRideData.trail_name || !postRideData.pickup_time || !postRideData.dropoff_time || !postRideData.slots_available || !postRideData.cost) {
        return;
      }
     
      postRide(postRideData.date, postRideData.pickup_location, postRideData.trail_name, postRideData.pickup_time, postRideData.dropoff_time, postRideData.slots_available, postRideData.cost, postRideData.UserId)
    });
  
    // Does a post to the signup route. If succesful, we are redirected to the members page
    // Otherwise we log any errors
    function postRide(date, pickup_location, trail_name, pickup_time, dropoff_time, slots_available, cost, UserId) {
      $.post("/api/postride", {
        date: date,
        pickup_location: pickup_location,
        trail_name: trail_name,
        pickup_time: pickup_time,
        dropoff_time: dropoff_time,
        slots_available: slots_available,
        cost: cost,
        UserId: UserId
      }).then(function(data) {
        window.location.replace(data);
        // If there's an error, handle it by throwing up a boostrap alert
      }).catch(handleLoginErr);
    }
  
    function handleLoginErr(err) {
      $("#alert .msg").text(err.responseJSON);
      $("#alert").fadeIn(500);
    }
  });