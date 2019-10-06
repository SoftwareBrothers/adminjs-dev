AdminBro is an __automatic admin interface__ which allows you to manage your database resources. It can be added to almost any nodejs framework. In this short tutorial I will show you how configure AdminBro to manage _User_ [mongoosejs](https://mongoosejs.com/) resource in a simple [express.js](https://expressjs.com/) app.

We will:

1. Create a simple express app
2. Add AdminBro to it

## Let's do this!

In the first step we will create a simple __one file__ API server.

## An example app without an AdminBro

The app is an [express.js](https://expressjs.com/) API server which uses [mongoosejs](https://mongoosejs.com/) to fetch data from mongodb and returns it in an JSON format.

The code of the app looks like this.

```javascript
// ==========  server.js ==============
// Requirements
const mongoose = require('mongoose')
const express = require('express')
const bodyParser = require('body-parser')

// express server definition
const app = express()
app.use(bodyParser.json())

// Resources definitions
const User = mongoose.model('User', { name: string, email: string, surname: string })

// Routes definitions
app.get('/', (req, res) => res.send('Hello World!'))

// Route which returns last 100 users from the database
app.get('/users', async (req, res) => {
  const users = await User.find({}).limit(10)
  res.send(users)
})

// Route which creates new user
app.post('/users', async (req, res) => {
  const user = await new User(req.body.user).save()
  res.send(user)
})

// Running the server
const run = async () => {
  await mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true })
  await app.listen(8080, () => console.log(`Example app listening on port 8080!`))
}

run()
```

To run it you have to install dependencies:

```sh
npm install mongoose express body-parser
```

Make sure you have a [mongodb](https://www.mongodb.com/) running in the system.

and you can run the server via `node` command:

```sh
node server.js
```

Server exposes 2 routes `GET /users` and `POST /users` you can test them by using [curl](https://curl.haxx.se/):

```sh
curl -d '{"user": {"name": "wojtek"}}' -H "Content-Type: application/json" -X POST http://localhost:8080/users/
# => {"_id":"5c546dcbc98f5e1923c8eef9","name":"wojtek","__v":0}

curl http://localhost:8080/users
# => [{"_id":"5c546dcbc98f5e1923c8eef9","name":"wojtek","__v":0}]
```

## Adding AdminBro

Ok - so now we would like to add an __admin UI__ with the ability to manage users. Of course we will be using __AdminBro__ in order to do that. 

First, let's install all dependencies. We are using mongoose so we will have to install admin-bro-mongoose database adapter. Also we use expressjs, that is why we will need admin-bro-expressjs plugin:

```sh
npm install admin-bro admin-bro-mongoose admin-bro-expressjs
```

So now we have to use those modules. We will:
- use {@link module:AdminBroExpressjs AdminBroExpressjs} module from 'admin-bro-expressjs' package to attach AdminBro into an express routes.
- use {@link module:AdminBroMongoose AdminBroMongoose} adapter form 'admin-bro-mongoose' package to add mongoose Resources to the admin panel. 

This is how it will look like:

```javascript
const AdminBro = require('admin-bro')
const AdminBroExpressjs = require('admin-bro-expressjs')

// We have to tell AdminBro that we will manage mongoose resources with it
AdminBro.registerAdapter(require('admin-bro-mongoose'))

// Pass all configuration settings to AdminBro
const adminBro = new AdminBro({
  resources: [User],
  rootPath: '/admin',
})

// Build and use a router which will handle all AdminBro routes
const router = AdminBroExpressjs.buildRouter(adminBro)
app.use(adminBro.options.rootPath, router)
```

## Full application in one file

This is an entire Express server with AdminBro managing Mongoose User Resource:

```javascript
// ==========  server.js ==============
// Requirements
const mongoose = require('mongoose')
const express = require('express')
const bodyParser = require('body-parser')
const AdminBro = require('admin-bro')
const AdminBroExpressjs = require('admin-bro-expressjs')

// We have to tell AdminBro that we will manage mongoose resources with it
AdminBro.registerAdapter(require('admin-bro-mongoose'))

// express server definition
const app = express()
app.use(bodyParser.json())

// Resources definitions
const User = mongoose.model('User', { name: string, email: string, surname: string })

// Routes definitions
app.get('/', (req, res) => res.send('Hello World!'))

// Route which returns last 100 users from the database
app.get('/users', async (req, res) => {
  const users = await User.find({}).limit(10)
  res.send(users)
})

// Route which creates new user
app.post('/users', async (req, res) => {
  const user = await new User(req.body.user).save()
  res.send(user)
})

// Pass all configuration settings to AdminBro
const adminBro = new AdminBro({
  resources: [User],
  rootPath: '/admin',
})

// Build and use a router which will handle all AdminBro routes
const router = AdminBroExpressjs.buildRouter(adminBro)
app.use(adminBro.options.rootPath, router)

// Running the server
const run = async () => {
  await mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true })
  await app.listen(8080, () => console.log(`Example app listening on port 8080!`))
}

run()
```

To run it simply write:

```sh
node server.js
```

and, under `localhost:8080/admin`, you should see something like this:

<img src="./images/one-file-example.png">

## What's next?

So now you know how to add AdminBro to simple express.js app. Now let's move to modifying resources {@tutorial 03-passing-resources}