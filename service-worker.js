console.log('hwll');
importScripts('node_modules/sw-toolbox/sw-toolbox.js');

toolbox.precache([
    'companion.js',
    'main.js',
    'index.html',
]);

toolbox.router.default = toolbox.networkFirst;
toolbox.options.networkTimeoutSeconds = 5;

toolbox.router.get('icons/*', toolbox.fastest);
