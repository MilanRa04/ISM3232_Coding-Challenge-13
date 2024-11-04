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
    .then(data => displayProducts(data)) // Call to display products on successful fetch
    .catch(error => {
      // Task 4: Handle Errors Gracefully
      console.error('Error fetching products:', error);
      document.getElementById('product-container').innerHTML = '<p>Failed to load products. Please try again later.</p>'; // Display friendly error message
    });
}

// Task 3: Display Product Details Dynamically
function displayProducts(products) {
  const container = document.getElementById('product-container');
  container.innerHTML = ''; // Clear any existing content

  products.forEach(product => {
    // Extract necessary data from each product
    const { company, price, name } = product.fields;
    const imgSrc = product.fields.image[0].url;

    // Create a product element
    const productElement = document.createElement('div');
    productElement.className = 'product';

    // Add product HTML structure
    productElement.innerHTML = `
      <img src="${imgSrc}" alt="${name}" class="product-image">
      <h2 class="product-name">${name}</h2>
      <p class="product-company">Company: ${company}</p>
      <p class="product-price">$${(price / 100).toFixed(2)}</p>
    `;

    // Append the product element to the container
    container.appendChild(productElement);
  });
}
document.addEventListener('DOMContentLoaded', fetchProducts);