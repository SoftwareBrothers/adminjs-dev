## Admin Bro

An automatic admin interface which can be plugged into your application. You, as a developer, provide database models (like posts, comments, stores, products or whatever else your application uses), and AdminBro generates ReactJS UI which allows you (or other trusted users) to manage content.

## Live example

Check out the example application with mongodb and postgres models here: [https://admin-bro-example-app-staging.herokuapp.com/admin](https://admin-bro-example-app-staging.herokuapp.com/admin)


<a href="https://admin-bro-example-app-staging.herokuapp.com/admin" style="margin-right: 80px" class="button is-pulled-left" target="_blank">See the demo app</a>
- login: __test@example.com__
- password: __password__

### Screenshots

<img src='./images/list.png' style='width: 49%; float: left; margin-right: 1%; border: 1px solid #ccc'>
<img src='./images/dashboard.png' style='width: 49%; border: 1px solid #ccc'>

## Versions

Latest version: v3.1

read the docs for older versions:

- [version 2](https://v2.adminbro.com/docs.html)
- [version 1.6](https://v1.adminbro.com)

## How to read this documentation

AdminBro is not an tiny system so to get to know it I suggest the following path:

### Step 1. Read the high level guides

Tutorials are the best way to start using AdminBro. They contain high level information
about the panel and points other places in the documentation where you can find more details.

Tutorials can be divided into 3 parts:

1. **Setup AdminBro in your app.**
  - {@tutorial installation-instructions} - adding AdminBro to your already existing project
  - {@tutorial passing-resources} - adding resources to the sidebar of AdminBro
2. **Customize how resources behave**
  - {@tutorial customizing-resources} - how to use {@link ResourceOptions} to modify how resources
  - {@tutorial actions} - adding custom actions to resources.
3. **Customize how resources and entire AdminBro looks**
  - {@tutorial writing-react-components}
  - {@tutorial features}
  - {@tutorial custom-dashboard}
4. **Secure AdminBro**
  - {@tutorial rbac}
5. **Content**
  - {@tutorial i18n}
  - {@tutorial cms}

### Step 2. Get familiar with all the options you can pass to AdminBro

AdminBro has dozens of different options. I suggest you to check them out
to see what can be modified.

- {@link AdminBroOptions} - list of all root level options
- {@link ResourceOptions} - describe how to modify Resource
- {@link PropertyOptions} - modify or create new Resource Properties
- {@link Action} - modify existing or create new actions

### Step 3. Read about the helper classes

We exposed some helper Classes which you can use when working with AdminBro:

* {@link ApiClient} - it is a Client library with which you will be able to fetch resources from the AdminBro API (check out {@link ApiController} to see how the API looks)
* {@link ViewHelpers} - which will create an AdminBro URLs for your links.

### Step 4. See the React Components which you can use.

Another thing are React Components which you can reuse. You can see list of them in the sidebar.

### Step 5. Want to see the code?

- checkout the [admin-bro git repo](https://github.com/SoftwareBrothers/admin-bro)

## Screencasts

There are 2 screencasts on [jscasts.tv](http://jscasts.tv) channel about an AdminBro which could guide you of how to use it. **They are quite old so bare in mind that API have changed since then**.

* [Adding admin panel to node.js app](https://www.youtube.com/watch?v=7Ujn7g1JF1Q&t=4s)
* [Customize resources](https://www.youtube.com/watch?v=1lOKKK_yrlc)


## Inspiration

Inspired by: [django admin](https://docs.djangoproject.com), [rails admin](https://github.com/sferik/rails_admin) and [active admin](https://activeadmin.info/).
