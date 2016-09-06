/**
 * Created by leo on 2016/7/22.
 */

const pomelo = require('pomelo');
const routeUtil = require('./app/util/routeUtil');

const app = pomelo.createApp();
app.set('name', 'gameDemo');

// app configuration
app.configure('production|development', 'connector', () => {
  app.set('connectorConfig',
    {
      connector: pomelo.connectors.hybridconnector,
      heartbeat: 3,
      useDict: true,
      useProtobuf: true,
    });
});

app.configure('production|development', 'gate', () => {
  app.set('connectorConfig',
    {
      connector: pomelo.connectors.hybridconnector,
      heartbeat: 3,
      // useProtobuf: true,
      useCrypto: false,
    });
});

app.configure('production|development', () => {
  // route configures
  app.route('chat', routeUtil.chat);

  // filter configures
  app.filter(pomelo.timeout());
});

// start app
app.start();

process.on('uncaughtException', (err) => {
  console.error(`Caught exception: ${err.stack}`);
});