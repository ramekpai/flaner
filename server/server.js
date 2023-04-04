const { development } = require('./knexfile');
const signUp = require('./api/oauth/signup');

const fastify = require('fastify')({ 
  logger: true,
 });

fastify.listen({ port: 3000 }, (err, address) => {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }

  console.log(`Server is now listening on ${address}`)
})

fastify.register(require('fastify-knexjs'), development, (err) =>
  console.error(err)
);

fastify.get('/', async (request, reply) => {
const response = await signUp(fastify.knex);
  // Knex DB instance
  console.log({ response });
});