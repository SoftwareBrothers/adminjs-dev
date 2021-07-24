## Idea of Resources

What is a __Resource__ in AdminJS? - __Resource is everything that you can manage__
(CRUD - create, read, update, destroy). Most often it is a Model from your ORM.

The entire idea od AdminJS is to manage resources of all kinds. It doesn't matter if you
use MongoDB with [mongoose](http://mongoosejs.com) or PostgreSQL with [Sequelize](http://sequelizejs.com).
AdminJS should give you the ability to manage records in all these resources.

## Adapters

AdminJS uses Database Adapters in order to handle different kind of resources.

### How to use an adapter

1. First, you have to install adapter locally using the __npm/yarn__.
2. Next, you have to __register this adapter__ using the {@link AdminJS.registerAdapter} 
that AdminJS could recognize resources of its type.

```javascript
const AdminJS = require('adminjs')
const AdminJSMongoose = require('@adminjs/mongoose')

AdminJS.registerAdapter(AdminJSMongoose)
```

## Passing resources to AminBro

So you know how to register an adapter - now let's take a look of how to add resources that
they can be seen in AdminJS.

You have 2 options:

1. you can either add an __entire Database__ so given Adapter can fetch all resources from it, 
2. or you can pass __each Resource__ one by one.

The first option is very easy, but the second allows you to modify the resources, see tutorial: {@tutorial customizing-resources}.

Both passing __entire Database__ or __each Resource__ can be done via {@link AdminJS~AdminJSOptions AdminJS options}

### Example by using the mongoose adapter:

```javascript
// ...
const AdminJS = require('adminjs')
const AdminJSMongoose = require('@adminjs/mongoose')
const mongoose = require('mongoose')
AdminJS.registerAdapter(AdminJSMongoose)

// Initialize Database along with models - this is how Mongoose does this.
// Most probably you will have them defined in a separate file
const User = mongoose.model('User', { name: String, email: String, surname: String })
const Admin = mongoose.model('Admin', { name: String, email: String})

const run = async () => {
  const mongooseDb = await mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true })

  // Passing resources by giving entire database
  const adminJs = new AdminJS({
    databases: [mongooseDb],
    //... other AdminJSOptions
  })

  // Passing resources one by one,
  // also with an additional options for admin resource
  const adminJs = new AdminJS({
    resources: [User, {
      resource: Admin,
      options: {
        //...
      },
    }],
  })
}

run()
// ...
```

Way how each Adapter handles initialization differs. That is why make sure to read it's documentation first.

## Resources customization

The biggest advantage of using AdminJS is the ability to fully customize how it works. Visit {@tutorial customizing-resources} to see how you can change the behavior of selected resources.

## [Advanced] how it works a.k.a. writing your own Adapters.

Adapter is an object with 2 properties:

* **database** (class extending {@link BaseDatabase})
* **resource** (class extending {@link BaseResource})

When you pass **SomeDataModel** to {@link AdminJSOptions#databases databases[]} or {@link AdminJSOptions#resources resources[]}, AdminJS will automatically run all the registered adapters and check
their corresponding {@link BaseDatabase.isAdapterFor} or {@link BaseResource.isAdapterFor} methods. If Adapter returns `true` AdminJS feeds it (in the constructor) with **SomeDataModel**.

In order to write your own adapter you have to create these 2 classes and write implementation for all
methods like {@link BaseDatabase#find find}, {@link BaseDatabase#create create}, etc.

HINT: You can also write only a **Resource** class (extending {@link BaseResource}) and pass its instance
to {@link AdminJSOptions#resources} like this:

```javascript

class MyApiAdapter extends BaseResource {
  //... all abstract methods from BaseResource
}

const adminJs = new AdminJS({
  resources: [User, {
    resource: new MyApiAdapter(),
    options: {
      //...
    },
  }],
})
```

AdminJS will see that what you passed is already a BaseDatabase so it wont need to be wrapped by an Adapter.

## What's next?

Now let see how you can modify the resource in tutorial {@tutorial customizing-resources}.
