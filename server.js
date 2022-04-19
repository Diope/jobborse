const PORT = process.env.PORT || 5000;
const server = require('./src/index')({
  logger: {
    level: 'info',
    prettyPrint: true
  }
});

const start = async () => {
  try {
    await server.listen(PORT)
  } catch (error) {
    server.log.error(error);
    process.exit(1);
  }
}

start();