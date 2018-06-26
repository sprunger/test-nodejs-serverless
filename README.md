[![Build Status](https://travis-ci.org/sprunger/starter-nodejs-serverless.svg?branch=master)](https://travis-ci.org/sprunger/starter-nodejs-serverless)
[![Coverage Status](https://coveralls.io/repos/github/sprunger/starter-nodejs-serverless/badge.svg?branch=master)](https://coveralls.io/github/sprunger/starter-nodejs-serverless?branch=master)
# starter-nodejs-serverless
A starter project for Serverless Nodejs

I wanted to walk through what was needed to get a development environment setup and tested using the Serverless Framework.
I also wanted to have an isolated environment, like I'm used to with Ruby and RVM.  The only thing that I installed global was NVM.

Couple of things of note...

* Used `direnv` to update PATH environment variable to include node_modules/.bin.  
Also use ZSH plugin to autoload .envrc when present.
* Installed Serverless locally, not global, so that it's isolated for each project
* Basic eslint configuration
* Testing and linting
* Travis CI


