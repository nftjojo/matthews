// Function to handle tab switching
document.querySelectorAll('.tab-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Remove active class from all links
        document.querySelectorAll('.tab-link').forEach(link => link.classList.remove('active'));
        
        // Add active class to the clicked link
        this.classList.add('active');
        
        // Hide all tab contents
        document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
        
        // Show the corresponding tab content
        const tab = this.getAttribute('data-tab');
        document.getElementById(tab).classList.add('active');
    });
});

// Placeholder for wallet connection
document.getElementById('connect-wallet').addEventListener('click', function() {
    alert('Wallet connection functionality to be implemented.');
});
