async function routes (fastify, options) {
  fastify.get('/', async (req, res) => {
    return { hello: 'world' };
  });

  fastify.get('/users', async (req, res) => {
    req.log.info(res);
  });

  fastify.get('/:params', async (req, res) => {
    console.log(req.body)
    console.log(req.query)
    console.log(req.params)
    console.log(req.headers)
    console.log(req.raw)
    console.log(req.server)
    console.log(req.id)
    console.log(req.ip)
    console.log(req.ips)
    console.log(req.hostname)
    console.log(req.protocol)
    console.log(req.url)
    console.log(req.routerMethod)
    console.log(req.routeOptions.bodyLimit)
    console.log(req.routeOptions.method)
    console.log(req.routeOptions.url)
    console.log(req.routeOptions.attachValidation)
    console.log(req.routeOptions.logLevel)
    console.log(req.routeOptions.version)
    console.log(req.routeOptions.exposeHeadRoute)
    console.log(req.routeOptions.prefixTrailingSlash)
    console.log(req.routerPath.logLevel)
    req.log.info('some info')
  });
};

module.exports = routes;