// Waiting for everything on the page to load
window.onload = () => {
    // Sets the grid var to .container
    const grid = document.querySelector('.container');

    // 
    const masonry = new Masonry(grid, {
        itemSelector: 'img',
        columnWidth: '.container img',
        fitWidth: true,
        gutter: 10
    });
}