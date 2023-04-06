#!/bin/bash
magenta=`tput setaf 5`
reset=`tput sgr0`

echo "${magenta}----- INSTALLATIONS -------${reset}"

echo "INSTALL GATSBY"
npm install -g gatsby-cli@4.23.0 || { echo "FATAL: Could not install Gatsby Command Line Tools"; exit 1; }
echo "INSTALL GATSBY COMPLETE"

echo "INSTALLING APPLICATION DEPENDENCIES"
npm install --force || { echo "npm install failed"; exit 1; }
echo "APPLICATION DEPENDENCIES INSTALLED"

echo "${magenta}----- BUILD -------${reset}"
npm run clean
npm run build

echo "${magenta}----- DEPLOYMENT -------${reset}"
npm run deploy
