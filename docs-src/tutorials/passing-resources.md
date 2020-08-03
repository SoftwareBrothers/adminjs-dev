## Idea of Resources

What is a __Resource__ in AdmiBro? - __Resource is everything that you can manage__
(CRUD - create, read, update, destroy). Most often it is a Model from your ORM.

The entire idea od AdminBro is to manage resources of all kinds. It doesn't matter if you
use MongoDB with [mongoose](http://mongoosejs.com) or PostgreSQL with [Sequelize](http://sequelizejs.com).
AdminBro should give you the ability to manage records in those resources.

## Adapters

AdminBro uses different database adapters in order to handle different kind of resources.

### How to use an adapter

1. First, you have to install adapter locally using the __npm/yarn__.
2. Next, you have to __register this adapter__ using the {@link AdminBro.registerAdapter} 
that AdminBro could recognize resources of its type.

```javascript
const AdminBro = require('admin-bro')
const AdminBroMongoose = require('admin-bro-mongoose')

AdminBro.registerAdapter(AdminBroMongoose)
```

## Passing resources to AminBro

So you know how to register an adapter - now let's take a look of how to add resources that
they can be seen in AdminBro.

You have 2 options:

1. you can either add an __entire Database__ and AdminBro will fetch all resources from it, 
2. or you can pass __each Resource__ one by one. 

The first option is very easy, but the second allows you to modify the resources, see: {@tutorial 04-customizing-resources}.

Both passing __entire Database__ or __each Resource__ can be done via {@link AdminBro~AdminBroOptions AdminBro options}

### Example by using the mongoose adapter:

```javascript
// ...
const AdminBro = require('admin-bro')
const AdminBroMongoose = require('admin-bro-mongoose')
const mongoose = require('mongoose')
AdminBro.registerAdapter(AdminBroMongoose)

// Initialize Database along with models
const User = mongoose.model('User', { name: String, email: String, surname: String })
const Admin = mongoose.model('Admin', { name: String, email: String})

const run = async () => {
  const mongooseDb = await mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true })

  // Passing resources by giving entire database
  const adminBro = new AdminBro({
    databases: [mongooseDb],
    //... other AdminBroOptions
  })

  // Passing resources one by one
  const adminBro = new AdminBro({
    resources: [User, Admin],
    //... other AdminBroOptions
  })
}

run()
// ... 
```

## Available adapters

Currently we support following Database Adapters:

- {@link module:@admin-bro/mongoose} - adapter to [mongoose](http://mongoosejs.com) for MongoDB
- {@link module:@admin-bro/sequelize} - adapter to [sequelize](http://sequelize.com) for SQL Databases

## Resources customization

Each resource could be customized in AdminBro - to see how to do this go to {@tutorial customizing-resources}
