# Touch Typing App

This is a Touch Typing App created using Vite.js. The app allows users to practice their typing skills by displaying a sentence on the screen and calculating their typing speed in words per minute. It consists of two pages: the login page and the typing page. All routes in the application are protected, and a 404 page is displayed when users enter a route that doesn't exist.

## Features

- **Login Page**: Users can log in to the application using their credentials.
- **Typing Page**: Only authorized users can access this page. It displays a sentence for the user to type and provides real-time feedback on their typing speed.
- **Protected Routes**: All routes in the application are protected, ensuring that unauthorized users cannot access restricted content.
- **Toast Notifications**: Toast notifications are used to display messages such as login, logout, and signup.
- **404 Page**: When users navigate to a route that doesn't exist, a 404 page is displayed, preventing the application from crashing.
- **Logout Functionality**: Users can log out of the application, and they will be redirected to the login page.
- **Styling**: The application uses various colors to indicate the correctness of the typed words, with wrong words shown in red, correct words in green, and the next word to be typed in gray.
- **Time Tracking**: The typing page displays the time elapsed since the user started typing.

## Getting Started

Follow the steps below to set up and run the project:

1. Open your terminal and navigate to the project's client directory: `cd client`
2. Install the required dependencies by running: `npm install`
3. Start the development server by running: `npm run serve`

To create a production build, follow these additional steps:

1. Open your terminal and navigate to the project's client directory: `cd client`
2. Create a production build by running: `npm run build`

The application will be available at `http://127.0.0.1:5173/`.

## Usage

1. Visit the login page at `/` and create an account if you don't have one.
2. Log in with your credentials. Upon successful login, you will be redirected to the typing page (`/typing`).
3. On the typing page, a sentence will be displayed, and you can start typing.
4. As you type, the application will provide real-time feedback on your typing speed, highlighting incorrect words in red, correct words in green, and the next word to be typed in gray.
5. The typing page also displays the elapsed time since you started typing.
6. To log out, click on the logout button. You will be redirected back to the login page.
