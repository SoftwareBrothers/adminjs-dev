At some point you would probably like to customize default views or create custom actions. {@link BaseAction Actions} are the way of doing that.

## Default actions

Admin bro has 4 major default actions defined for each resource:

__Resource__ base actions:

* {@link module:NewAction new} [Add new] - creates new record

__Record__ base actions:

* {@link module:ShowAction show} [info] - shows details of a given record
* {@link module:EditAction edit} [edit] - updates given record
* {@link module:DeleteAction delete} [remove] - removes given record

__Resource base actions__ can be accessed in the header of the list of all the resources (next to the _filters_ button). __Record actions__ are places in the list by the resource. Take a look at the following screenshot:

<img src="./images/actions.png">

Default actions can be accessed right from the AdminBro class.

```javascript

const AdminBro = require('admin-bro)
AdminBro.ACTIONS.show // => show action object
```

## Modify default action per Resource

Each action has all the parameters defined by {@link BaseAction}. They can be modified per resource along with other {@link ResourceOptions}

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

Each action has an {@link BaseAction.handler} function. This function is executed every time the action is invoked.

Handler is an `async` fuction returning `Promise` which resolves to an JSON API response.

This is how Edit action is defined:

```
module.exports = {
  name: 'edit',
  isVisible: true,
  actionType: 'record',
  icon: 'icomoon-edit',
  label: 'Edit',
  handler: async (request, response, data) => {
    const { record } = data
    if (request.method === 'get') {
      return { record: record.toJSON() }
    }
    if (request.method === 'post') {
      await record.update(request.payload.record)
      if (record.isValid()) {
        return {
          redirectUrl: data.h.recordActionUrl({
            resourceId: data.resource.id(), recordId: record.id(), actionName: 'show',
          }),
          record: record.toJSON(),
        }
      }
      return { record: record.toJSON() }
    }
    return ''
  },
}

```

If request was __get__ it returns the {@link BaseRecord~JSON JSON} object for a record. Otherwise (__post__) updates the record. Then right Component renders the action.

## Custom Actions

Also you can define your own actions. Simply pass {@link BaseAction} under a new key to {@link ResourceOptions}.

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
            handler: async () => {...},
            component: AdminBro.require('./your-action-component'),
          },
        },
      },
    },
  ],
}
```

## Action components

When you define your own action you have to also create **React component** responsible
for rendering it. To see what options you have - go to the next tutorial:

- {@tutorial 06-writing-react-components}

## Also...

...make sure to check out the following pages: 

* {@link ResourceOptions} and
* {@link BaseAction}