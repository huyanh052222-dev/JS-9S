const searchBar = document.getElementById('searchBar');

function toggleSearchBar() {
    const barShow = searchBar.classList.contains('show');

    if (barShow) {
        searchBar.classList.remove('visible');
        
        searchBar.addEventListener('transitionend', function() {
            if (!searchBar.classList.contains('visible')) {
                searchBar.classList.remove('show');
            }
        }, { once: true }); 

    } else {
        searchBar.classList.add('show');
        setTimeout(() => {
            searchBar.classList.add('visible');
        }, 5);
    }
}