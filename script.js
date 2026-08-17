// Switch pages periodically or based on URL param
const urlParams = new URLSearchParams(window.location.search);
const pageParam = urlParams.get('page');

const page1 = document.getElementById('page1');
const page2 = document.getElementById('page2');

if (pageParam === '1') {
    page1.style.display = 'block';
    page2.style.display = 'none';
} else if (pageParam === '2') {
    page1.style.display = 'none';
    page2.style.display = 'block';
} else {
    // Rotating display if no parameter is set
    let currentPage = 1;
    setInterval(() => {
        if (currentPage === 1) {
            page1.style.display = 'none';
            page2.style.display = 'block';
            currentPage = 2;
        } else {
            page1.style.display = 'block';
            page2.style.display = 'none';
            currentPage = 1;
        }
    }, 15000); // 15 seconds per page
}