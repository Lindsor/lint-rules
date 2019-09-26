#!/usr/bin/env node

'use strict';

const childProcess = require('child_process');
const { version, name } = require('../package');

const encoding = 'utf-8';

const latestVersionCommand = `npm info ${name} version`;

const pulledVersion = childProcess.execSync(
  latestVersionCommand,
  {
    encoding,
  },
)
  .trim();

if (pulledVersion === version) {
  console.error('Cant publish the same version again.');
  process.exit(1);
  return;
}

// Commit any unstaged changes after generating readme
childProcess.execSync(
  `git add --all || git commit -m "chore(publish) Publish App ${version}"`,
  {
    encoding,
  },
);
