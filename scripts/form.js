const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        averagerating: 5.0
    }
];

function addProducts() {
    let productSelect = document.getElementById('productName');
    products.forEach(product => {
        const option = document.createElement('option');
        option.value = product.name;
        option.textContent = product.name;
        productSelect.appendChild(option);
    });
}

function displayReviewData() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    let div = document.getElementById('reviewSummary');
    const productName = urlParams.get('productName');
    const rating = urlParams.get('rating');
    const durability = urlParams.get('durability');
    const reviewText = urlParams.get('reviewText');
    const userName = urlParams.get('userName');
    div.innerHTML = `
    <h3>Product Name:</h3>
    <p>${productName}</p>
    <h3>Rating:</h3>
    <p>${rating}</p>
    <h3>Durability:</h3>
    <p>${durability}</p>
    <h3>Review Text:</h3>
    <p>${reviewText}</p>
    <h3>User Name:</h3>
    <p>${userName}</p>
    `;
}

function updateReviewCounter() {
    if (reviewCount) {
        let count = localStorage.getItem('reviewCount');
        if (count === null) {
            count = 0;
        } else {
            count = parseInt(count);
        }
        count++;
        localStorage.setItem('reviewCount', count);
        if (count === 1) {
            reviewCount.textContent = "This is your first review submission. Thank you!";
        } else {
            reviewCount.textContent = `You have submitted ${count} reviews. We appreciate your feedback!`;
        }
    }
}

function initializePage() {
    if (window.location.pathname.includes('review.html')) {
        displayReviewData();
        updateReviewCounter();
    } else {
        addProducts();
    }
}

document.addEventListener('DOMContentLoaded', initializePage);