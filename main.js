// main.js

// Task 2: Fetch Products from the API Using Fetch and Promises
function fetchProducts() {
  fetch('https://www.course-api.com/javascript-store-products')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => displayProducts(data)); // Call to display products on successful fetch
}

