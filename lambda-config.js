module.exports = {
  region: 'us-east-1',
  handler: 'index.default',
  role: process.env.ARN_LAMDA_BASIC,
  timeout: 10,
  memorySize: 128,
  publish: false, // default: false,
  runtime: 'nodejs8.10'
};
