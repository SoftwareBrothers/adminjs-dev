FROM node:10.8.0

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . . 

# make sure we can link to these packages
RUN cd admin-bro && npm link
RUN cd admin-bro-hapijs && npm link
RUN cd admin-bro-mongoose && npm link

# within packages using admin-bro we marks that
RUN cd admin-bro-hapijs && npm link admin-bro
RUN cd admin-bro-mongoose && npm link admin-bro

# root repo uses liked versions resides in submodules
RUN npm link admin-bro
RUN npm link admin-bro-hapijs
RUN npm link admin-bro-mongoose

EXPOSE 8080

CMD [ "npm start" ]