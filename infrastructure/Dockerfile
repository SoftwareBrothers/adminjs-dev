FROM node:10.13.0

WORKDIR /usr/src/app

COPY ["admin-bro/package*.json", "admin-bro/yarn.lock", "./admin-bro/"]
COPY ["admin-bro-hapijs/package*.json", "admin-bro-hapijs/yarn.lock" , "./admin-bro-hapijs/"]
COPY ["admin-bro-expressjs/package*.json", "admin-bro-expressjs/yarn.lock", "./admin-bro-expressjs/"]
COPY ["admin-bro-mongoose/package*.json", "admin-bro-mongoose/yarn.lock" , "./admin-bro-mongoose/"]
COPY ["admin-bro-sequelizejs/package*.json", "admin-bro-sequelizejs/yarn.lock", "./admin-bro-sequelizejs/"]
COPY ["admin-bro-example-app/package*.json", "admin-bro-example-app/yarn.lock", "./admin-bro-example-app/"]
COPY ["package*.json", "yarn.lock", "./"]

RUN cd admin-bro && yarn install
RUN cd admin-bro-hapijs && yarn install
RUN cd admin-bro-expressjs && yarn install
RUN cd admin-bro-mongoose && yarn install
RUN cd admin-bro-sequelizejs && yarn install
RUN cd admin-bro-example-app && yarn install
RUN yarn install

COPY . .

# make sure we can link to these packages
RUN cd admin-bro && yarn link
RUN cd admin-bro-hapijs && yarn link
RUN cd admin-bro-expressjs && yarn link
RUN cd admin-bro-mongoose && yarn link
RUN cd admin-bro-sequelizejs && yarn link

# within packages using admin-bro we marks that
RUN cd admin-bro-hapijs && yarn link admin-bro
RUN cd admin-bro-expressjs && yarn link admin-bro
RUN cd admin-bro-mongoose && yarn link admin-bro
RUN cd admin-bro-sequelizejs && yarn link admin-bro

# example repo uses liked versions resides in submodules
RUN cd admin-bro-example-app && yarn link admin-bro
RUN cd admin-bro-example-app && yarn link admin-bro-hapijs
RUN cd admin-bro-example-app && yarn link admin-bro-expressjs
RUN cd admin-bro-example-app && yarn link admin-bro-mongoose
RUN cd admin-bro-example-app && yarn link admin-bro-sequelizejs

# root repo uses liked versions resides in submodules
RUN yarn link admin-bro
RUN yarn link admin-bro-hapijs
RUN yarn link admin-bro-expressjs
RUN yarn link admin-bro-mongoose
RUN yarn link admin-bro-sequelizejs

RUN yarn global add ts-node typescript

EXPOSE 8080

CMD [ "yarn start" ]