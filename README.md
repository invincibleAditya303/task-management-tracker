# Task Management App
A simple, browser based task management application built with **React**. This app demonstrates role-based access control and 
drag-and-drop task assignment using **react-dnd**, with all data persisted in the browser's **localStorage**.

---

## Project Overview
This application allows:
- **Admins** to create, assign and reassign tasks via drag-and drop.
- **Users** to view their assigned tasks and mark them as completed.

Data is stored in **localstorage**. SO no backend server is required.

## Features
- Role-based login (Admin & User)
- Task creation (Admin)
- Task assignment & reassignment via **drag-and-drop**
- Users view and complete tasks
- Persistent data using **localStorage**
- Clean React component structure
- Simple and responsive UI

---

## Tech Stack
- **React (v19)**
- **react-dnd** + **react-dnd-html5-backend**
- **UUID** (for unique task ID's)
- **styled-components** for styling
- **Browser localStorage** for persistence

---

## Default Login Credentils
| Role | Username    | Password|
|------|-------------|---------|
| Admin| johndoe_123 | john@123|
| User | bobjohn_123 | bob@123 |

---

```
task-management-tracker/
├──src/
  ├── components/
  | ├── Dashboard/
  | ├── DragCardItem/
  | ├── Header/
  | ├── LoginForm/
  | ├── TaskForm/
  | ├── TaskListCard/
  | ├── UserItemCard/
  | ├── UsersList
  ├──context/
  | ├── AuthContext.js
  ├──utils
  | ├── storage.js
  ├── App.js
  ├── index.js
```

---

## Usage

### For Admins
- Log in as **Admin**
- Create new tasks using the form
- Drag tasks from the lists and drop onto the user cards to assign/reassign
- All changes are stored to localStorage

## For Users
- Log in as a **User**
- View the assigned tasks
- Mark tasks as "Completed"
- Completed status persists in localStorage

## Data Persistence
On first Reload:
- If no data exists in localStorage, default users are initialized
- Tasks list is created as an empty array

All updates to tasks and users are written back to localStoarge automatically

---

## Resetting App
1. Open the browser
2. Go to DevTools > Application> localStorage
3. Clear the app's localStoarge entry

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
