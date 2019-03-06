Installation of an __AdminBro__ consist of 2 steps.

# 01. Install the fremework plugin

Since __AdminBro__ uses your existing framework to render its routes - you have to use one of our plugins.

## Express

Install the admin bro along with the adapter

```
npm install admin-bro admin-bro-expressjs
```

Create express router

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

Use the router in expres.js app

```javascript
app.use(adminBro.options.rootPath, router)
app.listen(8080, () => console.log('AdminBro is under localhost:8080/admin'))
```


To see how to add authentication or other modifications - visit the {@link module:admin-bro-expressjs Express Plugin} documentation.

## Hapi

Installation

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

To see how to add authentication or other modifications - visit the {@link module:admin-bro-hapijs Hapi Plugin} documentation.

# 02. Install the Database Adapter and add resources

__AdminBro__ can be connected to many different types of resources. Right now we support mongoose ODM and sequelize ORM.

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

Add resources to options

```javascript
const User = mongoose.model('User', { name: String, email: String, surname: String })
const AdminBroOptions = {
  resources: [User],
}
```

Pass resources via options to __AdminBro__: _express example_

```javascript
const AdminBro = new AdminBro(AdminBroOptions)
const router = AdminBroExpress.buildRouter(adminBro)
// and add router to express
```

# What's next?

- To find more information about passing resources visit the {@tutorial 03-passing-resources} tutorial
- See how you can customize resources: {@tutorial 04-customizing-resources}
- Or add custom actions: {@tutorial 05-actions}