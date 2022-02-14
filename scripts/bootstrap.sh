#!/bin/sh

set -e

# Remove all yarn locks
find . -type f -name "yarn.lock" -prune -exec rm -rf {} \;
# Remove packages's modules
find . -type d -name "node_modules" -prune -exec rm -rf {} \;

# Install dependencies
yarn install --silent

# Build all packages
# Build mongoose first in order to be dependency of @adminjs/import-export
yarn workspace @adminjs/mongoose build
yarn workspaces --no-progress run build
# Build AdminJS