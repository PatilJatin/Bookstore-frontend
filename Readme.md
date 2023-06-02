# Book Haven

Book Haven is a web application for a book store built using Vite and ReactJS.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Routes](#routes)
- [Context Files](#context-files)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)

## Installation

1. Clone the repository.
2. Install the dependencies using the following command:

- npm install

## Usage

Start the application using the following command:

- npm start

The application will be available at `https://book-haven-jatin.netlify.app/`.

## Routes

The following routes are available in the application:

- `/` - Home page
- `/signin` - Login page
- `/signup` - Signup page
- `/books` - Page displaying all books
- `/book/:id` - Page displaying details of a specific book
- `/cart` - Cart page
- `/order` - Order page
- `*` - Error page for undefined routes

## Context Files

The application utilizes the following context files:

- `userContext.jsx` - User context for managing user-related data
- `bookContext.jsx` - Book context for managing book-related data
- `filterContext.jsx` - Filter context for managing filter-related data
- `cartContext.jsx` - Cart context for managing cart-related data

These context files provide the necessary state and functions for different components to access and modify the data.

## Technologies Used

- [Vite](https://vitejs.dev/): Fast and lightweight development server and build tool for modern web applications.
- [ReactJS](https://reactjs.org/): JavaScript library for building user interfaces.
- [React Router](https://reactrouter.com/): Declarative routing for React applications.
- [react-hot-toast](https://react-hot-toast.com/): Toast notifications for React applications.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvement, please create a new issue or submit a pull request.
