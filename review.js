const stars = document.querySelectorAll('.star');
let selectedRating = 0;

stars.forEach(star => {
    star.addEventListener('click', function() {
        selectedRating = this.getAttribute('data-value');
        document.getElementById('rating').value = selectedRating;

        // Clear previous selections
        stars.forEach(star => star.classList.remove('selected'));

        // Add selected class to the clicked star and all preceding stars
        this.classList.add('selected');
        let previousSibling = this.previousElementSibling;
        while (previousSibling) {
            previousSibling.classList.add('selected');
            previousSibling = previousSibling.previousElementSibling;
        }
    });

    // Handle hover effect for stars
    star.addEventListener('mouseover', function() {
        stars.forEach(star => star.classList.remove('hovered'));
        this.classList.add('hovered');
        let previousSibling = this.previousElementSibling;
        while (previousSibling) {
            previousSibling.classList.add('hovered');
            previousSibling = previousSibling.previousElementSibling;
        }
    });

    // Remove hover effect when the mouse leaves
    star.addEventListener('mouseout', function() {
        stars.forEach(star => star.classList.remove('hovered'));
    });
});

// Handle form submission
document.getElementById('reviewForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form submission
    
    const name = document.getElementById('name').value;
    const review = document.getElementById('review').value;
    const rating = parseInt(document.getElementById('rating').value, 10); // Convert rating to number
    
    if (!rating) {
        alert('Please select a star rating');
        return;
    }
    
    const reviewElement = document.createElement('li');
    reviewElement.innerHTML = `<h3>${name}</h3><div class="stars">${'&#9733;'.repeat(rating)}${'&#9734;'.repeat(5 - rating)}</div><p>${review}</p>`;
    
    document.getElementById('reviewList').appendChild(reviewElement);
    
    // Reset the form
    document.getElementById('name').value = '';
    document.getElementById('review').value = '';
    document.getElementById('rating').value = 0;
    stars.forEach(star => star.classList.remove('selected'));
});
