FROM node:10.13.0

WORKDIR /usr/src/app

COPY ["packages/adminjs/package*.json", "packages/adminjs/yarn.lock", "./adminjs/"]
COPY ["packages/dminjs-hapijs/package*.json", "packages/adminjs-hapijs/yarn.lock" , "./adminjs-hapijs/"]
COPY ["packages/adminjs-expressjs/package*.json", "packages/adminjs-expressjs/yarn.lock", "./adminjs-expressjs/"]
COPY ["packages/adminjs-mongoose/package*.json", "packages/adminjs-mongoose/yarn.lock" , "./adminjs-mongoose/"]
COPY ["packages/adminjs-sequelizejs/package*.json", "packages/adminjs-sequelizejs/yarn.lock", "./adminjs-sequelizejs/"]
COPY ["packages/adminjs-example-app/package*.json", "packages/adminjs-example-app/yarn.lock", "./adminjs-example-app/"]
COPY ["package*.json", "yarn.lock", "./"]

RUN cd adminjs && yarn install
RUN cd adminjs-hapijs && yarn install
RUN cd adminjs-expressjs && yarn install
RUN cd adminjs-mongoose && yarn install
RUN cd adminjs-sequelizejs && yarn install
RUN cd adminjs-example-app && yarn install
RUN yarn install

COPY . .

# make sure we can link to these packages
RUN cd adminjs && yarn link
RUN cd adminjs-hapijs && yarn link
RUN cd adminjs-expressjs && yarn link
RUN cd adminjs-mongoose && yarn link
RUN cd adminjs-sequelizejs && yarn link

# within packages using adminjs we marks that
RUN cd adminjs-hapijs && yarn link adminjs
RUN cd adminjs-expressjs && yarn link adminjs
RUN cd adminjs-mongoose && yarn link adminjs
RUN cd adminjs-sequelizejs && yarn link adminjs

# example repo uses liked versions resides in submodules
RUN cd adminjs-example-app && yarn link adminjs
RUN cd adminjs-example-app && yarn link adminjs-hapijs
RUN cd adminjs-example-app && yarn link adminjs-expressjs
RUN cd adminjs-example-app && yarn link adminjs-mongoose
RUN cd adminjs-example-app && yarn link adminjs-sequelizejs

# root repo uses liked versions resides in submodules
RUN yarn link adminjs
RUN yarn link adminjs-hapijs
RUN yarn link adminjs-expressjs
RUN yarn link adminjs-mongoose
RUN yarn link adminjs-sequelizejs

RUN yarn global add ts-node typescript

EXPOSE 8080

CMD [ "yarn start" ]