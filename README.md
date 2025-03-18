# Flow Launcher Case Converter Plugin

A plugin for Flow Launcher that converts text between different case formats.

## Features

-    Supports multiple case conversions:
     -    Title Case
     -    lowercase
     -    UPPERCASE
     -    camelCase
     -    PascalCase
     -    snake_case
     -    kebab-case
     -    MACRO_CASE

## Installation

1. Download the latest release
2. Extract to Flow Launcher's plugin directory
3. Restart Flow Launcher

## Usage

1. Type `case` followed by your text in Flow Launcher
2. Select desired case format from the results
3. Click to copy the converted text to clipboard

Example:

```
case hello world
```

Will show all case variations:

-    Hello World
-    hello world
-    HELLO WORLD
-    helloWorld
-    HelloWorld
-    hello_world
-    hello-world
-    HELLO_WORLD

## Dependencies

-    Node.js
-    copy-paste
-    open

## Development

This plugin is built using Node.js. The required modules are included in the node_modules folder, built automatically by GitHub workflow during release publish.

## License

ISC

## Author

Ganesh GFX
