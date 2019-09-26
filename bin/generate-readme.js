#!/usr/bin/env node

'use strict';

const { name, version, peerDependencies, license, main } = require('../package');
const { readdir, readFile, writeFile } = require('fs').promises;
const { resolve, extname } = require('path');

// Use package.json .main property to indicate config directory
const rootPath = resolve(__dirname, '..');
const configsPath = resolve(__dirname, '..', main);
const readmePath = resolve(rootPath, 'README.md');
const encoding = 'utf-8';

// Mapping for known extensions to code type
const extensionToCodeType = {
  json: [
    '.json',
  ],
  javascript: [
    '.js',
  ],
};

/**
 * Gets the associated codeType to the passed in extension.
 * This does a lookup on the extensionToCodeType mapper object.
 */
const getCodeType = extension => {
  return Object.keys(extensionToCodeType)
    .find(codeType => {
      return extensionToCodeType[codeType].includes(extension);
    }) || '';
};

/**
 * Transforms the given name into a Pretty String.
 */
const transformName = name => name
  .split('/')[1]
  .split('-')
  .map(namePart => {
    return `${namePart.charAt(0).toUpperCase()}${namePart.slice(1)}`;
  })
  .join(' ');

/**
 * Adds spaces in the file, this is used for formatting.
 */
const spacer = num => [''];

readdir(configsPath)
  .then(files => {

    return Promise.all(
      files
        .map(fileName => {
          return readFile(resolve(configsPath, fileName), encoding)
            .then(content => {
              return {
                fileName,
                content,
              };
            });
        })
    )
      .then((allFiles) => {

        const markdown = [
          `# ${transformName(name)} #`,
          ...spacer(3),

          `## Package Info: ##`,
          `- Name: \`${name}\``,
          `- Version: \`${version}\``,
          `- License: \`${license}\``,
          ...spacer(2),

          `## Installing: ##`,
          `\`npm install -D ${name}\``,
          ...spacer(2),

          `### Peer Dependencies: ###`,
          `Depending on the config file you are using you will need to install peerDependencies`,
          `Install with \`npm install -D <peerDependency>\` if needed.`,
          `The full list of potential peerDependencies is:`,
          `\`\`\`json`,
          JSON.stringify(peerDependencies, undefined, 2),
          `\`\`\``,
          ...spacer(2),

          `## Lint Config Files: ##`,
          ...spacer(2),
        ];

        // Add all of the individual file contents into the readme copy.
        allFiles.forEach(({ fileName, content }) => {
          markdown.push(`### ${fileName} ###`);
          markdown.push( `\`\`\`${getCodeType(extname(fileName))}`);
          markdown.push(content);
          markdown.push('```');
          markdown.push(...spacer(2));
        });

        return markdown;
      })
      .then((markdown) => {
        return writeFile(
          readmePath,
          markdown.join('\n'),
          encoding,
        );
      });
  });
