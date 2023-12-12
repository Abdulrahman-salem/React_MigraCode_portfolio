# MigraCode Portfolio

## Goal
Create a sleek, modern, dark-themed website that mirrors MigraCode's distinctive style. The aim is to showcase MigraCode students' outstanding projects in an engaging and visually appealing manner, providing an immersive experience for visitors.

## Description
MigraCode Portfolio is an online platform spotlighting exceptional projects by MigraCode students. It offers a space for web developers to showcase their skills and accomplishments. The primary goal is to exhibit the diversity and innovation of MigraCode projects, serving as a source of inspiration and information for potential employers, HR professionals, and aspiring students.

### Demo

Here is a working demo : https://portfolio.migracode.org/

## Features



## Technologies Used

### Frontend:
- [React](https://react.dev/)
- [Sass] (https://sass-lang.com/)
- [Redux.js] (https://redux.js.org/)
- [React Router] (https://reactrouter.com)
- [React Select] (https://react-select.com/home)
- [Axios] (https://axios-http.com/docs/intro)

### Backend:
- [Node](https://nodejs.org/)
- [Express](http://expressjs.com/)

### Database:
- [PostgreSQL](https://www.postgresql.org/)
- [Airtable](https://www.airtable.com/)
- [GitHub] (https://github.com/)

# React/Node Project

This repository contains a React/Node project with a folder structure separated for the client and the server.

## Client Configuration

1. Run `npm install` in the client folder to install the dependencies.

2. Create a `.env` file in the client folder for Firebase configuration. You will need to create a project in Firebase (storage) to obtain the credentials and the appropriate settings (https://firebase.google.com/). Make sure to include the necessary variables in your `.env` file. Here is an example:

   ```env
        VITE_FIREBASE_API_KEY="your-api-key"
        VITE_FIREBASE_AUTH_DOMAIN="your-auth-domain"
        VITE_FIREBASE_PROJECT_ID="your-project-id"
        VITE_FIREBASE_STORAGE_BUCKET="your-storage-bucket"
        VITE_FIREBASE_MESSAGING_SENDER_ID="your-messaging-sender-id"
        VITE_FIREBASE_APP_ID="your-app-id"
3. Run `npm run dev` in the client folder to start the application in development mode.

## Server Configuration

1. Run `npm install` in the server folder to install the dependencies.

2. Use the table creation script to set up the database (this is the file -> dbModel.sql ). Ensure that you have a configured database and adjust the script as needed.
3. Update the `.env` file in the server folder with your database information and other configurations. Here is an example:

   ```env
   TOKEN_SECRET = "your-Secret-token"
   PGUSER="your-pg-port"
   PGHOST="your-pg-host"
   PGPASSWORD="your-pg-password"
   PGDATABASE="your-pg-database"
   PGPORT="your-server-port"
4. Run `npm run dev` in the server folder to start the application in development mode.

Ready! Now, you should have both the client and server up and running.

## Meet the Team

Meet the talented individuals who have contributed to the development of Migramix:

| [![Damian Rodriguez](https://avatars.githubusercontent.com/u/128808245?v=4)]([https://github.com/GamaG27](https://github.com/IrynaSyvashchenko)) | [![Iryna Syvashchenko](https://avatars.githubusercontent.com/u/94227693?v=3)](https://github.com/MiguelCagnate) | [![Dante](https://avatars.githubusercontent.com/u/127965845?v=3)](https://github.com/Ante2023) | [![Angelyn Bonaldy](https://avatars.githubusercontent.com/u/117824958?v=3)](https://github.com/anggifit) | [![Leonardo](https://avatars.githubusercontent.com/u/129212312?v=3)](https://github.com/LeonardoBabuin) 






