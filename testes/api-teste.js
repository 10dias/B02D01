/**
  * @desc Testes da API
  */

'use strict';

const teste = require('ava');
const server = require('../index');


teste('teste de endpoint | GET /', t => {
    const req = {
        method: 'GET',
        url: '/'
    };

    return server.inject(req, res => {
        const d = res.payload.time;
        t.not(typeof(d), 'NaN');
    });
});
