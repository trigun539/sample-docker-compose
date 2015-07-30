# Nginx
FROM ubuntu:14.04

# Update
RUN apt-get update

# Install python-software-properties
RUN apt-get install -y python-software-properties

# Install software-properties-common
RUN apt-get install -y software-properties-common

# Install repo
RUN yes '' | add-apt-repository ppa:nginx/stable

# Update
RUN apt-get update

# Install
RUN apt-get install -y nginx

# Copy configuration file
COPY nginx.conf /etc/nginx/nginx.conf

# Append "daemon off;" to the configuration file
RUN echo "daemon off;" >> /etc/nginx/nginx.conf

# Define default command.
CMD service nginx start

# Expose ports.
EXPOSE 80