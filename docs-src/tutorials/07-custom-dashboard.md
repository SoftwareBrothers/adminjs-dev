By default AdminBro comes with the simple dashboard. You can easily modify it by adding some widgets.

### how to change default dashboard

You can pass your own dashboard class to the AdminBro via [options]{@link AdminBroOptions}

```
const DashboardPage = require('./dashboard-page')

const adminBroOptions = {
  ...
  databases: [...],
  resources: [...],
  dashboard: {
    handler: async () => {

    },
    component: AdminBro.bundle('./my-dashboard-component')
  },
  rootPath: '/admin'
  ...
}

```

