# Task Management Application

## Description

This is a Task Management Application built with React for the frontend and Node.js with Express for the backend. The application allows users to add, update, delete, and view tasks.

## Features

- Add new tasks with a title, description, and due date
- View detailed information of each task
- Edit existing tasks
- Delete tasks
- Responsive design for usability on both desktop and mobile devices

## Prerequisites

Make sure you have the following installed:

- Node.js (https://nodejs.org/)
- npm (https://www.npmjs.com/)
- MongoDB (https://www.mongodb.com/)

## Getting Started

Follow these steps to run the application locally:

### Backend Setup

1. Clone the repository:

    ```sh
    git clone https://github.com/your-username/task-manager.git
    cd task-manager
    ```

2. Navigate to the `backend` directory:

    ```sh
    cd backend
    ```

3. Install backend dependencies:

    ```sh
    npm install
    ```

4. Create a `.env` file in the `backend` directory and add your MongoDB connection string:

    ```sh
    touch .env
    echo "MONGO_URI=your_mongodb_connection_string" > .env
    ```

5. Start the backend server:

    ```sh
    npm start
    ```

   The backend server will start on `http://localhost:5000`.

### Frontend Setup

1. Open a new terminal and navigate to the `frontend` directory:

    ```sh
    cd frontend
    ```

2. Install frontend dependencies:

    ```sh
    npm install
    ```

3. Start the frontend development server:

    ```sh
    npm start
    ```

   The frontend server will start on `http://localhost:3000`.

## Usage

- Open your browser and go to `http://localhost:3000`.
- Use the form to add new tasks.
- View the list of tasks on the right side of the screen.
- Edit or delete tasks using the buttons provided.

## Screenshot

![Task Management Application Screenshot](screenshot.png)

## Deployment

Check out the live version of the application [here](http://your-deployment-link.com).

## Project Structure

