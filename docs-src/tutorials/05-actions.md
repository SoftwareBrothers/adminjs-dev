At some point you would probably like to customize default views or create custom actions. {@link Action Actions} are the way of doing that.

## Default actions

Admin bro has 4 major default actions defined for each resource:

__Resource__ base actions:

* __new__ [Add new] - creates new record

__Record__ base actions:

* __show__ [info] - shows details of a given record
* __edit__ [edit] - updates given record
* __delete__ [remove] - removes given record

__Resource base actions__ can be accessed in the header of the list of all the resources (next to the _filters_ button). __Record actions__ are places in the list by the resource. Take a look at the following screenshot:

<img src="/images/actions.png">

Default actions can be accessed right from the AdminBro class.

```javascript

const AdminBro = require('admin-bro)
AdminBro.ACTIONS.show // => show action object
```

## Modify default action per Resource

Each action has all the parameters defined by {@link Action}. They can be modified per resource along with other {@link ResourceOptions}

```javascript
const adminBroOptions = {
  resources: [
    { resource: Article, options: { actions: {show: {}, edit: {}, ...} } },
  ],
}
```

### Basic properties

Yes - you can modify things like: label, icon and visibility.

In the folowing example we will change name of show action along with the icon, and will show it only for records with an email.

```javascript
const adminBroOptions = {
  resources: [
    { resource: Article,
      options: {
        actions: {
          show: {
            label: 'Show me that',
            icon: 'fas fa-eye',
            isVisible: (resource, record) => record.param('email') !== '',
          },
        },
      },
    },
  ],
}
```

__isVisible__ can be either a function returning boolean value or a boolean value itself.

### Action handler

Each action has an {@link ActionHandler} function. This function is executed every time the action is invoked.

Handler is an async fuction returning Promise which can either resolves to HTML string or to the redirect response.

This is how Edit action is defined:

```
module.exports = {
  name: 'edit',
  isVisible: true,
  actionType: 'record',
  icon: 'icomoon-edit',
  label: 'Edit',
  handler: async (request, response, data) => {
    if (request.method === 'get') {
      return renderer.render('actions/edit', data)
    }
    if (request.method === 'post') {
      await data.record.update(request.payload)
      if (data.record.isValid()) {
        const showAction = data.resource.decorate().actions.show
        return response.redirect(data.h.recordActionUrl(
          data.resource, showAction, data.record,
        ))
      }
      return renderer.render('actions/edit', data)
    }
  },
}

```

If request was __get__ it renders the edit fields. Otherwise (__post__) updates the record.

### Example of modifying the show action

Lets imagine we would like to add a graph to the details of the articles showing the number of comments.

We can update an {@link ActionHandler} and utilise the {@link PageBuilder} class.

This is how we would do this:

```javascript
{
  ...,
  handler: async (request, response, data) => {
    const content = await AdminBro.ACTIONS.show.handler(request, response, data)
    const page = new AdminBro.PageBuilder({ admin: data._admin })
    page.addColumn({ content, columns: 7 })
    page.addChart({
      columns: 5,
      title: 'Popularity',
      subtitle: 'How people like this article',
      config: {
        type: 'bar',
        data: {
          datasets: [
            {
              label: 'Thumbs UP',
              fill: true,
              backgroundColor: AdminBro.PageBuilder.COLOR.INFO,
              data: [522]
            }, {
              label: 'Thumbs Down',
              fill: true,
              backgroundColor: AdminBro.PageBuilder.COLOR.WARNING,
              data: [20]
            },
          ],
        },
      }
    })
    return page.toHTML()
  },
  ...
}
```

And this is the result

<img src="./images/graph-in-show.png">

## Custom Actions

Also you can define your own actions. Simply pass {@link Action} under a new key to {@link ResourceOptions}.

Your action can be either Resource'is, Record'is or both.

```javascript
const adminBroOptions = {
  resources: [
    { resource: Article,
      options: {
        actions: {
          newAction: {
            actionType: ['record'],
            label: 'Publish',
            icon: 'fas fa-eye',
            isVisible: true,
            handler: async () => {...}
          },
        },
      },
    },
  ],
}
```

## What's next

Make sure to check out following types definitions: 

* {@link ResourceOptions}
* {@link Action}
* {@link ActionHandler}
* {@link IsVisible}

And you might also want to check out {@link PageBuilder}