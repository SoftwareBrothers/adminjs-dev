> Prefer watching instead of reading?
> 
> check out [this video tutorial](https://www.youtube.com/watch?v=n0IuXnL_cWs) which shows you how you can create an Admin Panel from scratch.

Installation of an __AdminBro__ consist of 2 steps.

## 01. Install the fremework plugin

Since __AdminBro__ uses your existing framework to render its routes - you have to use one of our plugins.

There are plugins for:

* {@link module:@admin-bro/express Express}
* {@link module:@admin-bro/hapi Hapi}

In this tutorial I will present the simplest way of adding AdminBro to an express framework. If you
want to launch AdminBro by other framework - see its documentation (above)

### Express installation

Install the AdminBro along with the {@link module:@admin-bro/express express plugin}

```
npm install admin-bro @admin-bro/express
```

If you don't have `express` or `express-formidable` already installed, you will have to add that too. This is because they are `peerDependencies` of `@admin-bro/express`:

```
npm install express express-formidable
```

Now create an express router which will handle all AdminBro routes

```javascript
const AdminBro = require('admin-bro')
const AdminBroExpress = require('@admin-bro/express')

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
> This is because other middleware can transform **requests** so that AdminBro wont be able to handle it.

To see how to add an authentication or other modifications - visit the {@link module:@admin-bro/express Express Plugin} documentation.

## 02. Install the Database Adapter and add resources

__AdminBro__ can be connected to many different types of resources. Right now we support:

* {@link module:@admin-bro/mongoose Mongoose}
* {@link module:@admin-bro/sequelize Sequelize}
* {@link module:@admin-bro/typeorm TypeORM}

To add resources to __AdminBro__ you first have to **register adapter** for the resource you want to use.

Example for a mongoose setup:

Installation

```bash
npm install @admin-bro/mongoose
```

Registration of the adapter

```javascript
const AdminBro = require('admin-bro')
const AdminBroMongoose = require('@admin-bro/mongoose')

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

- To find out more information about passing resources visit the {@tutorial passing-resources} tutorial
- See how you can customize resources: {@tutorial customizing-resources}
- Or add custom actions: {@tutorial actions}