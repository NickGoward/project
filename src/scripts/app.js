/**
 * Requirejs config
 */
requirejs.config({
    baseUrl: 'scripts/lib',
    paths: {
        app: '../app'
    }
});

/**
 * Main app
 */
require([
        'app/Class'
    ], function(
        Class
    ) {

    'use strict';

    console.log (new Class());

});
