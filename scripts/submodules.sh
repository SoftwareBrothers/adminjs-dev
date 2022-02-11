#!/bin/sh
# Script for init all submodules
set -e

git submodule add -b master git@github.com:SoftwareBrothers/adminjs.git packages/adminjs
git submodule add -b master git@github.com:SoftwareBrothers/adminjs-hapijs.git packages/adminjs-hapijs
git submodule add -b master git@github.com:SoftwareBrothers/adminjs-mongoose.git packages/adminjs-mongoose
git submodule add -b master git@github.com:SoftwareBrothers/adminjs-sequelizejs.git packages/adminjs-sequelizejs
git submodule add -b master git@github.com:SoftwareBrothers/adminjs-example-app.git packages/adminjs-example-app
git submodule add -b master git@github.com:SoftwareBrothers/adminjs-expressjs.git packages/adminjs-expressjs
git submodule add -b master git@github.com:SoftwareBrothers/adminjs-typeorm.git packages/adminjs-typeorm
git submodule add -b master git@github.com:SoftwareBrothers/adminjs-firebase-functions.git packages/adminjs-firebase-functions
git submodule add -b master git@github.com:SoftwareBrothers/adminjs-design-system.git packages/adminjs-design-system
git submodule add -b master git@github.com:SoftwareBrothers/adminjs-upload.git packages/adminjs-upload
git submodule add -b master git@github.com:SoftwareBrothers/adminjs-passwords.git packages/adminjs-passwords
git submodule add -b master git@github.com:SoftwareBrothers/adminjs-nestjs.git packages/adminjs-nestjs
git submodule add -b master git@github.com:SoftwareBrothers/better-docs.git
git submodule add -b main git@github.com:SoftwareBrothers/adminjs-prisma.git packages/adminjs-prisma
git submodule add -b master git@github.com:SoftwareBrothers/adminjs-logger.git packages/adminjs-logger
git submodule add -b main git@github.com:SoftwareBrothers/adminjs-import-export.git packages/adminjs-import-export
git submodule add -b master git@github.com:SoftwareBrothers/adminjs-mikroorm.git packages/adminjs-mikroorm
git submodule add -b main git@github.com:SoftwareBrothers/adminjs-fastify.git packages/adminjs-fastify
git submodule add -b main git@github.com:SoftwareBrothers/adminjs-bundler.git packages/adminjs-bundler