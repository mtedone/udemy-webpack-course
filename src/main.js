require('./main.css');
require('./index.html');
require('webpack-hot-middleware/client?reload=true');

var a = async (args) => {
  const { a, b } = args;
  await console.log('Hello from the future', a, b);
};

a({ a: 'Hello', b: 'World' });
