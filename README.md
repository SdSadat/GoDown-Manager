# GoDown Manager

## Features

- **Hierarchical Tree View**: Displays the structure of godowns and sub-locations in a collapsible tree format.
- **Item Management**: Users can view details about items stored in each godown, including images, categories, quantities, prices, and other attributes.
- **User Authentication**: Secure login/logout functionality using JWT (JSON Web Tokens).

## Technologies Used

- **Frontend**: 
  - React.js (with Vite)
  - Axios (for API calls)
- **Backend**: 
  - Node.js and Express
  - JSON Web Tokens (JWT)
  - bcryptjs (for hashing)
- **Database**: 
  - Mock JSON data structure for godowns and items

## Installation

1. **Clone the Repository**
   ```bash
   git clone https://github.com/SdSadat/GoDown-Manager.git
   cd godown-manager
2. **Install dependencies**
   ```bash
   npm install
   cd src/backend
   npm install
3. **Run backend Server**
    ```
    node server.js
4. **Run frontend application**
   ```
   cd ../..
   npm run dev
## API Integration
The application communicates with the backend using RESTful API endpoints. The following endpoints are utilized:

- POST /auth/login: Authenticates users and returns a JWT token.
- GET /protected: A protected route that requires a valid JWT token.
- GET /godowns: returns all godowns
- GET /items/godownId: returns all items for given godownId
- GET /godowns/godownId/children: returns all children for given godownId


## Authentication
The application uses JWT for authentication:

- Users log in with their credentials.
- Upon successful authentication, the server responds with a JWT token.
- The token is stored in localStorage for subsequent requests.
- The app checks for the token on load to determine if the user is authenticated.
- Users can log out, which clears the token and returns them to the login page.

