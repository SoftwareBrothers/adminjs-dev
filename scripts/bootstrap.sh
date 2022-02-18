#!/bin/bash

set -e # Exit as soon as any line in the bash script fails

# Colors for error/success messages
GREEN="\033[0;32m"
YELLOW="\033[0;33m"
NO_COLOR="\033[0m" # No color

cd $(dirname "$0")/..

# Remove all yarn locks
find . -type f -name 'yarn.lock' -not -path "*/node_modules/*" -exec sh -c 'x="{}"; mv "$x" "${x}_"' \;
# Remove packages's modules
find . -type d -name "node_modules" -prune -exec rm -rf {} \;

# Install dependenices
echo -e "${YELLOW}Installing dependencies...${NO_COLOR}"
yarn install --silent

# Build all packages
echo -e "${YELLOW}Building packages...${NO_COLOR}"
# Build AdminJS types first
yarn workspace @adminjs/design-system build
yarn workspace adminjs types
yarn workspaces --no-progress run build

# Build AdminJS
echo -e "${YELLOW}Building AdminJS...${NO_COLOR}"
yarn workspace adminjs bundle:globals
yarn workspace adminjs build

# Restore all yarn locks
find . -type f -name 'yarn.lock_' -not -path "*/node_modules/*" -exec sh -c 'f="{}"; mv "$f" "${f%_*}"' \;

echo -e "${GREEN}Success! All AdminJS bootstrapped.${NO_COLOR}"
