$(document).ready(function() {
    var rideContainer = $("#rideContainer");
    rideContainer.attr('style', "background-color:white");
    var rides;
    var userID = 99;
    
    function getRides(){
        $.get("/api/getride", {
        }).then(function(data){
            rides = data;
            console.log(data);
            showRides(rides);
        })

    }

    function showRides(rides){
        for(i=0; i < rides.length; i++){
            var ride = rides[i];
            var newRideCard = $("<div class='card'>");
            newRideCard.attr('id', "RideCard" + i);
            newRideCard.attr('style', "background-color:white; float:left; padding:10px; margin: 10px");
            rideContainer.append(newRideCard);
            var pickupLocation = ride.pickup_location;
            var trailName = ride.trail_name;
            var date = ride.date;
            var pickupTime = ride.pickup_time;
            var dropoffTime = ride.dropoff_time;
            var slotsAvailable = ride.slots_available;
            var cost = ride.cost;
            var id = ride.id;
            newRideCard.append("<p>Pickup Location: "+pickupLocation+"</p>");
            newRideCard.append("<p>Trail Name: "+trailName+"</p>");
            newRideCard.append("<p>Ride Date: "+date+"</p>");
            newRideCard.append("<p>Pickup Time: "+pickupTime+"</p>");
            newRideCard.append("<p>Dropoff Time: "+dropoffTime+"</p>");
            newRideCard.append("<p id='#slots"+i+"'>Rider Slots Available: "+slotsAvailable+"</p>");
            newRideCard.append("<p>Cost per rider: "+cost+"</p>");
            newRideCard.append("<button id='signupbutton' data-ride-id='"+id+"'>Sign Up For Ride</button>");
        }
    }

function signupRide(userID, id){
    $.post("/api/user_rides_takens", {
        driver_posted_rides_id: id,
        users_id: userID
    }).then(alert("You've signed up for this ride!")).then(decreaseSlots(id, slots));
}

function decreaseSlots(id, slots){
    $.put("/api/signuprider", {

    })
}

$("#signupbutton").click(function(){
    var id = this.$("data-ride-id")
    signupRide(userID, id);
})


getRides();



});