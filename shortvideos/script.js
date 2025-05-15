// Video Data (Dynamic List)
const reels = [
    { src: "videos/reel1.mp4", user: "John Doe", profile: "images/profile.png", thumbnail: "images/short1.jpg" },
    { src: "videos/reel2.mp4", user: "Jane Smith", profile: "images/profile.png", thumbnail: "images/short1.jpg" },
    { src: "videos/reel3.mp4", user: "Chris Evans", profile: "images/profile.png", thumbnail: "images/short1.jpg" },
    { src: "videos/reel4.mp4", user: "Emma Watson", profile: "images/profile.png", thumbnail: "images/short1.jpg" },
];

// Load Reels Dynamically
const reelsContainer = document.getElementById("reels-container");

function loadReels() {
    reelsContainer.innerHTML = ""; // Clear existing reels

    reels.forEach(reel => {
        const reelElement = document.createElement("div");
        reelElement.classList.add("short-video");
        reelElement.innerHTML = `
            <video src="${reel.src}" loop muted playsinline poster="${reel.thumbnail}"></video>
            <div class="overlay">
                <div class="profile">
                    <img src="${reel.profile}" alt="${reel.user}">
                    <p>${reel.user}</p>
                </div>
            </div>
            <div class="actions">
                <button onclick="likeReel()">❤️</button>
                <button onclick="commentReel()">💬</button>
                <button onclick="shareReel()">📤</button>
            </div>
        `;
        reelsContainer.appendChild(reelElement);
    });

    // Play first video automatically
    let firstVideo = reelsContainer.querySelector(".short-video video");
    if (firstVideo) firstVideo.play();
}

// Auto Play Next Video on Scroll
reelsContainer.addEventListener("scroll", () => {
    let videos = document.querySelectorAll(".short-video video");

    videos.forEach((video) => {
        let rect = video.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
            video.play();
        } else {
            video.pause();
        }
    });
});

// Like, Comment, Share Functions
function likeReel() { alert("Liked Reel ❤️"); }
function commentReel() { alert("Comment Feature Coming Soon! 💬"); }
function shareReel() { alert("Share Feature Coming Soon! 📤"); }

// Initial Load
loadReels();
