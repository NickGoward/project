define([
    'chai',
    'app/Class'
], function(
    chai,
    Class
) {

    'use strict';

    var expect = chai.expect;
    var instance;

    describe('Class', function() {

        beforeEach(function() {
            instance = new Class();
        });

        afterEach(function() {

        });

        describe('.method', function() {
           
            it('should do something', function() {
                expect(true).to.be.true;
            });

        });

    });

});