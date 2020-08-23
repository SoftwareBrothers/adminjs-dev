AdminBro works quite well with a default scaffolding, but what if you want to modify how the Resources look like?
You can use {@link ResourceOptions}

## Resource options

{@link ResourceOptions} are passed to the AdminBro along with other {@link AdminBroOptions configuration options}.

```javascript
...
const Article = require('./models/article')

const adminBroOptions = {
  resources: [
    { resource: Article, options: {
       // ...your options go here
    }},
  ],
  branding: {
    companyName: 'Amazing c.o.',
  },
  ...
}
...
```

> AdminBro will use defaults setting whey you wont pass any options.

## How a __Resource__ can be modified?

You have lots of options. You can modify the basic appearance of a resource and more complicated aspects, as to how a particular field should be rendered.

In the next sections, I will point out a couple of options. For the full list visit the {@link ResourceOptions} interface.

### { __parent__ } In the sidebar

By default AdminBro groups resources by the database, they belong to. But you can change that and group them in a different way. It can be done by using a `parent` option.

So let say you want to group all text'ish resources into a __content__ category in the sidebar.
You can do this by passing the __parent__ as an option:

```javascript
const contentParent = {
  name: 'content',
  icon: 'Accessibility',
}
const adminBroOptions = {
  resources: [
    { resource: Article, options: { parent: contentParent } },
    { resource: BlogPost, options: { parent: contentParent } },
    { resource: Comment, options: { parent: contentParent } },
  ],
}
```

This will group all Resources together in a "Content" category in a sidebar - and it assigns Accessibility
icon to it. Shat you give here is passed to {@link module:@admin-bro/design-system.Icon Icon Component}.

As you see we passed name: 'content' but AdminBro changed that to 'Content'. This is because, by default, all texts are "Start Cased".

You can provide any translation text to it by using translation label: see tutorial {@tutorial i18n}.

### Renaming a __Resource__

By default - the name of a Resource is taken from the database _collection/table_ - you can change that by setting a i18n label

```javascript
const adminBroOptions = {
  resources: [
    { resource: Article, options: {...} },
  ], 
  locale: {
    translations: {
      labels: {
        Article: 'Amazing Article'
      }
    }
  },
}
```


Take a look at tutorial: {@tutorial i18n} and read more about internationalization in AdminBro.

### { __xxxProperties__ } - visibility of properties

It defines which properties should be visible in a __list__, __edit__, __show__ and __filter__ views.

Let's say that you have a resource city with 20 fields like _name, lat, lng, population, pollution, ..._.
By default AdminBro will render first *DEFAULT_MAX_ITEMS_IN_LIST* which is __8__. What if you want to
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

## { __properties[propertyName]__ } - custom property options

AdminBro allows you to:
- fully customize how each property should be presented
- add custom properties

Everything thanks to {@link PropertyOptions}.

### Visibility of properties { __...[propertyName].position__ } and { __...[propertyName].isVisible__ }

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

__Important notice about overriding xxxProperties__: both _{ propertyName.position }_ and _{ propertyName.isVisible }_ will be overwritten by _xxxProperties_ if you set it.

### { __[propertyName].isTitle__ }

As I mentioned a **title** property goes first in the list of all properties, and in smaller screens, only this property stays. Also title property is the property on which you can search in autocomplete (by default).

AdminBro tries to pick **title** property automatically. It is property with name "name" or "email". You can change this behavior by setting {@link PropertyOptions#isTitle} for default property to `false` and for the new property to `true`.

### { __[propertyName].type__ } of a property

By default types of properties are computed by adapters, see tutorial: {@tutorial passing-resources} tutorial.

So when you have a __DATE__ field it will be rendered as a __date__ with {@link module:@admin-bro/design-system.DatePicker DatePicker} and custom __from__ - __to__ filter.

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

### { __[propertyName].availableValues__ } narrow down the possible values

when you pass this option to a property it will render the **select** HTML element with all the
available options.

```
{
  ...
  name: 'genre',
  label: 'Genre'
  availableValues: [
    {value: 'male', label: 'Male'},
    {value: 'female', label: 'Female'},
  ],
  ...
}
```

### { __[propertyName].components__ } property appearance

You can also totally change the way of how property is rendered. The only thing you have to do is to change __components__ responsible for rendering given field.

So let say we want to change the way how __content__ property is rendered on the list:

```javascript
const adminBroOptions = {
  resources: [{
    resource: City,
    options: {
      properties: {
        content: {
          components: {
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

You can read more about creating your own components in this tutorial: {@tutorial writing-react-components}.

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
To see how to do this visit tutorial: {@tutorial writing-react-components}.

## What's next?

To see all available options - check out the

* {@link ResourceOptions} interface.
* {@link PropertyOptions} interface.

There is an another very important section in {@link ResourceOptions} - **actions**. It gives you the ability
to modify existing actions like `edit` or `delete` or add new **actions**. Go to the next tutorial: {@tutorial actions} to read more about them.

You can also read more about creating your own components in this tutorial: {@tutorial writing-react-components}.
