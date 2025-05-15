// JavaScript for Interactivity (optional)
document.querySelector('.search-bar').addEventListener('input', function () {
    const query = this.value.toLowerCase();
    const items = document.querySelectorAll('.movie-item, .short-video-item, .script-item, .manga-item, .anime-item');

    items.forEach(item => {
        const title = item.querySelector('p').textContent.toLowerCase();
        if (title.includes(query)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
});
