## Programming Challenge

### Background
- This repository contains code for the machado lab programming challenge
- Please refer to the CHALLENGE.md file for the details of the task.
- The application consists of 3 parts:
    - An SPA client built in React.js using the Next.js framework.
    - A REST API written in Spring Boot.
    - A database - PostgreSQL.

### Instructions to run the project.
Please make sure you have the following installed:
- Maven - 3.6.3
- Docker - 24.0.7

1. Create the docker image for the database
    - Open a terminal window and cd into the data folder
    - Run the following command: `docker build --tag machadolab-db --file Dockerfile .`
2. Create jar for the spring boot application
    - Open a terminal window and cd into the machadolabserver folder
    - Run the command: `mvn package -Dmaven.test.skip`
3. Create the docker image for the spring boot application
    - Open a terminal window and cd into the machadolabserver folder
    - Run the following command: `docker build --tag machadolab-server --file Dockerfile .`
4. Create the docker image for the next application
    - Open a terminal window and cd into the machadolabclient folder
    - Run the following command: `docker build --tag machadolab-client --file Dockerfile .`
5. Run the application using compose
    - Open terminal and cd into the root folder of the project
    - Run the command: `docker compose up`
    - Open http://localhost:3000 in a browser window to see the application