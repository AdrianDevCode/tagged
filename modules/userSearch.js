class Messaging {
    constructor() {
      
    }
    sendMessage() {   
        let messageContent = null;    
        let plateOfRecipient = null;  
        let uidOfRecipient = null;   
        
        //finds a user from their plate number, as input from another user
        plateOfRecipient = $("#userSearch").val()
       
        firebase.database().ref('users').orderByChild('plate').equalTo(plateOfRecipient).on("value", function(snapshot) {
            uidOfRecipient = Object.keys(snapshot.val())[0];
            

            if (uidOfRecipient){
                
                let dt = new Date();
                let utcDate = dt.toUTCString(); 
         // sends a message to the user found above with a timestamp 
                messageContent = $("#messageContent").val();
                firebase.database().ref(`users/${uidOfRecipient}/messages`).update({
                    [utcDate] : messageContent
                    });
                console.log("message sent!")

            } else {
                alert("Sorry, that plate isn't registered yet!");
            }
        });
    }; 
 };
