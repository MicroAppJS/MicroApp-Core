'use strict';

/* global expect */

const BaseAPI = require('./BaseAPI');

describe('BaseAPI', () => {

    it('new constructor', () => {
        const base = new BaseAPI();
        expect(base.logger).not.toBeNull();
        expect(base.logger).not.toBeUndefined();

        expect(base.API_TYPE).not.toBeNull();
        expect(base.API_TYPE).not.toBeUndefined();

        expect(Object.keys(base.API_TYPE)).toContain('ADD');
        expect(Object.keys(base.API_TYPE)).toContain('MODIFY');
        expect(Object.keys(base.API_TYPE)).toContain('EVENT');
    });

});
