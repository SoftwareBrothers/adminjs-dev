Ok - so you have everything set up and now you want to change how a particular Resource looks.

For instance, you may want to show a _google map_ for _location_ fields, or even present some values as a graph.

You can do this all by writing your custom components.

## Example of overriding how dashboard looks:

AdminJSOptions: 
```
const AdminJSOptions = {
  ...
  dashboard: {
    component: AdminJS.bundle('./my-dashboard-component')
  },
  ...
}
```

Dashboard component: `./my-dashboard-component.jsx`
```
import React from 'react'
import { Box } from 'adminjs'

const Dashboard = (props) => {
  return (
    <Box>My custom dashboard</Box>
  )
}

export default Dashboard
```

As you can see AdminJS uses [React](https://reactjs.org/) as a frontend framework. So before
you proceed - make sure you know how [react](https://reactjs.org/) works.

## Where you can insert your custom components?

Currently, there are 4 places where you can inject components to alter how AdminJS looks:

- overriding how properties are rendered in {@link PropertyOptions#components} by using `components` object (**PLURAL**)
- creating new or update default actions by overriding {@link Action#component} param
- changing how the dashboard looks like by using {@link AdminJSOptions#dashboard dashboard.component} param.
- creating new pages by using {@link AdminPage}.

## Requiring component

First of all - you have to require them by using {@link AdminJS.bundle} function. What it does -
it gives your component an unique ID and sends it to the __bundling__ process.

You can do it like this: `{ component: AdminJS.bundle('./path-to-your-jsx-or-tsx-file') }`

All files required by {@link AdminJS.bundle} has to have one default export - the one with your [react](https://reactjs.org/) component.

You can use either `.jsx` or `.tsx` extension for your components.

## Dependencies

AdminJS bundler gives you the ability to import following dependencies without the need of requiring them in your `package.json` file:

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
- [flat](https://www.npmjs.com/package/flat)
- [@carbon/icons-react](https://www.npmjs.com/package/@carbon/icons-react)

So you can do something like this:

```
// your-custom-component.jsx
import React from 'react'
import { withRouter } from 'react-router-dom'

const YourComponent (props) => {...}

export default withRouter(YourComponent)
```

## Props passed to components

In your components, you can use props passed by their _controlling components_.

Currently we have 2 _controlling components_: 

- one for an action: {@link BaseActionComponent} with {@link ActionProps}
- and one for custom property field: {@link BasePropertyComponent} with {@link BasePropertyProps}

Check out their documentation to see available **props**

> Dashboard and Pages don't have any controlling component, so they don't receive any props.

## Reusing UI Components of AdminJS

AdminJS gives you the ability to reuse its components. You can do this by simply requiring them:

```
import { Label } from '@adminjs/design-system'

const YourComponent (props) => {(
  <Label>Some styled text<Label>
)}
```

> We divide components internally to 2 groups:
> 
> * _application components_ - which requires AdminJS, you can think about them as "smart components"
> * and _design system components_ - they don't require AdminJS and you can use them outside of the AdminJS setup.
> 
> That is why sometimes you have to import components from 'adminjs'
> package and sometimes from '@adminjs/design-system'.

Each of the components is described with the playground option, so make sure to check out all the documentation of all the components.

One of the most versatile component is a {@link BasePropertyComponent}. It allows you to render any property.
Combined with {@link useRecord} is a powerful tool for building forms.

## Theming

We support {@link Theme} compatible with https://system-ui.com/theme standard.

In order to override default colors, fonts, sizes etc., you can put your values in {@link AdminJSOptions.branding}.

### Using style props

AdminJS components are supercharged with multiple props controlling styles. For instance in order
to change color of a {@link module:@adminjs/design-system.Button} you can pass _backgroundColor_ (bg) from the {@link  module:@adminjs/design-system.Theme} like that:

```javascript
<Button bg="primary60"></Button>
```

For all possible options visit the {@link Theme} description.

### Adding custom css to components

If using style props is not enough - you can always pass your custom CSS. So for instance let's assume
that you would like to overwrite CSS in a Button component. You can do this like that:

```javascript
import { Button } from '@adminjs/design-system'

const MyButton = styled(Button)`
  background-color: #ccc;
  color: ${({theme}) => theme.colors.grey100};
  ...
`
```

We use [styled-components](https://styled-components.com/) under the hood so make sure to check out their docs.

## Using other AdminJS frontend classes and objects

AdminJS also exposes following classes:

- {@link ApiClient}
- {@link ViewHelpers}

You can use them like this:

```
import { ApiClient, ViewHelpers } from 'adminjs'
```
