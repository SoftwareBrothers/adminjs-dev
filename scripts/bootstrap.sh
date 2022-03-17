#!/bin/bash

set -e # Exit as soon as any line in the bash script fails

# Colors for error/success messages
GREEN="\033[0;32m"
YELLOW="\033[0;33m"
BLUE="\033[0;34m"
NO_COLOR="\033[0m" # No color

cd $(dirname "$0")/..

# TODO Convert to node script to handle Windows env
if [ ! -d "node_modules" ]; then
  # Remove all yarn locks
  find . -type f -name 'yarn.lock' -not -path "*/node_modules/*" -exec sh -c 'x="{}"; mv "$x" "${x}_"' \;
  # Remove packages's modules
  find . -type d -name "node_modules" -prune -exec rm -rf {} \;

  # Install dependenices
  echo -e "${BLUE}Installing dependencies...${NO_COLOR}"
  yarn install --silent

  # Restore all yarn locks
  find . -type f -name 'yarn.lock_' -not -path "*/node_modules/*" -exec sh -c 'f="{}"; mv "$f" "${f%_*}"' \;

  echo -e "${GREEN}Installing dependencies finished${NO_COLOR}"
else
  echo -e "${BLUE}Skipped installing dependencies${NO_COLOR}"
fi

# Build AdminJS types first
echo -e "${BLUE}Building AdminJS example app deps...${NO_COLOR}"
yarn workspace @adminjs/design-system build
yarn workspace adminjs types
yarn workspace @adminjs/mongoose build

# Build all packages
echo -e "${BLUE}Building packages...${NO_COLOR}"
yarn workspaces --no-progress run build

# Build AdminJS
echo -e "${BLUE}Building AdminJS...${NO_COLOR}"
yarn workspace adminjs bundle:globals
yarn workspace adminjs build

# Bundle AdminJS design system
echo -e "${BLUE}Building AdminJS design system...${NO_COLOR}"
yarn workspace @adminjs/design-system bundle

# Build AdminJS example app
echo -e "${BLUE}Setting up example app...${NO_COLOR}"
yarn workspace example docker:up
yarn workspace example migration:up

echo -e "${GREEN}Success! All AdminJS bootstrapped.${NO_COLOR}"
