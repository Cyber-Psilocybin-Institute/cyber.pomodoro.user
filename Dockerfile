FROM node:16.14.0

RUN mkdir /usr/src/app
WORKDIR /usr/src/app

ENV PATH /usr/src/app/node_modules:$PATH

ADD ./package.json /usr/src/app
RUN npm install --legacy-peer-deps

# COPY package*.json ./
# RUN npm install

# COPY . .

#CMD ["npm", "start"]
