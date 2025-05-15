const socket = io("http://localhost:3008");

document.addEventListener("DOMContentLoaded", () => {
    const chatBox = document.getElementById("chat-box");
    const messageInput = document.getElementById("message-input");
    const sendButton = document.getElementById("send-button");
    const chatName = document.getElementById("chat-name");
    const chatAvatar = document.getElementById("chat-avatar");
    const userList = document.getElementById("user-list");
    let activeChat = "";

    console.log("📢 Requesting users from server...");
    socket.emit("requestUsers");

    // Load users dynamically from server
    socket.on("loadUsers", (users) => {
        console.log("✅ Users received from server:", users);
        userList.innerHTML = ""; // Clear previous list

        users.forEach(user => {
            console.log(`📌 Adding user: ${user.username}`);
            const userItem = document.createElement("li");
            userItem.classList.add("user");
            userItem.setAttribute("data-username", user.username);

            userItem.innerHTML = `
                <img src="${user.avatar || 'images/default-avatar.png'}" alt="Avatar">
                <span class="username">${user.username}</span>
                <span class="status ${user.status}"></span>
            `;

            userItem.addEventListener("click", () => {
                activeChat = user.username;
                chatName.textContent = user.username;
                chatAvatar.src = user.avatar || "images/default-avatar.png";
                chatBox.innerHTML = "";
            });

            userList.appendChild(userItem);
        });

        console.log("✅ All users added to the sidebar.");
    });

    function sendMessage() {
        if (messageInput.value.trim() === "" || activeChat === "") return;

        const msgData = {
            sender: "You",
            receiver: activeChat,
            text: messageInput.value,
        };

        socket.emit("sendMessage", msgData);
        displayMessage("You", messageInput.value, "sent");
        messageInput.value = "";
    }

    sendButton.addEventListener("click", sendMessage);
    messageInput.addEventListener("keypress", (e) => { if (e.key === "Enter") sendMessage(); });

    function displayMessage(user, text, type) {
        const messageElement = document.createElement("div");
        messageElement.classList.add("message", type);
        messageElement.innerHTML = `<strong>${user}:</strong> ${text}`;
        chatBox.appendChild(messageElement);
        chatBox.scrollTop = chatBox.scrollHeight;
    }

    socket.on("receiveMessage", (data) => {
        if (data.receiver === "You" || data.sender === activeChat) {
            displayMessage(data.sender, data.text, "received");
        }
    });
});