document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("newsletter-form");
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const email = document.getElementById("newsletter-email").value.trim();

    // Retrieve existing subscriptions from local storage or initialize an empty array
    const existingSubscriptions =
      JSON.parse(localStorage.getItem("newsletterSubscriptions")) || [];

    // Check if the email is already subscribed
    const isSubscribed = existingSubscriptions.includes(email);
    if (isSubscribed) {
      alert("You are already subscribed to our newsletter.");
      return;
    }

    // Add the new email to the subscriptions list
    existingSubscriptions.push(email);

    // Save the updated subscriptions list back to local storage
    localStorage.setItem(
      "newsletterSubscriptions",
      JSON.stringify(existingSubscriptions)
    );

    // Optionally, you can display a confirmation message or redirect the user
    alert("Thank you for subscribing to our newsletter!");
    // Clear the form field after successful subscription
    document.getElementById("newsletter-email").value = "";
  });
});
