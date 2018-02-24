# webpack-default

My current Webpack setup.

Does the following:

* Babel transpiling for JavaScript (targets last two browsers and browsers with a global usage of over 1%)
* Sass (.scss) compilation
* PostCSS (autoprefixer)
* Source maps
* Minification of images loaded with file-loader (in production only)
* Code formatting with Prettier

## Prettier setup

### Ways to run Prettier

1. npm script: `npm run prettier`. Although I haven't added one to this configuration, this would ideally be used with a
[pre-commit hook](https://prettier.io/docs/en/precommit.html).
2. In VSCode, with the [`prettier-vscode`](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) plugin installed and this setting enabled in your Preferences: `"editor.formatOnSave": true`. Prettier will use the settings in your `.prettierrc` file and apply them every time you save a file. This method does not use the npm script, so you could safely remove it and uninstall the `prettier` dependency, if preferred. **(recommended)**

### Configuration

Prettier will read config settings from these files (in order of priority):

1. Prettier configuration file - an be a `.prettierrc` file, a `prettier.config.js` file, or a `"prettier"` file in the `package.json` file. In this project, a `.prettierrc` file is included in the root.
2. `.editorconfig` file

Or, if no Prettier configuration file exists, your editor is VSCode, and you have the [`prettier-vscode`](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) plugin installed:

1. `.editorconfig` file
2. Settings for the `prettier-vscode` plugin (located in your VSCode settings)
