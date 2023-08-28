function toggleContent(contentId) {
    var content = document.getElementById(contentId);
    var title = document.getElementById("title-" + contentId);

    if (content.style.display === "none") {
        content.style.display = "block";
        title.textContent = title.getAttribute("data-title");
    } else {
        content.style.display = "none";
        title.textContent = "";
    }
}

// Get the h2 element by its id and apply the desired styles
var h2Element = document.getElementById("h2cl");
h2Element.style.color = "blue";
h2Element.style.textAlign = "center";
h2Element.style.fontSize = "47px";

var h2Element = document.getElementById("h2he");
h2Element.style.color = "blue";
h2Element.style.textAlign = "center";
h2Element.style.fontSize = "47px";

var h2Element = document.getElementById("h2tr");
h2Element.style.color = "blue";
h2Element.style.textAlign = "center";
h2Element.style.fontSize = "47px";

var h2Element = document.getElementById("h2fr");
h2Element.style.color = "blue";
h2Element.style.textAlign = "center";
h2Element.style.fontSize = "47px";

var h2Element = document.getElementById("h2food");
h2Element.style.color = "blue";
h2Element.style.textAlign = "center";
h2Element.style.fontSize = "47px";

var h2Element = document.getElementById("h2at");
h2Element.style.color = "blue";
h2Element.style.textAlign = "center";
h2Element.style.fontSize = "47px";
