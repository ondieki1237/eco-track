# 🚀 EcoTrack Frontend Setup Guide

Welcome to the **EcoTrack** frontend setup guide! This document will help you install and set up all the dependencies required for the frontend project. 🌍✨

---

## 📌 Prerequisites
Ensure you have the following installed on your system:

- [Node.js](https://nodejs.org/en/download/) (Recommended: v16+)
- [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) or [Yarn](https://yarnpkg.com/getting-started/install) 📦
- [Expo CLI](https://docs.expo.dev/get-started/installation/) (if using Expo)

---

## 📂 Project Setup

### 1️⃣ Clone the Repository
```sh
 git clone https://github.com/ondieki1237/eco-track.git
 cd eco-track
```

### 2️⃣ Install Dependencies
#### 🔹 Using npm:
```sh
npm install
```
#### 🔹 Using Yarn:
```sh
yarn install
```

This will install all the required dependencies for the project. ✅

---

## 📦 Installed Dependencies
The following dependencies are used in this project:

| Package | Version | Description |
|---------|---------|-------------|
| [@fortawesome/fontawesome-svg-core](https://www.npmjs.com/package/@fortawesome/fontawesome-svg-core) | 6.7.2 | FontAwesome core for SVG icons 🎨 |
| [@fortawesome/free-solid-svg-icons](https://www.npmjs.com/package/@fortawesome/free-solid-svg-icons) | 6.7.2 | Free solid icons for FontAwesome 🔥 |
| [@fortawesome/react-fontawesome](https://www.npmjs.com/package/@fortawesome/react-fontawesome) | 0.2.2 | React component for FontAwesome icons 🎭 |
| [axios](https://www.npmjs.com/package/axios) | 1.7.9 | Promise-based HTTP client 🌐 |
| [cra-template](https://www.npmjs.com/package/cra-template) | 1.2.0 | Create React App template ⚡ |
| [react](https://react.dev/) | 19.0.0 | React core library ⚛️ |
| [react-dom](https://www.npmjs.com/package/react-dom) | 19.0.0 | React DOM renderer 🌍 |
| [react-router-dom](https://www.npmjs.com/package/react-router-dom) | 6.29.0 | Routing for React applications 🛤️ |
| [react-scripts](https://www.npmjs.com/package/react-scripts) | 5.0.1 | Scripts and configuration for Create React App 🏗️ |
| [recharts](https://www.npmjs.com/package/recharts) | 2.15.1 | React charting library 📊 |

---

## ▶️ Running the Frontend
After installing dependencies, start the development server:

#### 🔹 Using npm:
```sh
npm start
```
#### 🔹 Using Yarn:
```sh
yarn start
```

This will launch the frontend on `http://localhost:3000/` by default.

---

## 🔄 Updating Dependencies
If you add new dependencies, update `package.json` and install them:
```sh
npm install <package_name>
```
Then update `package.json` by running:
```sh
npm update
```
Or using Yarn:
```sh
yarn add <package_name>
```

To check installed versions:
```sh
npm list --depth=0
```

---

## 🎯 Additional Resources
- [React Documentation](https://react.dev/) ⚛️
- [React Router Docs](https://reactrouter.com/) 🛤️
- [Recharts Docs](https://recharts.org/en-US/) 📊
- [Axios Docs](https://axios-http.com/) 🌐

---

🚀 **You're all set!** Happy coding! 😃

