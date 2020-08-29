At some point you would probably like to customize default views or create custom actions. [Actions]{@link Action} are the way of doing that.

## Default actions

AdminBro has 7 major _default actions_ defined for each resource:

__Resource__ base actions:

they don't require `recordId` in params

* **list** - list all records
* **search** - search record by query string
* **new** [Add new] - creates new record

__Record__ base actions

they require `recordId` in params

* **show** [info] - shows details of a given record
* **edit** [edit] - updates given record
* **delete** [remove] - removes given record

__Bulk__ actions

they require `recordIds[]` in params

* **bulkDelete** [remove] - removes all selected records from the database

__Resource base actions__ can be accessed in the header of the list of all the resources (next to the _filters_ button). __Record actions__ are places on the list by the resource. Where __Bulk actions__ appear right in the table header when you select at least one record.

Take a look at the following screenshot explaining which action type is where:

<img src="./images/actions.png">

## Modify default action per Resource

Each action has all the parameters defined by {@link Action}. They can be modified per resource along with other {@link ResourceOptions}

This is how modifying __show__ action and creating a new __myNewAction__ can
look like:

```javascript
const adminBroOptions = {
  resources: [
    { 
      resource: Article,
      options: {
        actions: {
          show: {
            // change the behavior of show action
          },
          myNewAction: {
            // create a totally new action
            actionType: 'record',
            handler: () => {},
          },
        },
      },
    },
  ],
}
```

### Basic properties

Yes - you can modify things like: _label_, _icon_ _and visibility_. List of all options can be found in {@link Action}

In the following example, we will change {@link Action#icon icon}, and will show it only for records with an email.

```javascript
const adminBroOptions = {
  resources: [
    { resource: Article,
      options: {
        actions: {
          show: {
            icon: 'View',
            isVisible: (context) => context.record.param('email') !== '',
          },
        },
      },
    },
  ],
}
```

{@link Action#isVisible} can be either a function returning a boolean value or a boolean value itself. There is also another method: {@link Action#isAccessible} which not only hides given action but also totally
disables it.

### Action handler and action hooks

Each action has an {@link Action#handler} function. This function is executed every time the action is invoked and all of the default actions has their handlers.

You probably don't want to modify the behavior of the handler for the default Edit action. But, if you really want to change this action, you can use {@link Action#before} and {@link Action#after} action hooks.

Nevertheless, {@link Action#handler} has to be specified for new actions (read the next section).

## Modifying actions for all resources

Default actions templates can be accessed right from the AdminBro class, by using ACTIONS object.

```javascript

const AdminBro = require('admin-bro')
AdminBro.ACTIONS.show // => show action object

// so to modify the availability of action for all resources
AdminBro.ACTIONS.show.isAccessible = ({ currentAdmin, resource, record }) => {
  return currentAdmin.isManager
}
```

## Create a new, custom actions

Also, you can define your own actions. Simply pass {@link Action} under a new key to {@link ResourceOptions}.

Your action can be either `resource`, `record` or `bulk` type.

```javascript
const adminBroOptions = {
  resources: [
    { resource: Article,
      options: {
        actions: {
          newAction: {
            actionType: 'record',
            icon: 'View',
            isVisible: true,
            handler: async () => {...},
            component: AdminBro.bundle('./your-action-component'),
          },
        },
      },
    },
  ],
}
```

## Action components

When you define your own action you have to create a **React component** 
responsible for rendering it. To see what options you have - go to the next tutorial:

- {@tutorial writing-react-components}

## And much much more...

Things I presented in this tutorial are just the tip of the iceberg. Make sure to check out all available options in {@link Action} interface.
