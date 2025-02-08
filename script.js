var navLinks = document.getElementById("navLinks");

function showMenu() {
    navLinks.style.right = "0";
}

function hideMenu() {
    navLinks.style.right = "-200px";
}

// Function to scroll to a specific section smoothly
function scrollToSection(sectionId) {
    var section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: "smooth" });
    }
}

// Adding click events to navigation links
document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("a[href='#home']").onclick = function () { scrollToSection("home"); };
    document.querySelector("a[href='#about']").onclick = function () { scrollToSection("aboutus"); };
    document.querySelector("a[href='#services']").onclick = function () { scrollToSection("services"); };
    document.querySelector("a[href='#portfolio']").onclick = function () { scrollToSection("portfolio"); };
    document.querySelector("a[href='#contact']").onclick = function () { scrollToSection("cta"); };
});


// chatboat

function toggleChat() {
    var chat = document.querySelector(".chatbot");
    chat.style.display = chat.style.display === "flex" ? "none" : "flex";
}

function sendMessage() {
    var userInput = document.getElementById("userInput").value;
    if (userInput.trim() === "") return;

    var chatBody = document.getElementById("chatBody");

    // Display user message
    var userMsg = document.createElement("div");
    userMsg.classList.add("user-message");
    userMsg.innerText = userInput;
    chatBody.appendChild(userMsg);

    // Clear input field
    document.getElementById("userInput").value = "";

    // Bot responses
    setTimeout(() => {
        var botMsg = document.createElement("div");
        botMsg.classList.add("bot-message");

        var response = getBotResponse(userInput.toLowerCase());
        botMsg.innerText = response;
        chatBody.appendChild(botMsg);

        // Auto-scroll to the latest message
        chatBody.scrollTop = chatBody.scrollHeight;
    }, 500);
}

function getBotResponse(input) {
    if (input.includes("hello") || input.includes("hi")) {
        return "Hello! How can I assist you today?";
    } else if (input.includes("services")) {
        return "We offer web development, IT consulting, and cybersecurity services.";
    } else if (input.includes("contact")) {
        return "You can contact us at support@example.com.";
    } else {
        return "I'm not sure about that. Can you ask something else?";
    }
}

function handleKeyPress(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
}
