// backend/controllers/userController.js
// Example controller function for handling GET /auth/users
const getUsers = (req, res) => {
    // Logic to fetch users from database or other data source
    const users = [
      { id: 1, username: 'user1' },
      { id: 2, username: 'user2' },
      // Add more users as needed
    ];
  
    res.json(users); // Send JSON response with users data
  };
  
  module.exports = {
    getUsers,
  };
  