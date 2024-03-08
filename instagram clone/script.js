// Navbar toggle button
document.querySelector('.navbar-toggler').addEventListener('click', function() {
    document.querySelector('.navbar-collapse').classList.toggle('show');
  });
  
  // Search form toggle for small screens
  document.querySelector('.form-inline').addEventListener('click', function() {
    document.querySelector('.form-inline').classList.toggle('active');
  });
  
  // Like button functionality
  document.querySelectorAll('.fa-heart').forEach(function(likeBtn) {
    likeBtn.addEventListener('click', function() {
      this.classList.toggle('fas'); // Toggle filled heart icon
      this.classList.toggle('far'); // Toggle empty heart icon
    });
  });
  
  // Comment button functionality
  document.querySelectorAll('.fa-comment').forEach(function(commentBtn) {
    commentBtn.addEventListener('click', function() {
      // Add your comment functionality here
    });
  });
  
  // Share button functionality
  document.querySelectorAll('.fa-paper-plane').forEach(function(shareBtn) {
    shareBtn.addEventListener('click', function() {
      // Add your share functionality here
    });
  });
  
  // Bookmark button functionality
  document.querySelectorAll('.fa-bookmark').forEach(function(bookmarkBtn) {
    bookmarkBtn.addEventListener('click', function() {
      this.classList.toggle('fas'); // Toggle filled bookmark icon
      this.classList.toggle('far'); // Toggle empty bookmark icon
    });
  });
  