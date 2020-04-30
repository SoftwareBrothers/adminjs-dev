> Prefer watching instead of reading?
> 
> check out at [this video tutorial](https://www.youtube.com/watch?v=n0IuXnL_cWs) which shows you how you can create an AdminPanel from scratch.

Installation of an __AdminBro__ consist of 2 steps.

## 01. Install the fremework plugin

Since __AdminBro__ uses your existing framework to render its routes - you have to use one of our plugins.

There are plugins for:

* {@link module:admin-bro-expressjs Express}
* {@link module:admin-bro-hapijs Hapi}

In this tutorial I will present the simplest way of adding AdminBro to those frameworks. If you
want to know more - visit their corresponding pages (above).

### Express

Install the AdminBro along with the {@link module:admin-bro-expressjs express plugin}

```
npm install admin-bro admin-bro-expressjs
```

Create an express router which will handle all AdminBro routes

```javascript
const AdminBro = require('admin-bro')
const AdminBroExpress = require('admin-bro-expressjs')

const express = require('express')
const app = express()

const adminBro = new AdminBro({
  databases: [],
  rootPath: '/admin',
})

const router = AdminBroExpress.buildRouter(adminBro)
```

Use this router in express.js `app`

```javascript
app.use(adminBro.options.rootPath, router)
app.listen(8080, () => console.log('AdminBro is under localhost:8080/admin'))
```

> If you are adding AdminBro to an application which already has any other middleware, it is good to put the AdminBro setup on top.
> 
> This is because other middleware can transform **requests** so that AdminBro wont be able to handle them.

To see how to add an authentication or other modifications - visit the {@link module:admin-bro-expressjs Express Plugin} documentation.

### Hapi

If you use [Hapi framework](https://hapijs.com/) instead of express - follow this installation instructions:

```bash
npm install admin-bro-hapijs boom inert
```

Register plugin and start server

```javascript
const AdminBroPlugin = require('admin-bro-hapijs')
const Hapi = require('hapi')

const adminBroOptions = {
  resources: [],
  rootPath: '/admin',
}

const server = Hapi.server({ port: process.env.PORT || 8080 })
const start = async () => {
  await server.register({
    plugin: AdminBroPlugin,
    options: adminBroOptions,
  })

  await server.start()
}

start()
```

To see how to add an authentication or other modifications - visit the {@link module:admin-bro-hapijs Hapi Plugin} documentation.

## 02. Install the Database Adapter and add resources

__AdminBro__ can be connected to many different types of resources. Right now we support [mongoose ODM](https://mongoosejs.com/) and [sequelize ORM](http://sequelizejs.com).

To add resources to __AdminBro__ you first have to register an adapter for the resource type you will be using.

Example for a mongoose setup:

Installation

```bash
npm install admin-bro-mongoose
```

Register adapter

```javascript
const AdminBro = require('admin-bro')
const AdminBroMongoose = require('admin-bro-mongoose')

AdminBro.registerAdapter(AdminBroMongoose)
```

Pass resources to AdminBro like this (_express example_)

```javascript
const User = mongoose.model('User', { name: String, email: String, surname: String })
const AdminBroOptions = {
  resources: [User],
}
const AdminBro = new AdminBro(AdminBroOptions)
const router = AdminBroExpress.buildRouter(adminBro)
// and add router to express
```

## What's next?

- To find more information about passing resources visit the {@tutorial passing-resources} tutorial
- See how you can customize resources: {@tutorial customizing-resources}
- Or add custom actions: {@tutorial actions}