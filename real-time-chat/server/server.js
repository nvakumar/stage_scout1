const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const cors = require("cors");
const path = require("path");

const app = express();
const server = http.createServer(app);
const io = socketIo(server, { cors: { origin: "*", methods: ["GET", "POST"] } });

app.use(cors());
app.use(express.static(path.join(__dirname, "../public")));
app.get("/", (req, res) => res.sendFile(path.join(__dirname, "../public/chat.html")));

// 🔹 Test Users for Dynamic Loading
const users = [
    { username: "man_on_fire_pruvi", avatar: "images/avatar1.png", status: "online" },
    { username: "model_mohi", avatar: "images/avatar2.png", status: "offline" },
    { username: "jolly_praneeth", avatar: "images/avatar3.png", status: "online" },
    { username: "anime_fan_king", avatar: "images/avatar4.png", status: "offline" },
    { username: "script_master", avatar: "images/avatar5.png", status: "online" },
    { username: "voice_actor_jay", avatar: "images/avatar6.png", status: "offline" }
];

io.on("connection", (socket) => {
    console.log("✅ New user connected:", socket.id);

    socket.on("requestUsers", () => {
        console.log("📢 Sending users to frontend:", users);
        socket.emit("loadUsers", users);
    });

    socket.on("sendMessage", (data) => {
        io.emit("receiveMessage", data);
    });

    socket.on("disconnect", () => console.log("❌ User disconnected:", socket.id));
});

server.listen(3008, () => console.log("✅ Server running on http://localhost:3008"));