By default, AdminJS is equipped with a powerful [quill](https://quilljs.com/) editor, which makes it a perfect tool as a Content Management System

### AdminJS as a Content Management System

To add quill to the AdminJS setup you need to change the type of the property holding content to the `richtext`.

Assuming this is your DB schema (mongoose example)

```
const PageSchema = new mongoose.Schema({
  title: String,
  content: String,
})
const Page = mongoose.model('Page', PageSchema)
```

you can setup content to be a Quill instance like that:

```
const pageResourceOptions = {
  properties: {
    content: {
      type: 'richtext',
      custom: {
        // some custom options
      },
    },
  },
}

new AdminJS({
  resources: [{ resource: Page, options: pageResourceOptions }]
})
```

### About the options

As you saw in the previous example the property takes also a `custom` object. In the case of `richtext` these are the quill options used to initialize the editor:

```
const editor = new Quill('#editor', custom)
```

So to change the toolbar you can pass `modules.toolbar` option:

```
    content: {
      type: 'richtext',
      custom: {
        modules: {
          toolbar: [['bold', 'italic'], ['link', 'image']],
        },
      },
    },
```

There is a very important restriction though. You can pass to `custom` only things which can be stringified (because they are passed to the frontend). So this won't work:

```
custom: {
  modules: { toolbar: {
    handlers: {link: () => {...}}
  }}
}
```

because the `link` function cannot be stringified.

To bypass this restriction you will have to write your Edit Component. You can use [This Example](https://github.com/SoftwareBrothers/adminjs/blob/master/src/frontend/components/property-type/richtext/edit.tsx) as a starting point. 