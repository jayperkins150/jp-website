window.onload = function() {
    alert ("Hey! You're looking great today ;)");
}

function changeHeadingText() {
    var headingElement = document.getElementById("dontClick");
    headingElement.textContent = "I told you not to click here!";
    console.log("The forbidden button has been clicked! Oh no!");
}

