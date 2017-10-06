/**
 * A class
 * @module app/Class
 */
 define('app/Class', function() {
    'use strict';

    /**
     * Create a new thing.
     * @class
     * @alias module:app/Class
     */
    var Class = function () {

    };

    /**
     * Does something
     * @param {param} type - my param
     * @return {string} - the result
     */
    Class.prototype.method = function(param) {
       
        return param;
    };

    return Class;
});
