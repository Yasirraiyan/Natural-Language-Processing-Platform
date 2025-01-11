const data = [
    "Apple",
    "Banana",
    "Cherry",
    "Date",
    "Elderberry",
    "Fig",
    "Grape",
    "Honeydew"
];

function searchContent() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const results = document.getElementById('searchResults');
    results.innerHTML = '';

    const filteredData = data.filter(item => item.toLowerCase().includes(input));

    if (filteredData.length === 0) {
        results.innerHTML = '<div class="no-result">No results found</div>';
    } else {
        filteredData.forEach(item => {
            const div = document.createElement('div');
            div.className = 'result';
            div.textContent = item;
            results.appendChild(div);
        });
    }
}
