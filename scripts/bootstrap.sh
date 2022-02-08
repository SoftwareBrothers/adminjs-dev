#!/bin/sh

set -e

# Remove all yarn locks
find . -name "yarn.lock" -exec rm -rf {} \;
# Remove packages's modules
find . -name "node_modules" -exec rm -rf {} \;

# Install dependencies
yarn install

# Build all packages
# Build mongoose first in order to be dependency of @adminjs/import-export
yarn workspace @adminjs/mongoose build
yarn workspaces --no-progress run build
# Build AdminJS