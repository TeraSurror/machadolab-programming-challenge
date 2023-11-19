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

### Running without docker
1. Postgres
- Run the db_script file present in the data directory
2. Spring boot
- Please ensure you have java version 17 installed
- Replace the url property in this file machadolabserver/src/main/resources/application.yml to url: jdbc:postgresql://localhost:5432/machadolab
- Open a terminal and the command `mvn clean package -Dmaven.test.skip`. This will generate the jar file
- Run the jar file with the following command `java -jar ./target/target/machadolabserver-0.0.1-SNAPSHOT.jar`
- Another way to the run the application is by running the following 2 commands one after the other
`mvn package`
`mvn spring-boot:run`
3. Next.js UI
- Please ensure you have node version 21.1.0 or later versions.
- Replace the SERVER_URL variable in this file machadolabclient/src/utils/constants.ts with the following "http://localhost:8080/api"
- Open a terminal and cd into the machadolab-client and run the following command: `npm install`
- After the above command run this command: `npm run dev`
- Open http://localhost:3000 in a browser to look at the application.

### Notes:
- The data provided in the csv files have been imported into the database into normalized schemas.
- There is normalize.py script available in the data directory. This script can be run to convert the given csv files to normalized data. This data can then be imported into the database.
