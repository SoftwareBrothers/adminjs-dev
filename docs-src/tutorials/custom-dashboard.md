By default AdminJS comes with the simple dashboard. You can easily modify it by adding some widgets.

### how to change default dashboard

You can pass your own dashboard class to the AdminJS via [options]{@link AdminJSOptions}

```
const DashboardPage = require('./dashboard-page')

const adminJsOptions = {
  ...
  databases: [...],
  resources: [...],
  dashboard: {
    handler: async () => {

    },
    component: AdminJS.bundle('./my-dashboard-component')
  },
  rootPath: '/admin'
  ...
}

```

