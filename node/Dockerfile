# Node
FROM ubuntu:14.04

##
## INSTALL DEPENDENCIES
##

# Update
RUN apt-get update

# Install python-software-properties
RUN apt-get install -y python-software-properties

# Install software-properties-common
RUN apt-get install -y software-properties-common

## NODEJS

# Install repo
RUN apt-add-repository ppa:chris-lea/node.js

# Update
RUN apt-get update

# Install
RUN apt-get install -y nodejs

# Copy files
COPY . /opt/app

RUN cd /opt/app && npm install

RUN node -v

EXPOSE 8888

WORKDIR /opt/app

CMD ["node", "/opt/app/app.js"]