#!/usr/bin/env node

'use strict';

const { main } = require('../package');
const { readdir } = require('fs').promises;
const { resolve } = require('path');

// Use package.json .main property to indicate config directory
const rootPath = resolve(__dirname, '..', main);

readdir(rootPath)
  .then(files => files.forEach(file => {

    // Import each file since they should all be js modules / json files.
    // If any fail the test fails.
    require(resolve(rootPath, file));
  }))
  .then(() => {
    console.log('All tests passed.');
  })
