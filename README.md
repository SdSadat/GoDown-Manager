# GoDown Manager

## Features

- **Hierarchical Tree View**: Displays the structure of godowns and sub-locations in a collapsible tree format.
- **Item Management**: Users can view details about items stored in each godown, including images, categories, quantities, prices, and other attributes.
- **User Authentication**: Secure login/logout functionality using JWT (JSON Web Tokens).

## Deployment
Link: http://godown.work.gd/
Demo: [G-Drive](https://drive.google.com/file/d/1jboL8colLd6pHs-xrxh1vOLN1WED8RPh/view?usp=sharing)

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
- **Web Server**
  - Nginx
- **Containerization**
  - Docker and Docker Compose
## Installation

1. **Clone the Repository**
      ```bash
   git clone https://github.com/SdSadat/GoDown-Manager.git
   cd GoDown-Manager 

2. **Install Docker**
    ```
    # Install Docker
    sudo apt update
    sudo apt install docker.io

    # Start Docker service
    sudo systemctl start docker
    sudo systemctl enable docker

    # Install Docker Compose
    sudo curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
    sudo chmod +x /usr/local/bin/docker-compose

    # Verify Docker and Docker Compose installations
    docker --version
    docker-compose --version

3. **Build and Run Conainers**
   ```bash
    docker-compose up --build -d
    #Verify Containers are running:
    docker ps

## Run locally without docker

1. **Clone the Repository**
   ```bash
   git clone https://github.com/SdSadat/GoDown-Manager.git
   cd GoDown-Manager 
2. **Install dependencies**
   ```bash
   npm install
   cd backend
   npm install
3. **Run backend Server**
    ```
    node server.js
4. **Run frontend application**
   ```
   cd ..
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

**Default login credentials**
   ```
   Email: user@godown.com
   Password: godown12