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

    return server.inject(req)
    .then(res => {
        const d = JSON.parse(res.payload);
        const time = Date.parse(d.time);
        t.not(time, 'NaN');
    });
});
