# project-boilerplate

My default tooling setup for new projects.

Does the following:

* Babel transpiling for JavaScript (targets last two browsers and browsers with a global usage of over 1%)
* Sass (.scss) compilation
* PostCSS (autoprefixer)
* Source maps
* Minification of images loaded with file-loader (in production only)
* Code formatting with Prettier
* Linting with ESLint

## Prettier setup

### Ways to run Prettier

1. npm script: `npm run prettier`. Runs Prettier on `.js` files in the `src` folder and automatically fixes any problems in your files. Although I haven't added one to this configuration, this would ideally be used with a
   [pre-commit hook](https://prettier.io/docs/en/precommit.html). Note that this is an optional script, as Prettier is already hooked into ESLint - see below for more details.

2. In VSCode, with the [`prettier-vscode`](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) plugin installed and this setting enabled in your Preferences: `"editor.formatOnSave": true`. Prettier will use the settings in your `.prettierrc` file and apply them every time you save a file. This method does not use the npm script, so you could safely remove it and uninstall the `prettier` dependency, if preferred. **(recommended)**

### Configuration

Prettier will read config settings from these files (in order of priority):

1. Prettier configuration file - an be a `.prettierrc` file, a `prettier.config.js` file, or a `"prettier"` file in the `package.json` file. In this project, a `.prettierrc` file is included in the root.
2. `.editorconfig` file

Or, if no Prettier configuration file exists, your editor is VSCode, and you have the [`prettier-vscode`](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) plugin installed:

1. `.editorconfig` file
2. Settings for the `prettier-vscode` plugin (located in your VSCode settings)

## ESLint setup

### Ways to run ESLint

1. npm script: `npm run lint`. Runs ESLint on `.js` files in the `src` folder and automatically fixes any problems in your files, where possible. Although I haven't added one to this configuration, this would ideally be used with a
   pre-commit hook.

2. In VSCode, with the [`vscode-eslint`](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) plugin installed. ESlint will use the settings in your `.eslintrc.js` file and highlight your code to show errors and warnings. This method does not use the npm script. I prefer to have ESLint just highlight the errors, and then use the VSCode Prettier setup to fix formatting issues on save. **(recommended)**

### Prettier integration

The ESLint configuration includes `eslint-config-prettier` and `eslint-plugin-prettier`. This means that running the npm script (`npm run lint`) will integrate your Prettier configuration with ESLint's rules, so you only need to run the `npm run lint` script.

This makes the `npm run prettier` script technically redundant, but I've included it here in case of varying project needs.

### ESLint plugins

See this repo for a list of plugins: https://github.com/dustinspecker/awesome-eslint

#### `eslint-plugin-compat`

This plugin looks at your browserslist configuration, and tells you if you're using code that won't run in any of the targeted browsers. More info: [eslint-plugin-compat](https://github.com/amilajack/eslint-plugin-compat).
