const fastify = require('fastify')({ 
  logger: true,
 });

// fastify.register(require('./routes'))

fastify.register(require('fastify-knexjs'), options, (err) =>
  console.error(err)
);

fastify.get('/', (request, reply) => {
  console.log(fastify.knex); // Knex DB instance
});

fastify.listen({ port: 3000 }, (err, address) => {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }

  console.log(`Server is now listening on ${address}`)
})