import "reflect-metadata";
import {createConnection} from "typeorm";
import { Car } from "./entity/Car";
import { CarDealer } from "./entity/CarDealer";
import * as express from 'express'
import AdminBro, { AdminBroOptions } from 'admin-bro'
import * as AdminBroExpress from 'admin-bro-expressjs'
import { Database, Resource } from "admin-bro-typeorm";

import {validate} from 'class-validator'
Resource.validate = validate

AdminBro.registerAdapter({ Database, Resource })

createConnection().then(async connection => {
  const app = express()
  const port = 3000
  

  const options: AdminBroOptions = {
    // databases: [connection],
    resources: [ Car, CarDealer ]
  }
  const adminBro = new AdminBro(options)
  const router = AdminBroExpress.buildRouter(adminBro)

  app.get('/', (req, res) => res.send('Hello World!'))
  app.use(adminBro.options.rootPath, router)

  app.listen(port, () => console.log(`Example app listening on port ${port}!`))

}).catch(error => console.log(error));
