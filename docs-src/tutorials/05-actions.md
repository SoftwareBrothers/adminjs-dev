At some point you would probably like to customize default views or create custom actions. [Actions]{@link Action} are the way of doing that.

## Default actions

Admin bro has 6 major default actions defined for each resource:

__Resource__ base actions:

* list - list all records
* new [Add new] - creates new record

__Record__ base actions:

* show [info] - shows details of a given record
* edit [edit] - updates given record
* delete [remove] - removes given record

__Bulk__ actions:

* bulkDelete [remove] - removes all selected records from the database

__Resource base actions__ can be accessed in the header of the list of all the resources (next to the _filters_ button). __Record actions__ are places on the list by the resource. Where __Bulk actions__ appear right in the table header when you select at least one record.

Take a look at the following screenshot:

<img src="./images/actions.png">

Default actions can be accessed right from the AdminBro class, by using ACTIONS object.

```javascript

const AdminBro = require('admin-bro)
AdminBro.ACTIONS.show // => show action object

// so to modify the availability of action for all resources
AdminBro.ACTIONS.show.isAccessible = ({ currentAdmin, resource, record }) => {
  return currentAdmin.isManager
}
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

Yes - you can modify things like: label, icon and visibility. List of all options can be found in {@link Action}

In the following example, we will change {@link Action#label label} of show action along with the {@link Action#icon icon}, and will show it only for records with an email.

```javascript
const adminBroOptions = {
  resources: [
    { resource: Article,
      options: {
        actions: {
          show: {
            label: 'Show me that',
            icon: 'View',
            isVisible: (context) => record.param('email') !== '',
          },
        },
      },
    },
  ],
}
```

{@link Action#isVisible} can be either a function returning a boolean value or a boolean value itself.

### Action handler and action hooks

Each action has an {@link Action#handler} function. This function is executed every time the action is invoked and all of the default actions has their handlers.

You probably don't want to modify behavior of the handler for the default Edit action. But, if you really want to change this action, you can use {@link Action#before} and {@link Action#after} action hooks.

{@link Action#handler} has to be specified for new actions (read the next section).

## Custom Actions

Also, you can define your own actions. Simply pass {@link Action} under a new key to {@link ResourceOptions}.

Your action can be either `resource`, `record` or `bulk`.

```javascript
const adminBroOptions = {
  resources: [
    { resource: Article,
      options: {
        actions: {
          newAction: {
            actionType: ['record'],
            label: 'Publish',
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

When you define your own action you have to also create a **React component** responsible
for rendering it. To see what options you have - go to the next tutorial:

- {@tutorial 06-writing-react-components}

## And much much more...

Things I presented in this tutorial are just the tip of the iceberg. Make sure to check out all available options in {@link Action} interface.
