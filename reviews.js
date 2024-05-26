// reviews.js
document.addEventListener('DOMContentLoaded', () => {
    const reviewForm = document.getElementById('reviewForm');
    const reviewsList = document.getElementById('reviewsList');

    // Function to fetch reviews from localStorage
    function fetchReviews() {
        const reviews = JSON.parse(localStorage.getItem('pokemonReviews')) || [];
        reviewsList.innerHTML = '';
        reviews.forEach(review => {
            const reviewItem = document.createElement('div');
            reviewItem.classList.add('review-item');
            reviewItem.innerHTML = `<h3>${review.pokemonName}</h3><p>${review.reviewText}</p>`;
            reviewsList.appendChild(reviewItem);
        });
    }

    // Fetch reviews when the page loads
    fetchReviews();

reviewForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const pokemonName = document.getElementById('pokemonName').value;
    const reviewText = document.getElementById('reviewText').value;

    const newReview = { pokemonName, reviewText };
    const reviews = JSON.parse(localStorage.getItem('pokemonReviews')) || [];
    reviews.push(newReview);
    localStorage.setItem('pokemonReviews', JSON.stringify(reviews));

    reviewForm.reset();
    fetchReviews();
});


});
