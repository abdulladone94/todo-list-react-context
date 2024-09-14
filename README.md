# React Todo List with Authentication

This project is a simple React-based Todo List application that includes user authentication (sign-up and login) managed using local storage. After logging in, users can manage their todo list, including adding, viewing, editing, deleting, and marking todo items as completed. The todo items are managed globally using React Context.

## Features

- **User Authentication**
  - Sign-up and login pages for user management.
  - User data (username, password) stored in local storage.
  - Simple validation for sign-up and login.
- **Todo List**
  - Add a new todo item.
  - View all todo items.
  - Edit existing todo items.
  - Delete todo items.
  - Mark todo items as completed.
- **State Management**
  - Todos are managed globally using React Context.

## Getting Started

Follow the instructions below to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You need to have Node.js and npm installed on your machine. You can download them from [here](https://nodejs.org/).

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/abdulladone94/todo-list-react-context.git

   npm install

   npm run dev

   http://localhost:5174
   ```

Components

Auth Components
SignUp.js: Component for new users to register.
Login.js: Component for existing users to log in.

Todo Components
TodoList.js: Displays the list of todos for the logged-in user.
TodoItem.js: Represents a single todo item with options to edit, delete, or mark as completed.

Context

TodoContext: Manages the state of the todo items globally, using React Context API. The context provides functions to add, edit, delete, and toggle the completion status of todos.

Custom Hook (Optional)

useAuth: Custom hook for handling user authentication logic, including sign-up, login, and persisting user session in local storage

Usage

Sign Up:
New users can sign up by entering a username and password. The credentials are saved in local storage.

Log In:
Existing users can log in using their credentials.

Todo Management:
After logging in, the user can add new todo items, edit existing ones, delete them, or mark them as completed.

The list of todos is managed globally using the React Context API.

Built With

- React.js - Frontend framework
- LocalStorage - Browser storage for user management
- React Context API - For managing the state of todo items
