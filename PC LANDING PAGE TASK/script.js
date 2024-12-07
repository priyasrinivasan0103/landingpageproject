// Handle form submission
document.getElementById('lead-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    // Display a thank-you message
    alert(`Thank you, ${name}! We will contact you at ${email}.`);

    // Hide the popup form
    document.getElementById('popup-form').style.display = 'none';

    // Show the main content
    document.querySelectorAll('header, section, footer').forEach((el) => {
        el.style.display = 'block';
    });
});

// Show books and details on "Get Started Now"
function showBooks() {
    document.getElementById('ebooks').style.display = 'block';
    document.getElementById('details-section').style.display = 'block';
}

// Show book details
function showDetails(title, description, price) {
    const details = `Title: ${title}\nDescription: ${description}\nPrice: ${price}`;
    document.getElementById('book-details').textContent = details;
}
