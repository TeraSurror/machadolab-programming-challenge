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
- Docker - 24.0.7

Please make sure no applications or processes are running on the following ports
- 3000
- 5432
- 8080

#### Run with docker compose
1. cd into the project directory.
2. Run the command: `docker compose up --build`.
3. Open http://localhost:3000 on a webbrowser to see the application.

### Notes:
- The data provided in the csv files have been imported into the database into normalized schemas.
- There is normalize.py script available in the data directory. This script can be run to convert the given csv files to normalized data. This data can then be imported into the database.
