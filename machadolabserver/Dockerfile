# Use an official Maven image as a base image
FROM maven:3.8.3-openjdk-17-slim AS build

# Set the working directory in the container
WORKDIR /app

# Copy the project files into the container
COPY pom.xml .
COPY src ./src

# Build the application using Maven
RUN mvn clean package -Dmaven.test.skip

# Use an OpenJDK base image for the runtime image
FROM openjdk:17-jdk-slim

# Set the working directory in the container
WORKDIR /app

# Copy the JAR file from the build stage to the runtime image
COPY --from=build /app/target/machadolabserver-0.0.1-SNAPSHOT.jar .

# Expose the port that the application will run on
EXPOSE 8080

# Define the command to run your application
CMD ["java", "-jar", "machadolabserver-0.0.1-SNAPSHOT.jar"]