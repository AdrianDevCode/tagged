class Register {
  constructor() {

  }
  registerButtonAnimate() {
      let viewportWidth = $(window).width();
      let viewportHeight = $(window).height();
      
      $("#logo-jumbotron").animate({ 
          position: "absolute",
          bottom: viewportHeight / 8,
          width: "400",
          height: "200"
      });
      $(".logForm").animate({
          left: "150%"
          
      });
      $(".regForm").animate({
          left: "45%"
      });
  }
  
  handleSignUp(email, password) {
      
      if (email.length < 4) {
        alert('Please enter an email address.');
        return;
      }
      if (password.length < 4) {
        alert('Please enter a password longer than 4 characters.');
        return;
      }
      // Sign in with email and pass.
      // [START createwithemail]
      firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        let errorCode = error.code;
        let errorMessage = error.message;
        // [START_EXCLUDE]
        if (errorCode == 'auth/weak-password') {
          alert('The password is too weak.');
        } else {
          alert(errorMessage);
          }
        console.log(error);
        // [END_EXCLUDE]
      })
      // [END createwithemail]
  }
  
}