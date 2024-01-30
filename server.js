const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors()); // Enable CORS

// Create an endpoint to fetch 20 posts
app.get('/api/posts', async (req, res) => {
  try {
    // Fetch posts from the provided API link
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts/');

    // Send only the first 20 posts
    const posts = response.data.slice(0, 20);

    res.json(posts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

    function login() {
    const username = document.getElementById('loginUsername').value;
    const zipcode = document.getElementById('loginZipcode').value;

    // Fetch user data from the given endpoint
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => {
        const user = users.find(u => u.username === username && u.address.zipcode === zipcode);
        if (user) {
          alert('Login successful');
          // Redirect to another page or perform additional actions
        } else {
          alert('Invalid credentials');
        }
      })
      .catch(error => console.error('Error:', error));
  }

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
