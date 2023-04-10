/* app.js */

module.exports = app => {
  app.once('server', server => {
    // websocket
    console.log('🚀 ~ file: app.js:7 ~ app.once ~ server:', server);
  });
  app.on('error', (err, ctx) => {
    // report error
    console.log('🚀 ~ file: app.js:10 ~ app.on ~ error:', err);
    console.log('🚀 ~ file: app.js:10 ~ app.on ~ ctx:', ctx);
  });
  app.on('request', ctx => {
    // log receive request
    console.log('🚀 ~ file: app.js:17 ~ request:', ctx);
  });
  app.on('response', ctx => {
    // ctx.starttime is set by framework
    const used = Date.now() - ctx.starttime;
    console.log('🚀 ~ file: app.js:21 ~ app.on ~ response:', used);
    // log total cost
  });
};
