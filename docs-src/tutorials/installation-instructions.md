> Prefer watching instead of reading?
> 
> check out [this video tutorial](https://www.youtube.com/watch?v=n0IuXnL_cWs) which shows you how you can create an Admin Panel from scratch.

Installation of an __AdminJS__ consist of 2 steps.

## 01. Install the framework plugin

Since __AdminJS__ uses your existing framework to render its routes - you have to use one of our plugins.

There are plugins for:

* {@link module:@adminjs/express Express}
* {@link module:@adminjs/hapi Hapi}
* {@link module:@adminjs/koa Koajs}

In this tutorial I will present the simplest way of adding AdminJS to an express framework. If you
want to launch AdminJS by other framework - see its documentation (above)

### Express installation

Install the AdminJS along with the {@link module:@adminjs/express express plugin}

```
npm install adminjs @adminjs/express
```

If you don't have `express` or `express-formidable` already installed, you will have to add that too. This is because they are `peerDependencies` of `@adminjs/express`:

```
npm install express express-formidable
```

Now create an express router which will handle all AdminJS routes

```javascript
const AdminJS = require('adminjs')
const AdminJSExpress = require('@adminjs/express')

const express = require('express')
const app = express()

const adminJs = new AdminJS({
  databases: [],
  rootPath: '/admin',
})

const router = AdminJSExpress.buildRouter(adminJs)
```

Use this router in express.js `app`

```javascript
app.use(adminJs.options.rootPath, router)
app.listen(8080, () => console.log('AdminJS is under localhost:8080/admin'))
```

> If you are adding AdminJS to an application which already has any other middleware, it is good to put the AdminJS setup on top.
> 
> This is because other middleware can transform **requests** so that AdminJS wont be able to handle it.

To see how to add an authentication or other modifications - visit the {@link module:@adminjs/express Express Plugin} documentation.

## 02. Install the Database Adapter and add resources

__AdminJS__ can be connected to many different types of resources. Right now we support:

* {@link module:@adminjs/mongoose Mongoose}
* {@link module:@adminjs/sequelize Sequelize}
* {@link module:@adminjs/typeorm TypeORM}

To add resources to __AdminJS__ you first have to **register adapter** for the resource you want to use.

Example for a mongoose setup:

Installation

```bash
npm install @adminjs/mongoose
```

Registration of the adapter

```javascript
const AdminJS = require('adminjs')
const AdminJSMongoose = require('@adminjs/mongoose')

AdminJS.registerAdapter(AdminJSMongoose)
```

Pass resources to AdminJS like this (_express example_)

```javascript
const User = mongoose.model('User', { name: String, email: String, surname: String })
const adminJsOptions = {
  resources: [User],
}
const AdminJS = new AdminJS(adminJsOptions)
const router = AdminJSExpress.buildRouter(adminJs)
// and add router to express
```

## What's next?

- To find out more information about passing resources visit the {@tutorial passing-resources} tutorial
- See how you can customize resources: {@tutorial customizing-resources}
- Or add custom actions: {@tutorial actions}