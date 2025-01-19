# Multi-Container Chat Application

## Project Overview
This project is a multi-container chat application built using Docker Compose, designed to allow real-time messaging between multiple users. It employs a microservices architecture with three core services:

1. **Backend**: A Node.js-based service that handles API endpoints, WebSocket communication, and database operations.
2. **Frontend**: A React-based user interface for users to interact with the chat application.
3. **Database**: A PostgreSQL database to store user and message data persistently.

---

## Key Features
- Real-time communication using WebSockets.
- Multi-user support with a user-friendly interface.
- Persistent message storage in PostgreSQL.
- Containerized architecture for easy deployment.

---

## Services and Their Purpose

### 1. **Backend Service**
- **Purpose**: Manages WebSocket connections, handles API requests, and interacts with the PostgreSQL database.
- **Technology**: Node.js with `express` and `ws` libraries.
- **Endpoints**:
  - `/api/messages`: Retrieve past messages.
  - WebSocket: Handle live communication between clients.

### 2. **Frontend Service**
- **Purpose**: Provides an intuitive user interface for the chat application.
- **Technology**: React.js.
- **Features**:
  - Display chat messages in real-time.
  - Input field for sending new messages.

### 3. **Database Service**
- **Purpose**: Stores user information and chat messages persistently.
- **Technology**: PostgreSQL.
- **Data Structure**:
  - **Users Table**: Stores user details.
  - **Messages Table**: Stores chat messages with timestamps.

---

## How It Works

1. **User Connection**: Users connect to the frontend through a web browser.
2. **Sending a Message**:
   - A user types a message in the chatbox and clicks "Send."
   - The frontend sends the message to the backend through WebSocket.
   - The backend validates the message and stores it in the PostgreSQL database.
3. **Broadcasting Messages**:
   - The backend broadcasts the message to all connected clients via WebSocket.
   - The frontend updates the chat window in real-time for all users.
4. **Receiving Messages**:
   - Users connected to the application receive messages instantly, ensuring seamless communication.

---

## Directory Structure

```
multi_user_chat_app/
├── backend/
│   ├── Dockerfile
│   ├── package.json
│   ├── index.js
│   └── config.js
├── frontend/
│   ├── Dockerfile
│   ├── package.json
│   ├── src/
│       ├── index.js
│       ├── App.js
│       ├── App.css
│       └── components/
└── docker-compose.yml
```

---

## Prerequisites
- Docker and Docker Compose installed on your machine.
- Basic knowledge of containerized applications.

---

## Setup and Deployment

### 1. Clone the Repository
```bash
git clone <repository-url>
cd multi_user_chat_app
```

### 2. Build the Docker Containers
```bash
docker-compose build
```

### 3. Run the Application
```bash
docker-compose up
```

### 4. Access the Application
- Open your web browser and navigate to `http://localhost`.

---

## Docker Compose Configuration
The `docker-compose.yml` file defines the services and their configurations:

```yaml
version: "3.9"
services:
  backend:
    build: ./backend
    ports:
      - "5000:5000"
    volumes:
      - ./backend:/app
    depends_on:
      - db

  frontend:
    build: ./frontend
    ports:
      - "80:80"

  db:
    image: postgres:latest
    environment:
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: password
      POSTGRES_DB: chat_app
    ports:
      - "5432:5432"
    volumes:
      - db_data:/var/lib/postgresql/data

volumes:
  db_data:
```

---

## Future Improvements
- User authentication and registration.
- Improved UI/UX with themes and customization options.
- Support for multimedia messages (images, videos).
- Scaling services with Kubernetes.

---

## Author
Developed by [Your Name]. Feel free to contribute to this project or report any issues.

---

## License
This project is licensed under the MIT License.

