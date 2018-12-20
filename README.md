## create-cli-tool

A tool for quickly scaffolding a node CLI tool.

#### Getting starated

To run it:

```
npm install -g create-cli-tool
create-cli-tool <project name>
npm link
```

After running `npm link`, you will be able to run it your shell with:

```
<project name>
```

#### Directory structure

It will result in a directory structure like this:

```
project-name/
├── bin/
│   └── main
├── src/
│   └── index.js
└── package.json/
```