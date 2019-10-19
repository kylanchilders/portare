$(document).ready(function() {
  // Getting references to our form and inputs
  var loginForm = $("form.login");
  var emailInput = $("input#email");
  var passwordInput = $("input#password");

  // When the form is submitted, we validate there's an email and password entered
  loginForm.on("submit", function(event) {
    event.preventDefault();
    var userData = {
      email: emailInput.val().trim(),
      password: passwordInput.val().trim()
    };

    if (!userData.email || !userData.password) {
      return;
    }

    // If we have an email and password we run the loginUser function and clear the form
    loginUser(userData.email, userData.password);
    emailInput.val("");
    passwordInput.val("");
  });

  // loginUser does a post to our "api/login" route and if successful, redirects us the the members page
  function loginUser(email, password) {
    sessionStorage.setItem("portare_username", email);
    $.post("/api/signin", {
      email: email,
      password: password
    }).then(function() {
      $.get("/api/getuserid", {
      }).then(function(data){
        userID = data.id;
        sessionStorage.setItem("portare_user_id", userID);
      });
      window.location.replace("/myaccount.html");
      
      // If there's an error, log the error
    }).catch(function(err) {
      console.log(err);
    });
  }



});

