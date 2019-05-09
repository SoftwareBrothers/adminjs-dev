Ok - so you have everything set up and now you want to change how particular Resources looks like.

For instance you may want to show a _google map_ for _location_ fields, or even present some values as a graph.

You can do this all by writing your custom components.

## Example of overrinding how dashboard looks like:

AdminBroOptions: 
```
const AdminBroOptions = {
  ...
  dashboard: {
    component: AdminBro.require('./my-dashboard-component')
  },
  ...
}
```

Dashboard component: `./my-dashboard-component.jsx`
```
import React from 'react'
import { WrapperBox } from 'admin-bro/components'

const Dashboard = (props) => {
  return (
    <WrapperBox>My custom dashboard</WrapperBox>
  )
}
```

As you can see AdminBro uses [React](https://reactjs.org/) as a frontend framework. So before
you proceed - make sure you know how [react](https://reactjs.org/) works.

## Where you can insert your custom components?

Currently there are 3 places where you can inject components to alter how AdminBro looks like:

- overriding how properties are rendered in {@link PropertyOptions} by using `components` object.
- creating new or update default actions by overriding {@link BaseAction} `component` param
in {@link ResourceOptions}
- changing how the dashbord looks like by using {@link AdminBroOptions} `dashboard.component` param.

## Requiring component

First of all - you have to require them by using {@link AdminBro.require} function. What it does -
it gives your comopnent an uniq ID and sends it to the __bundling__ process.

You can do this like this: `{component: AdminBro.require('./path-to-your-jsx-file')}`

All files requried by AdminBro.require has to have one default export - the one with your [react](https://reactjs.org/) component.

## Dependencies

AdminBro bundler gives you the ability to import following dependencies without the need of requiring them in your `package.json` file:

- [react](https://reactjs.org/)
- [react-dom](https://reactjs.org/)
- [prop-types](https://github.com/facebook/prop-types)

**State management**

- [redux](https://redux.js.org/)
- [react-redux](https://github.com/reduxjs/react-redux)

**Routing**

- [react-router](https://reacttraining.com/react-router/)
- [react-router-dom](https://reacttraining.com/react-router/)

**Styling**

- [styled-components](https://www.styled-components.com/docs)

**Other**

- [axios](https://github.com/axios/axios)
- [recharts](http://recharts.org/en-US/)

So you can do something like this:

```
// your-custom-component.jsx
import React from 'react'
import { withRouter } from 'react-router-dom'

const YourComponent (props) => {...}

export default withRouter(YourComponent)
```

## Props passed to components

In your components you can use props passed by their controlling components.

Currently we have 2 controlling components: 

- one for an action: {@link BaseActionComponent}
- and one for custom property field: {@link BasePropertyComponent}

Check out their documentation to see available **props**

## Reusing Components of AdminBro

AdminBro gives you the ability to reuse its components. You can do this by simply requiring them:

```
import { Label } from 'admin-bro/components'

const YourComponent (props) => {(
  <Label>Some styled text<Label>
)}
```

You can choose from multiple components like:

- {@link Column} and {@link Colums},
- {@link DashboardHeader},
- {@link Label},
- {@link Loader},
- {@link Paginate},
- {@link PropertyInEdit},
- {@link PropertyInShow},
- {@link PropertyInFilter},
- {@link StyledButton},
- {@link ValueBlock} and
- {@link WrapperBox}

Each of the components is described with the playground option.

## Using other AdminBro frontend classes and objects

AdminBro also exposes following classes:

- {@link ApiClient}
- {@link ViewHelpers}

You can use them like this:

```
import { ApiClient, ViewHelpers } from 'admin-bro'
```

Another interesting option is to reuse AdminBro style `colors`, `sizes` and `font` parameters

```
import { colors, sizes, fonts, breakpoints } from 'admin-bro/style'
```

and finally you can reuse our PropTypes:

```
import { propertyType, actionType, resourceType, recordType } from 'admin-bro/types'

const MyActionComponent = (props) => {
  const { action, resource, record } = props
  ...
}

MyActionComponent.propTypes {
  action: actionType,
  resource: resourceType,
  record: recordType,
}

export default MyActionComponent
```

