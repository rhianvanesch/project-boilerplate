const secondaryModule = "This is the secondary module";

console.log(secondaryModule); // eslint-disable-line no-console

navigator.serviceWorker; // This line should trigger a warning in ESLint, due to eslint-plugin-compat
