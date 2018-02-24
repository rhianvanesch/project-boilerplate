# project-boilerplate

My default tooling setup for new projects.

Does the following:

* Babel transpiling for JavaScript - uses the [browserslist](https://github.com/ai/browserslist) string "last 2 versions, > 1%" to target [these browsers](http://browserl.ist/?q=last+2+versions%2C+%3E+1%25)
* Sass to CSS compilation
* Automatic vendor prefixing with PostCSS - also uses the browserslist configuration to target [these browsers](http://browserl.ist/?q=last+2+versions%2C+%3E+1%25)
* Creates source maps for your JS and CSS files
* Automatic image minification - uses webpack's `file-loader` to minify images mentioned in your CSS/JS files (in production only)
* Linting of JavaScript files with ESLint
* Code formatting with Prettier (integrated into ESLint)

---

## ESLint setup

The ESLint config file is `./.eslintrc.js`.

### Running ESLint

#### Command line

Use the npm script: `npm run lint`. Runs ESLint on `.js` files in the `src` folder and automatically fixes any linting errors in your files, where possible. If fixes are not possible, the errors will be shown in the console for you to fix manually. Although I haven't added one to this configuration, this would ideally be used with a pre-commit hook.

#### VSCode plugin (recommended)

Install the [`vscode-eslint`](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) plugin. It will use the settings in your `.eslintrc.js` file and highlight your code to show linting errors and warnings.

There are further plugin options that will allow ESLint to fix linting errors automatically - please see the plugin page. I personally prefer to have ESLint just highlight the errors, and then use the VSCode Prettier plugin to fix formatting issues on save.

### Prettier integration

The ESLint configuration includes the plugins `eslint-config-prettier` and `eslint-plugin-prettier`. This integrates your Prettier configuration with ESLint's rules, so you only need to run the `npm run lint` script to detect (and fix, where possible) both Prettier and ESLint errors.

### ESLint plugins

See this repo for a list of other plugins you could use: https://github.com/dustinspecker/awesome-eslint

#### `eslint-plugin-compat`

This plugin looks at your [browserslist](https://github.com/ai/browserslist) configuration (located at `./.browserslistrc`), and tells you if you're using code that won't run in any of the targeted browsers. More info: [eslint-plugin-compat](https://github.com/amilajack/eslint-plugin-compat).

---

## Prettier setup

The Prettier config file is `./.prettierrc`. Note that if this file is not present, Prettier will look for a `.editorconfig` file. If it can't find either of these and you're using the VSCode plugin, it'll look in your VSCode settings file for Prettier-relevant configuration.

### Running Prettier

#### Command line

Prettier is integrated into ESLint (see the "Prettier integration" section above), so you just need to run the `npm run lint` script to have ESLint check your files and attempt to fix any linting or code formatting issues.

#### VSCode plugin (recommended)

Install the [`prettier-vscode`](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) plugin and enable this setting in your Preferences: `"editor.formatOnSave": true`. The plugin will use the settings in your `.prettierrc` file to check your files for code formatting errors, and will automatically fix any errors when you save a file.
