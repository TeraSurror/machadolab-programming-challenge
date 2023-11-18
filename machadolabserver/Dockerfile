# Use an official OpenJDK runtime as a parent image
FROM openjdk:17-oracle

# Set the working directory to /app
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY target/machadolabserver-0.0.1-SNAPSHOT.jar /app

# Make port 8080 available to the world outside this container
EXPOSE 8080

# Run spring boot application when the container launches
CMD ["java", "-jar", "machadolabserver-0.0.1-SNAPSHOT.jar"]