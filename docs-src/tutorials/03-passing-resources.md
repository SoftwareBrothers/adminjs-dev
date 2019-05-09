## Idea of Resources

What is a __Resource__ in AdmiBro? - __Resource is everything what you can manage__
(CRUD - create, read, update, destroy). Most often it is a Model from your ORM.

The entire idea od AdminBro is to manage resources of all kinds. It doesn't matter if you
use MongoDB with [mongoose](http://mongoosejs.com) or Postgress with [Sequelize](http://sequelizejs.com).
AdminBro should give you the ability to manage records in those resources.

## Adapters

AdminBro uses different database adapters in order handle different kind of resources.

### How to use an adapter

1. First, you have to install adapter localy using the __npm/yarn__.
2. Next, you have to __register this adapter__ using the {@link AdminBro.registerAdapter} 
that AdminBro could recognize resources of its type.

```javascript
const AdminBro = require('admin-bro')
const AdminBroMongoose = require('admin-bro-mongoose')

AdminBro.registerAdapter(AdminBroMongoose)
```

## Passing resources to AminBro

So you know how to regiser an adapter - now let's take a look of how to add resources that
they can be seen in AdminBro.

You have 2 options:

1. you can either add __entire Database__ and AdminBro will fetch all resources from it, 
2. or you can pass __each Resource__ one by one. 

The first option is very easy, but the second allows you to modify the resources, see: {@tutorial 04-customizing-resources}.

Both passing __entire Database__ or __each Resource__ can be done via {@link AdminBro~AdminBroOptions AdminBro options}

### Example by using the mongoose adapter:

```javascript
// ...
const adminBro = require('admin-bro')
const AdminBroMongoose = require('admin-bro-mongoose')
const mongoose = require('mongoose')
AdminBro.registerAdapter(AdminBroMongoose)

// Initializ Database along with models
const mongooseDb = mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true })
const User = mongoose.model('User', { name: String, email: String, surname: String })
const Admin = mongoose.model('Admin', { name: String, email: String})

// Passing resources by giving entire database
const AdminBro = new AdminBro({
  databases: [mongooseDb],
  //... other AdminBroOptions
})

// Passing resources one by one
const AdminBro = new AdminBro({
  resources: [User, Admin],
  //... other AdminBroOptions
})
// ... 
```

## Available adapters

Currently we support following Database Adapters:

- {@link module:admin-bro-mongoose admin-bro-mongoose} - adapter to [mongoose](http://mongoosejs.com) for MongoDB
- {@link module:admin-bro-sequelizejs admin-bro-sequelizejs} - adapter to [sequelize](http://sequelize.com) for SQL Databases

## Resources customization

Each resource could be customised in AdminBro - to see how to do this go to {@tutorial 04-customizing-resources}
