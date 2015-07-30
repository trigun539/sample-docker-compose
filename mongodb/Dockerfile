# MongoDB
FROM ubuntu:14.04

# Update
RUN apt-get update

# Install python-software-properties
RUN apt-get install -y python-software-properties

# Install software-properties-common
RUN apt-get install -y software-properties-common

# Add key
RUN apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 7F0CEB10

# Add repo
RUN echo "deb http://repo.mongodb.org/apt/ubuntu "$(lsb_release -sc)"/mongodb-org/3.0 multiverse" | tee /etc/apt/sources.list.d/mongodb-org-3.0.list

# Update
RUN apt-get update

# Install MongoDB
RUN apt-get install -y mongodb-org

# Add volumes
VOLUME /data/db

# Set command to run service
CMD mongod --dbpath /data

# Expose port 27017 from the container to the host
EXPOSE 27017