welcomeMessage();

function welcomeMessage() {
    /// Prompt the user for their name
    let name = prompt("Please enter your name:");
    
    if (name != null) {
    
    /// Set the welcome message
    document.getElementById("welcome-speech").innerHTML = 'Hello ' + name + ', Welcome to my website!';

}

}

/// Validate the contact form before submission
function validateForm() {
    
    if (message != null) {
    
/// if the message is filled out, show a thank you message
    alert("Thank you for reaching out! see you next time!");

}
}