/*
    * @desc API que retorna a hora local
    */

'use strict';

const Hapi = require('hapi');
const server = new Hapi.Server();

server.connection({port:3000, host: '0.0.0.0'});

server.route({
    method: 'GET',
    path: '/',
    handler: (request, reply) => {
        const time = {
            'time': new Date()
        };

        return reply(time)
            .code(200)
            .header('content-type','application/json');
    }
});

if (!module.parent) {
    server.start(err => {
        if (err) {
            throw err;
        }
        console.log(`Servidor online no endereço ${server.info.uri}`);
    });
}

module.exports = server;
