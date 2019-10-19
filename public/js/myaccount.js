$(document).ready(function() {
    var username = sessionStorage.getItem("portare_username");
    var userID;

    function getUserID(username){
        $.get("/api/getuserid", {
        }).then(function(data){
          userID = data.id;
          sessionStorage.setItem("portare_user_id", userID);
        });
    }

    getUserID(username);


});