document.getElementById("feedback-form").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (name && email && message) {
        let feedbackList = document.getElementById("feedback-list");

        let newFeedback = document.createElement("li");
        newFeedback.innerHTML = `<strong>${name}</strong> (${email}): ${message}`;
        
        feedbackList.appendChild(newFeedback);

        // Clear form after submission
        document.getElementById("feedback-form").reset();
    } else {
        alert("Please fill in all fields.");
    }
});
