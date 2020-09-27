<script src="https://cdn.jsdelivr.net/npm/mermaid/dist/mermaid.min.js"></script>
<script>mermaid.initialize({startOnLoad:true});</script>

Because AdminBro can be run under **any Node.JS** framework and **feed with multiple kinds of data**, it has to have a modular structure.

Furthermore, AdminBro Features are extending the basic feature set of the core package.

### Let's see how it looks

This is the default flow from your data, to an actual rendering of the UI.
<div class="is-hidden-mobile">
  <div class="mermaid" style="margin: 40px 0;">
    graph LR
      O(ORM/ODM) --> C
      subgraph core [AdminBro]
        A[[AdminBro]] --> |rendering| B[Plugins]
        C[Adapters]  --> |data fetching| A
      end
      B --> D(HTTP framework) 
  </div>
</div>
<div class="is-hidden-tablet has-text-centered">
  <div class="mermaid" style="margin: 40px 0;">
    graph TB
      O(ORM/ODM) --> C
      subgraph core [AdminBro]
        A[[AdminBro]] --> |rendering| B[Plugins]
        C[Adapters]  --> |data fetching| A
      end
      B --> D(HTTP framework) 
  </div>
</div>

What happens here:

1. You connect with the database, or any other data source, with your **favorite ORM/ODM** client
2. Then, AdminBro **Adapter** takes control and translates all the calls like `save`, `update` from the ORM to AdminBro.
3. The core (admin-bro) package is an actual **AdminBro** - it handles all the backend and frontend logic, except it does not know anything about how to render itself by the HTTP framework.
4. but **Plugins** know, they take all the routes definitions exported by AdminBro and simply render them within a given HTTP framework like express, koa, Hapi...

### Modules types

To summarize, there are 3 kinds of modules which can be plugged into the AdminBro:

#### 1. Adapters

Translates ORM/ODM interface to be compatible with the one used inside the AdminBro core

#### 2. Plugins

Translates all the Routes provider by AdminBro so they can be rendered under the given HTTP framework

#### 3. Features

Are external packages, which can be added to AdminBro config to extend its functionality.

### Installation

To run AdminBro you have to use at least.

1. `admin-bro` core package
2. one of the plugins along with your HTTP framework (or write your own)
3. one or more database Adapters along with the ORM they support (or write your own)