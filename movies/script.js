// Movie Data (Dynamic List)
const movies = [
    { title: "Movie 1", image: "images/short-film.jpg", profile: "images/profile.png", user: "John Doe", category: "full-movies" },
    { title: "Movie 2", image: "images/t2.jpg", profile: "images/profile.png", user: "Jane Smith", category: "short-videos" },
    { title: "Movie 3", image: "images/t2.jpg", profile: "images/profile.png", user: "Chris Evans", category: "scripts" },
    { title: "Movie 4", image: "images/t2.jpg", profile: "images/profile.png", user: "Emma Watson", category: "anime" },
    { title: "Movie 5", image: "images/t2.jpg", profile: "images/profile.png", user: "Robert Downey", category: "manga" },
    { title: "Movie 6", image: "images/t2.jpg", profile: "images/profile.png", user: "Scarlett Johansson", category: "full-movies" }
];

// Load Movies Dynamically
const movieContainer = document.getElementById("movie-container");

function loadMovies() {
    movieContainer.innerHTML = ""; // Clear existing movies
    
    movies.forEach(movie => {
        const movieElement = document.createElement("div");
        movieElement.classList.add("movie");
        movieElement.innerHTML = `
            <img src="${movie.image}" alt="${movie.title}">
            <div class="info">
                <p class="title">${movie.title}</p>
                <div class="profile">
                    <img src="${movie.profile}" alt="${movie.user}">
                    <p>${movie.user}</p>
                </div>
            </div>
        `;
        movieContainer.appendChild(movieElement);
    });
}

// Scroll Functionality
const leftBtn = document.querySelector(".left");
const rightBtn = document.querySelector(".right");

leftBtn.addEventListener("click", () => {
    movieContainer.scrollBy({ left: -300, behavior: "smooth" });
});

rightBtn.addEventListener("click", () => {
    movieContainer.scrollBy({ left: 300, behavior: "smooth" });
});

// Initial Load
loadMovies();
