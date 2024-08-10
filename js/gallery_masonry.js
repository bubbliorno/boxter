// Waiting for everything on the page to load
window.onload = () => {
    // Sets the grid var to .container
    const grid = document.querySelector('.container');

    // Creates new Masonry grid and defines it
    const masonry = new Masonry(grid, {
        itemSelector: 'img',
        columnWidth: '.container img',
        fitWidth: true,
        gutter: 10
    });
}