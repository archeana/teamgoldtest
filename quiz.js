// Get references to the button and message elements
    const button = document.getElementById("q1y1");
    const q1a1p = document.getElementById("q1a1");

    // Add a click event listener to the button
    button.addEventListener("click", function() {
    
// Update the content of the message and the inner.Html
        const message = "Maybe explore other alternatives";
        const externalLink = "https://developer.mozilla.org/en-US/docs/Web/API/Window/pageshow_event"; // Replace with the actual URL
        q1a1p.innerHTML = `<a href="${externalLink}">${message}</a>`;
    });