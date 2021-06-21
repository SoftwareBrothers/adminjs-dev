This package consists of all DesignSystem components from [AdminJS](adminjs.co)
so you can use all of them inside and outside the AdminJS environment.
 
It was created with the help of 2 amazing packages:
 
- [styled-components](styled-components.com) which is a peerDependency
- [styled-system](styled-system.com)
 
make sure to check them out to use the full potential of this design system
 
## Usage within the AdminJS
 
If you are using this module inside AdminJS there is no need to install anything,
just use its components like this:
 
```typescript
import { Box, Button } from '@adminjs/design-system'
 
// and here you can use them
```
 
## Usage outside the AdminJS
 
Nothing stays in a way of using `@adminjs/design-system` in your project which doesn't
require AdminJS. Simply {@link module:@adminjs/design-system visit the module page} and follow installation instructions.
 
## Changing the theme
 
The Design System provides you with the default [theme](https://adminjs.co/Theme.html).
It contains all the parameters like paddings, colors, font sizes etc.
For the list of all available parameters take a look at the
[Theme spec](https://adminjs.co/Theme.html).
 
But nothing stands in a way for you to change the default theme. In order to override the Theme or its selected parameters use {@link AdminJSOptions.branding}
theme property.

## Changing particular components
 
Sometimes you might want to change the look and feel of a
particular component - not the entire theme. You can achieve that with the `styled` method:
 
```typescript
import { Button } from '@adminjs/design-system'
import styled from 'styled-components'
 
const MyRoundedButton = styled(Button)`
  border-radius: 10px;
`
```
 
and then you can use it like a normal button component:
 
```jsx
<MyRoundedButton variant="primary">Rounded I am</MyRoundedButton>
```
 
## Components
 
This is the list of all our components

### Atoms

<table>
  <tr>
    <td class="has-text-centered">
      [<img src="components/badge.png" />]{@link Badge}
      <h5>{@link Badge}</h5>
    </td>
    <td class="has-text-centered">
      [<img src="components/box.png" />]{@link Box}
      <h5>{@link Box}</h5>
    </td>
    <td class="has-text-centered">
      [<img src="components/button.png" />]{@link Button}
      <h5>{@link Button}</h5>
    </td>
  </tr>
  <tr>
    <td class="has-text-centered">
      [<img src="components/checkbox.png" />]{@link CheckBox}
      <h5>{@link CheckBox}</h5>
    </td>
    <td class="has-text-centered">
      [<img src="components/header.png" />]{@link Header}
      <h5>{@link Header}</h5>
    </td>
    <td class="has-text-centered">
      [<img src="components/icon.png" />]{@link Icon}
      <h5>{@link Icon}</h5>
    </td>
  </tr>
  <tr>
    <td class="has-text-centered">
      [<img src="components/illustration.png" />]{@link Illustration}
      <h5>{@link Illustration}</h5>
    </td>
    <td class="has-text-centered">
      [<img src="components/input.png" />]{@link Input}
      <h5>{@link Input}</h5>
    </td>
    <td class="has-text-centered">
      [<img src="components/label.png" />]{@link Label}
      <h5>{@link Label}</h5>
    </td>
  </tr>
  <tr>
    <td class="has-text-centered">
      [<img src="components/link.png" />]{@link Link}
      <h5>{@link Link}</h5>
    </td>
    <td class="has-text-centered">
      [<img src="components/loader.png" />]{@link Loader}
      <h5>{@link Loader}</h5>
    </td>
    <td class="has-text-centered">
      [<img src="components/placeholder.png" />]{@link Placeholder}
      <h5>{@link Placeholder}</h5>
    </td>
  </tr>
  <tr>
    <td class="has-text-centered">
      [<img src="components/radio.png" />]{@link Radio}
      <h5>{@link Radio}</h5>
    </td>
    <td class="has-text-centered">
      [<img src="components/section.png" />]{@link Section}
      <h5>{@link Section}</h5>
    </td>
    <td class="has-text-centered">
      [<img src="components/text.png" />]{@link Text}
      <h5>{@link Text}</h5>
    </td>
  </tr>
  <tr>
    <td class="has-text-centered">
      [<img src="components/textarea.png" />]{@link TextArea}
      <h5>{@link TextArea}</h5>
    </td>
    <td class="has-text-centered">
      [<img src="components/tooltip.png" />]{@link Tooltip}
      <h5>{@link Tooltip}</h5>
    </td>
    <td class="has-text-centered">
      [<img src="components/table.png" />]{@link Table}
      <h5>{@link Table}</h5>
    </td>
  </tr>
</table>

### Molecules

<table>
  <tr>
    <td class="has-text-centered">
      [<img src="components/date-picker.png" />]{@link DatePicker}
      <h5>{@link DatePicker}</h5>
    </td>
    <td class="has-text-centered">
      [<img src="components/info-box.png" />]{@link InfoBox}
      <h5>{@link InfoBox}</h5>
    </td>
    <td class="has-text-centered">
      [<img src="components/message-box.png" />]{@link MessageBox}
      <h5>{@link MessageBox}</h5>
    </td>
  </tr>
  <tr>
    <td class="has-text-centered">
      [<img src="components/modal.png" />]{@link Modal}
      <h5>{@link Modal}</h5>
    </td>
    <td class="has-text-centered">
      [<img src="components/navigation-element.png" />]{@link NavigationElement}
      <h5>{@link NavigationElement}</h5>
    </td>
    <td class="has-text-centered">
      [<img src="components/pagination.png" />]{@link Pagination}
      <h5>{@link Pagination}</h5>
    </td>
  </tr>
  <tr>
    <td class="has-text-centered">
      [<img src="components/stepper.png" />]{@link Stepper}
      <h5>{@link Stepper}</h5>
    </td>
    <td class="has-text-centered">
      [<img src="components/step.png" />]{@link Step}
      <h5>{@link Step}</h5>
    </td>
    <td class="has-text-centered">
      [<img src="components/form-group.png" />]{@link FormGroup}
      <h5>{@link FormGroup}</h5>
    </td>
  </tr>
  <tr>
    <td class="has-text-centered">
      [<img src="components/drop-zone.png" />]{@link DropZone}
      <h5>{@link DropZone}</h5>
    </td>
    <td class="has-text-centered">
      [<img src="components/drop-zone-item.png" />]{@link DropZoneItem}
      <h5>{@link DropZoneItem}</h5>
    </td>
    <td class="has-text-centered">
      [<img src="components/drop-down.png" />]{@link DropDown}
      <h5>{@link DropDown}</h5>
    </td>
  </tr>
  <tr>
    <td class="has-text-centered">
      [<img src="components/drawer.png" />]{@link Drawer}
      <h5>{@link Drawer}</h5>
    </td>
    <td class="has-text-centered">
      [<img src="components/rich-text.png" />]{@link RichText}
      <h5>{@link RichText}</h5>
    </td>
    <td class="has-text-centered">
      [<img src="components/value-group.png" />]{@link ValueGroup}
      <h5>{@link ValueGroup}</h5>
    </td>
  </tr>
  
</table>

### Organisms

<table>
  <tr>
    <td class="has-text-centered">
      [<img src="components/current-user-nav.png" />]{@link CurrentUserNav}
      <h5>{@link CurrentUserNav}</h5>
    </td>
    <td class="has-text-centered">
      [<img src="components/navigation.png" />]{@link Navigation}
      <h5>{@link Navigation}</h5>
    </td>
    <td class="has-text-centered">
      [<img src="components/button-group.png" />]{@link ButtonGroup}
      <h5>{@link ButtonGroup}</h5>
    </td>
  </tr>
</table>