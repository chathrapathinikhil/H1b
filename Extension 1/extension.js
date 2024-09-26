const site = window.location.hostname;
alert("HSpons.com can read this site's data" + site);
// Wait for the DOM to load
window.addEventListener("load", function () {
  // Select the company name element
  let companyElement = document.querySelector(
    ".job-details-jobs-unified-top-card__company-name"
  );

  if (companyElement) {
    // Create a new button
    let button = document.createElement("button");
    button.textContent = "H1b info"; // The button's label
    button.style.marginTop = "10px"; // Optional: styling
    button.name = "h1b info-name";
    button.className = "h1b info-class";

    // Add event listener for button click
    button.addEventListener("click", function () {
      alert("Button clicked!"); // Replace with desired functionality
    });

    // Append the button after the company name
    companyElement.parentNode.insertBefore(button, companyElement.nextSibling);
  }
});
