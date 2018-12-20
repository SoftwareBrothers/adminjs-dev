const AdminBro = require('admin-bro')
const AdminBroMongoose = require('admin-bro-mongoose')
const inert = require('inert')
AdminBro.registerAdapter(AdminBroMongoose)

const Hapi = require('hapi')
const mongoose = require('mongoose')
const Bcrypt = require('bcrypt')

const AdminBroPlugin = require('admin-bro-hapijs')
const AdminModel = require('../mongoose/admin-model')
const ArticleModel = require('../mongoose/article-model')
const ArticleDecorator = require('./article-decorator')
const DashboardPage = require('./dashboard-page')

require('../mongoose/blog-post-model')
require('../mongoose/comment-model')
require('../mongoose/category-model')
require('../mongoose/page-model')
require('../mongoose/user-model')
require('../mongoose/clients-model')

const PostCode = require('../rest/postcode')

/**
 * Creates first admin test@example.com:password when there are no
 * admins in the database
 */
const createAdminIfNone = async () => {
  const existingAdmin = await AdminModel.countDocuments() > 0
  if (!existingAdmin) {
    const password = await Bcrypt.hash('password', 10)
    const admin = new AdminModel({ email: 'test@example.com', password })
    await admin.save()
  }
}

const start = async () => {
  try {
    const server = Hapi.server({ port: process.env.PORT || 8080 })
    const connection = await mongoose.connect(process.env.MONGO_URL)
    await server.register(inert)

    await createAdminIfNone()

    server.route({
      method: 'GET',
      path: '/custom.css',
      handler: function (request, h) {
        return h.file('./examples/hapijs/assets/custom.css')
      }
    })

    server.route({
      method: 'GET',
      path: '/custom.js',
      handler: function (request, h) {
        return h.file('./examples/hapijs/assets/custom.js')
      }
    })

    const adminBroOptions = {
      databases: [connection],
      resources: [{
        resource: ArticleModel,
        decorator: ArticleDecorator,
      }, new PostCode()],
      branding: {
        companyName: 'Amazing c.o.',
      },
      rootPath: '/admin',
      auth: {
        authenticate: async (email, password) => {
          const admin = await AdminModel.findOne({ email })
          const isValid = admin && await Bcrypt.compare(password, admin.password)
          return isValid && admin
        },
        cookiePassword: process.env.ADMIN_COOKIE_SECRET || 'yoursupersecretcookiepassword-veryveryverylong',
        isSecure: false, // allows you to test the app with http
      },
      dashboard: DashboardPage,
      customAssets: {
        styles: ['/custom.css'],
        scripts: ['/custom.js']
      }
    }
    await server.register({
      plugin: AdminBroPlugin,
      options: adminBroOptions,
    })

    await server.start()
    console.log('Server running at:', server.info.uri)
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

start()
