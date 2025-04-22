# Postify-Backend

Postify-Backend is a Node.js proxy server built with Express. It serves as a middleware between the React frontend (Postify) and the [JSONPlaceholder](https://jsonplaceholder.typicode.com/) API, providing a unified and production-ready backend layer. This allows for enhanced control over API requests, central configuration, and future extensibility like authentication or logging.

## Project Structure

```txt
Postify-Backend/
├── routes/
│   ├── posts.js         # Handles GET, POST, DELETE for posts
│   ├── comments.js      # Handles GET comments by post ID
│   └── users.js         # Handles GET users and search by email
├── package.json         # Project metadata and dependencies
├── server.js            # Main Express server setup
```

## Frontend Repository: 
[Postify-Frontend](https://github.com/wevekamola/Postify-Frontend)
