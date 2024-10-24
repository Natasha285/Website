const chatbox = document.getElementById('chatbox');
const userInput = document.getElementById('userInput');

// Event listener for Enter key to send message
userInput.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        sendMessage(); // Call sendMessage function on Enter key press
    }
});

function sendMessage() {
    const message = userInput.value;
    if (message === '') return;

    // Display the user's message
    displayMessage('You', message, 'user');

    // Generate a chatbot response
    generateBotResponse(message);

    // Clear the input field
    userInput.value = '';
}

function displayMessage(sender, message, messageType) {
    const messageElement = document.createElement('p');
    messageElement.textContent = `${sender}: ${message}`;
    messageElement.classList.add('message', messageType);  // Add message class based on user or bot
    chatbox.appendChild(messageElement);
    chatbox.scrollTop = chatbox.scrollHeight;  // Scroll to the latest message
}

function generateBotResponse(input) {
    let botResponse = '';

    if (input.toLowerCase().includes('skills')) {
        botResponse = 'I have skills in C, C++, Python, Java, SQL, and Web Development.';
    } else if (input.toLowerCase().includes('projects')) {
        botResponse = 'I worked on a Chess Program and other web development projects.';
    } else if (input.toLowerCase().includes('contact')) {
        botResponse = 'You can contact me at natashanasim28@gmail.com or 8189963473.';
    } else if (input.toLowerCase().includes('study')) {
        botResponse = 'I studied Computer Science at MIT.';
    } else if (input.toLowerCase().includes('programming languages')) {
        botResponse = 'I know C, C++, Python, Java, and SQL.';
    } else {
        botResponse = "I'm not sure how to respond to that. Try asking about my skills, projects, or contact information.";
    }

    // Display the chatbot's response
    displayMessage('Bot', botResponse, 'bot');
}

// Function to handle top questions
function askQuestion(question) {
    displayMessage('You', question, 'user');  // Display the question
    generateBotResponse(question);            // Generate a response based on the question
}
