By default AdminBro comes with the simple dashboard. You can easily modify it by adding some widgets.

### how to change default dashboard

You can pass your own dashboard class to the AdminBro via [options]{@link AdminBroOptions}

```
const DashboardPage = require('./dashboard-page')

const adminBroOptions = {
  ...
  databases: [...],
  resources: [...],
  dashboard: DashboardPage,
  rootPath: '/admin'
  ...
}

```


__DashboardPage__ has to be a subclass of [AdminBro.PageBuilder]{@link PageBuilder}, and should implement `build` method:

```
const { PageBuilder } = require('admin-bro')

class DashboardPage extends PageBuilder {
  constructor(props) {
    super(props)
    this.title = 'Custom dashboard'
    this.subtitle = 'This is just an example what can be done using AdminBro'
  }

  async build() {
    this.addBlock({
      title: 'Published Articles',
      value: this.articlesCount.published,
      icon: 'fas fa-newspaper fa-2x',
      columns: 3,
    })
  }
}

module.exports = DashboardPage
```

In the example above we are adding just one simple widget which will have width of 3 columns (in 12 columns grid).

### Available widgets methods

To see all available widgets - visit the {@link PageBuilder} class documentation