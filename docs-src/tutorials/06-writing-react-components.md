Ok - so you have everything set up and now you want to change how a particular Resource looks.

For instance, you may want to show a _google map_ for _location_ fields, or even present some values as a graph.

You can do this all by writing your custom components.

## Example of overriding how dashboard looks:

AdminBroOptions: 
```
const AdminBroOptions = {
  ...
  dashboard: {
    component: AdminBro.bundle('./my-dashboard-component')
  },
  ...
}
```

Dashboard component: `./my-dashboard-component.jsx`
```
import React from 'react'
import { Box } from 'admin-bro'

const Dashboard = (props) => {
  return (
    <Box>My custom dashboard</Box>
  )
}

export default Dashboard
```

As you can see AdminBro uses [React](https://reactjs.org/) as a frontend framework. So before
you proceed - make sure you know how [react](https://reactjs.org/) works.

## Where you can insert your custom components?

Currently, there are 4 places where you can inject components to alter how AdminBro looks:

- overriding how properties are rendered in {@link PropertyOptions#components} by using `components` object (**PLURAL**)
- creating new or update default actions by overriding {@link Action#component} param
- changing how the dashboard looks like by using {@link AdminBroOptions#dashboard dashboard.component} param.
- creating new pages by using {@link AdminPage}.

## Requiring component

First of all - you have to require them by using {@link AdminBro.bundle} function. What it does -
it gives your component an unique ID and sends it to the __bundling__ process.

You can do it like this: `{ component: AdminBro.bundle('./path-to-your-jsx-or-tsx-file') }`

All files required by {@link AdminBro.bundle} has to have one default export - the one with your [react](https://reactjs.org/) component.

You can use either `.jsx` or `.tsx` extension for your components.

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
- [styled-system](https://www.styled-system.com)

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

In your components, you can use props passed by their controlling components.

Currently we have 2 controlling components: 

- one for an action: {@link BaseActionComponent} with {@link ActionProps}
- and one for custom property field: {@link BasePropertyComponent} with {@link BasePropertyProps}

Check out their documentation to see available **props**

BTW - Dashboard and Pages don't have any controlling component - so no props passed there.

## Reusing UI Components of AdminBro

AdminBro gives you the ability to reuse its components. You can do this by simply requiring them:

```
import { Label } from 'admin-bro'

const YourComponent (props) => {(
  <Label>Some styled text<Label>
)}
```

Each of the components is described with the playground option, so make sure to check out all the documentation of all the components.

## Using other AdminBro frontend classes and objects

AdminBro also exposes following classes:

- {@link ApiClient}
- {@link ViewHelpers}

You can use them like this:

```
import { ApiClient, ViewHelpers } from 'admin-bro'
```
