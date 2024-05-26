function fetchReviews() {
    const reviews = JSON.parse(localStorage.getItem('pokemonReviews')) || [];
    console.log('Retrieved reviews from local storage:', reviews);
    reviewsList.innerHTML = '';
    reviews.forEach(review => {
        console.log('Processing review:', review);
        const reviewItem = document.createElement('div');
        reviewItem.classList.add('review-item');
        reviewItem.dataset.reviewId = review.id; // Assuming each review has a unique identifier
        let reviewContent = `
            <h3>${review.pokemonName}</h3>
            <div class="rating">
                ${getStarRatingHTML(Number(review.rating))}
            </div>
            <p>${review.reviewText}</p>
        `;
        reviewItem.innerHTML = reviewContent;
        reviewsList.appendChild(reviewItem);

        // Initialize stars for this review
        const stars = reviewItem.querySelectorAll('.star');
        const rating = parseInt(review.rating);
        stars.forEach(star => {
            const starValue = parseInt(star.getAttribute('data-value'));
            if (starValue <= rating) {
                star.classList.add('selected');
            }
        });
    });
}


// Function to generate star rating HTML based on rating value
function getStarRatingHTML(rating) {
    console.log('Rating value:', rating);
    let starsHTML = '';
    for (let i = 0; i < 5; i++) {
        if (i < rating) {
            starsHTML += '<span class="star checked">★</span>';
        } else {
            starsHTML += '<span class="star">★</span>';
        }
    }
    return starsHTML;
}

document.addEventListener('DOMContentLoaded', () => {
    const reviewForm = document.getElementById('reviewForm');
    const reviewsList = document.getElementById('reviewsList');

    // Handle form submission
    reviewForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const pokemonName = document.getElementById('pokemonName').value.trim();
        const reviewText = document.getElementById('reviewText').value.trim();
        const rating = document.querySelector('.star.selected').getAttribute('data-value');

        console.log('Pokemon Name:', pokemonName);
        console.log('Review Text:', reviewText);
        console.log('Rating:', rating);

        // Validate inputs
        if (!pokemonName || !reviewText || !rating) {
            alert('Please fill out all fields and select a rating.');
            return;
        }

        const newReview = { pokemonName, reviewText, rating };
        const reviews = JSON.parse(localStorage.getItem('pokemonReviews')) || [];
        reviews.push(newReview);
        localStorage.setItem('pokemonReviews', JSON.stringify(reviews));

        reviewForm.reset();
        fetchReviews();
    });

    // Handle star rating selection
    document.querySelectorAll('.star').forEach(star => {
        star.addEventListener('click', () => {
            const clickedValue = parseInt(star.getAttribute('data-value'));
            document.querySelectorAll('.star').forEach(star => {
                const starValue = parseInt(star.getAttribute('data-value'));
                if (starValue <= clickedValue) {
                    star.classList.add('selected');
                } else {
                    star.classList.remove('selected');
                }
            });
        });
    });

    // Function to initialize stars for each review
    function initializeStars() {
        const reviews = JSON.parse(localStorage.getItem('pokemonReviews')) || [];
        reviews.forEach(review => {
            const reviewItem = reviewsList.querySelector(`[data-review-id="${review.id}"]`);
            if (reviewItem) {
                const stars = reviewItem.querySelectorAll('.star');
                const rating = parseInt(review.rating);
                stars.forEach(star => {
                    const starValue = parseInt(star.getAttribute('data-value'));
                    if (starValue <= rating) {
                        star.classList.add('selected');
                    }
                });
            }
        });
    }


    // Call initializeStars when the page loads
    initializeStars();

});
