# Use an official PostgreSQL image as a parent image
FROM postgres:latest

# Set the environment variables
ENV POSTGRES_DB machadolab
ENV POSTGRES_USER harsh
ENV POSTGRES_PASSWORD password

# Copy the initialization script to the container
COPY db_script.sql /docker-entrypoint-initdb.d/

# Expose the PostgreSQL port
EXPOSE 5432