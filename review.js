document.addEventListener("DOMContentLoaded", function() {
    const reviewForm = document.getElementById("reviewForm");
    const reviewsList = document.getElementById("reviewsList");
    const starRating = document.getElementById("starRating");
    const ratingInput = document.getElementById("rating");

    // Handle star click events
    starRating.addEventListener("click", function(event) {
        if (event.target.classList.contains("star")) {
            const value = event.target.getAttribute("data-value");
            ratingInput.value = value;
            updateStars(value);
        }
    });

    // Update star display based on rating
    function updateStars(rating) {
        const stars = starRating.querySelectorAll(".star");
        stars.forEach(star => {
            if (star.getAttribute("data-value") <= rating) {
                star.classList.add("selected");
            } else {
                star.classList.remove("selected");
            }
        });
    }

    // Load reviews from local storage
    function loadReviews() {
        const reviews = JSON.parse(localStorage.getItem("reviews")) || [];
        reviewsList.innerHTML = '';
        reviews.forEach((review) => {
            const reviewItem = document.createElement("div");
            reviewItem.className = "review-item";
            reviewItem.innerHTML = `
                <h3>${review.pokemonName}</h3>
                <p>${review.reviewText}</p>
                <div class="star-rating">${displayStars(review.rating)}</div>
            `;
            reviewsList.appendChild(reviewItem);
        });
    }

    // Function to display stars based on rating
    function displayStars(rating) {
        let stars = '';
        for (let i = 1; i <= 5; i++) {
            stars += i <= rating ? '&#9733;' : '&#9734;';
        }
        return stars;
    }

    // Save a review
    reviewForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const pokemonName = document.getElementById("pokemonName").value;
        const reviewText = document.getElementById("reviewText").value;
        const rating = ratingInput.value;

        const reviews = JSON.parse(localStorage.getItem("reviews")) || [];
        reviews.push({ pokemonName, reviewText, rating });
        localStorage.setItem("reviews", JSON.stringify(reviews));

        // Clear the form
        reviewForm.reset();
        updateStars(0);

        // Reload the reviews
        loadReviews();
    });

    // Initial load of reviews
    loadReviews();
});