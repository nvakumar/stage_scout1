document.addEventListener("DOMContentLoaded", function () {
    const mangaData = [
        { 
            title: "Manga Title 1", 
            author: "Anna White", 
            img: "images/m2.png", 
            pages: ["images/m1_page1.jpg", "images/m1_page2.jpg"]
        },
        { 
            title: "Manga Title 2", 
            author: "John Smith", 
            img: "images/m2.png", 
            pages: ["images/m2_page1.jpg", "images/m2_page2.jpg"]
        }
    ];

    const scriptData = [
        { 
            title: "Script Title 1", 
            author: "Michael Lee", 
            img: "images/script.png", 
            content: "Sample Script 1"
        },
        { 
            title: "Script Title 2", 
            author: "Anna Johnson", 
            img: "images/script.png", 
            content: "Sample Script 2"
        }
    ];

    const mangaContainer = document.querySelector(".manga-section");
    const scriptContainer = document.querySelector(".script-section");

    // Load Manga
    mangaData.forEach((manga) => {
        const mangaItem = document.createElement("div");
        mangaItem.classList.add("manga-item");
        mangaItem.innerHTML = `
            <img src="${manga.img}" alt="${manga.title}">
            <div class="info">
                <p class="title">${manga.title}</p>
                <div class="profile">
                    <img src="images/profile.png" alt="Profile">
                    <p>${manga.author}</p>
                </div>
            </div>
        `;
        mangaContainer.appendChild(mangaItem);

        // Open Manga Reader
        mangaItem.addEventListener("click", () => {
            openLightbox(manga.pages);
        });
    });

    // Load Scripts
    scriptData.forEach((script) => {
        const scriptItem = document.createElement("div");
        scriptItem.classList.add("script-item");
        scriptItem.innerHTML = `
            <img src="${script.img}" alt="${script.title}">
            <div class="info">
                <p class="title">${script.title}</p>
                <div class="profile">
                    <img src="images/profile.png" alt="Profile">
                    <p>${script.author}</p>
                </div>
            </div>
        `;
        scriptContainer.appendChild(scriptItem);

        // Show Script Content
        scriptItem.addEventListener("click", () => {
            alert(`Opening script: ${script.content}`);
        });
    });

    // Lightbox for Manga Reading
    const lightbox = document.createElement("div");
    lightbox.classList.add("lightbox");
    document.body.appendChild(lightbox);

    lightbox.innerHTML = `
        <span class="close-btn">&times;</span>
        <img id="manga-page" src="">
    `;

    const closeBtn = lightbox.querySelector(".close-btn");
    const mangaPage = lightbox.querySelector("#manga-page");

    let currentPages = [];
    let currentIndex = 0;

    function openLightbox(pages) {
        currentPages = pages;
        currentIndex = 0;
        mangaPage.src = currentPages[currentIndex];
        lightbox.style.display = "flex";
    }

    function closeLightbox() {
        lightbox.style.display = "none";
    }

    function nextPage() {
        if (currentIndex < currentPages.length - 1) {
            currentIndex++;
            mangaPage.src = currentPages[currentIndex];
        }
    }

    function prevPage() {
        if (currentIndex > 0) {
            currentIndex--;
            mangaPage.src = currentPages[currentIndex];
        }
    }

    closeBtn.addEventListener("click", closeLightbox);
    lightbox.addEventListener("click", nextPage);
    document.addEventListener("keydown", (e) => {
        if (e.key === "ArrowRight") nextPage();
        if (e.key === "ArrowLeft") prevPage();
        if (e.key === "Escape") closeLightbox();
    });
});
