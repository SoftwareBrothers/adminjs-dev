<script src="https://cdn.jsdelivr.net/npm/mermaid/dist/mermaid.min.js"></script>
<script>mermaid.initialize({startOnLoad:true});</script>

Because AdminJS can be run under **any Node.JS** framework and **feed with multiple kinds of data**, it has to have a modular structure.

Furthermore, AdminJS Features are extending the basic feature set of the core package.

### Let's see how it looks

This is the default flow from your data, to an actual rendering of the UI.
<div class="is-hidden-mobile">
  <div class="mermaid" style="margin: 40px 0;">
    graph LR
      O(ORM/ODM) --> C
      subgraph core [AdminJS]
        A[[AdminJS]] --> |rendering| B[Plugins]
        C[Adapters]  --> |data fetching| A
      end
      B --> D(HTTP framework) 
  </div>
</div>
<div class="is-hidden-tablet has-text-centered">
  <div class="mermaid" style="margin: 40px 0;">
    graph TB
      O(ORM/ODM) --> C
      subgraph core [AdminJS]
        A[[AdminJS]] --> |rendering| B[Plugins]
        C[Adapters]  --> |data fetching| A
      end
      B --> D(HTTP framework) 
  </div>
</div>

What happens here:

1. You connect with the database, or any other data source, with your **favorite ORM/ODM** client
2. Then, AdminJS **Adapter** takes control and translates all the calls like `save`, `update` from the ORM to AdminJS.
3. The core (adminjs) package is an actual **AdminJS** - it handles all the backend and frontend logic, except it does not know anything about how to render itself by the HTTP framework.
4. but **Plugins** know, they take all the routes definitions exported by AdminJS and simply render them within a given HTTP framework like express, koa, Hapi...

### Modules types

To summarize, there are 3 kinds of modules which can be plugged into the AdminJS:

#### 1. Adapters

Translates ORM/ODM interface to be compatible with the one used inside the AdminJS core

#### 2. Plugins

Translates all the Routes provider by AdminJS so they can be rendered under the given HTTP framework

#### 3. Features

Are external packages, which can be added to AdminJS config to extend its functionality.

### Installation

To run AdminJS you have to use at least.

1. `adminjs` core package
2. one of the plugins along with your HTTP framework (or write your own)
3. one or more database Adapters along with the ORM they support (or write your own)