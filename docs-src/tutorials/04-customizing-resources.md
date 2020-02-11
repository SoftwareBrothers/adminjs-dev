AdminBro works quite well with a default scaffolding, but what if you want to modify how the Resources look like?
You can use {@link ResourceOptions}

## Resource options

{@link ResourceOptions} are passed to the AdminBro along with other {@link AdminBroOptions configuration options}.

```javascript
...
const Article = require('./models/article')

const adminBroOptions = {
  resources: [
    { resource: Article, options: {'...your options goes here'} },
  ],
  branding: {
    companyName: 'Amazing c.o.',
  },
  ...
}
...
```

When not passed - AdminBro will use defaults.

## How a __Resource__ can be modified?

You have lots of options. You can modify the basic appearance of a resource and more complicated aspects, as to how a particular field should be rendered.

In the next sections, I will point out a couple of options.

### { __parent__ } In the sidebar

By default AdminBro groups resources by the database, they belong to. But you can change that and group them in a different way. It can be done by using a `parent` option.

So let say you want to group all text'ish resources into a __content__ category in the sidebar.
You can do this by passing the __parent__ as an option:

```javascript
const contentParent = {
  name: 'Content',
  icon: 'fa fa-file-text',
}
const adminBroOptions = {
  resources: [
    { resource: Article, options: { parent: contentParent } },
    { resource: BlogPost, options: { parent: contentParent } },
    { resource: Comment, options: { parent: contentParent } },
  ],
}
```

This will group all Resources together in a "Content" category in a sidebar - and it adds
__file-text__ icon from {@link https://fontawesome.com/}.

### { __name__ } of a __Resource__

By default - the name of a Resource is taken from the database _collection/table_ - you can change that by setting a __name__ option.

```javascript
const adminBroOptions = {
  resources: [
    { resource: Article, options: { name: 'Your custom name' } },
  ],
}
```

AdminBro has 2 fonts included by default:
* {@link http://fizzed.com/oss/font-mfizz mfizz}
* {@link https://fontawesome.com/ font awesome}

You can add your own fonts by using: { __assets.styles__ } setting in {@link AdminBroOptions}.

### { __xxxProperties__ } - visibility of properties

It defines which properties should be visible in a __list__, __edit__, __show__ and __filter__ views.

Let's say that you have a resource city with 20 fields like _name, lat, lng, population, pollution, ..._.
By default AdminBro will render first DEFAULT_MAX_ITEMS_IN_LIST which is __8__. What if you want to
present just 3 of them in a different order.

You can do this by using __listProperties__ option:

```javascript
const adminBroOptions = {
  resources: [
    { resource: City, options: { listProperties: ['name', 'population', 'polution'] } },
  ],
}
```

The same goes with __showProperties__, __editProperties__ and __filterProperties__.

## { __properties.propertyName__ } - custom property options

AdminBro allows you to:
- fully customize how each property should be presented
- add custom properties

Everything thanks to {@link PropertyOptions}.

### Visibility of properties { __...propertyName.position__ } and { __...propertyName.isVisible__ }

using __xxxProperties__ is not the only way of handling which property should be seen on a list, edit, filter and show views. You can achieve a similar result by using __position__ and __isVisible__ options.

Using them have more sense if you want to disable one particular field, so instead of modifying entire __xxxProperties__ array you can set up just one filed.

In the following example, I will hide __name__ field in the __list__, __filter__ and the __edit__, but will leave it in a __show__ view.

```javascript
const adminBroOptions = {
  resources: [
    { resource: City, options: { properties: {
      name: {
        isVisible: { list: false, filter: false, show: true, edit: false },
      }
    }},
  ],
}
```

You can hide an entire field from all views by simply setting __isVisible__ to false.

Also, you can simply change the position of a field by using __position__ option. By default all fields have position __100__, except the __title__ field which gets position __-1__ - means it will be at the beginning of a list.

__Important notice about overriding xxxProperties__: both _{ propertyName.position }_ and _{ propertyName.isVisible }_ will be overriden by _xxxProperties_ if you set it.

### { __propertyName.type__ } of a property

By default types of properties are computed by adapters, see {@tutorial 03-passing-resources} tutorial.

So when you have a __DATE__ field it will be rendered as a __date__ with __datepicker__ and custom __from__ - __to__ filter.

You can change this behavior by modifying its type. So, for instance, you can add a richtext editor to a  __content__ like that:

```javascript
const adminBroOptions = {
  resources: [
    { resource: City, options: { properties: {
      content: { type: 'richtext' },
    }},
  ],
}
```

And you will see {@link https://quilljs.com} editor in place of a regular text field.

Supported types can be found [here]{@link PropertyType}

### { __propertyName.availableValues__ } narrow down the possible values

when you pass this option to a property it will render the **select** HTML element with all the
available options.

```
{
  ...
  name: 'genre',
  label: 'Genre'
  availableOptions: [
    {value: 'male', label: 'Male'},
    {value: 'female', label: 'Female'},
  ],
  ...
}
```

### { __propertyName.component__ } property appearance

You can also totally change the way of how property is rendered. The only thing you have to do is to change __component__ responsible for rendering given field.

So let say we want to change the way how __content__ property is rendered on the list:

```javascript
const adminBroOptions = {
  resources: [{
    resource: City,
    options: {
      properties: {
        content: {
          component: {
            list: AdminBro.bundle('./city-content-in-list'),
          },
        },
      },
    },
  }],
}
```

```javascript
// city-content-in-list.jsx
import React from 'react'

const CityContentInList = (props) => (
  <div>Some custom content...</div>
)

export default CityContentInList
```

You can read more about creating your own components in {@tutorial 06-writing-react-components}.

## Adding new properties

Also, you can add new properties to the Resource by using a { __properties.propertyName__ }. You just need to define some or all components (list, view, edit, filter).
For example, if you want to group 'lat' and 'lng' fields on the list and display them as
a _google map_ in a __show__ view you can use something like this:

```javascript
const adminBroOptions = {
  resources: [
    { resource: City, options: { properties: {
      lat: { isVisible: { list: false, show: false, edit: true, filter: true } },
      lng: { isVisible: { list: false, show: false, edit: true, filter: true } },
      map: {
        components: {
          show: AdminBro.bundle('./city-in-a-show'),
        },
        isVisible: {
          show: true, view: false, edit: false, filter: false,
        }
      },
    }},
  ],
}
```

Then you will have to create `city-in-a-list.jsx` react component (or .tsx for TypeScript).
To see how to do this visit {@tutorial 06-writing-react-components}.

## What's next?

To see all available options - check out the {@link ResourceOptions} interface.

You can also read more about creating your own components in {@tutorial 06-writing-react-components}.
