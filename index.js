/*
    * @desc API que retorna a hora local
    */

'use strict';

const Hapi = require('hapi');
const server = new Hapi.Server();

server.connection({port:3000, host: '0.0.0.0'});

if (!module.parent) {
    server.start(err => {
        if (err) {
            throw err;
        }
        console.log(`Servidor online no endereço ${server.info.uri}`);
    });
}

module.exports = server;
