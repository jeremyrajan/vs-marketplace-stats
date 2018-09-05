import { Handler } from 'aws-lambda';
import boom from 'boom';
import got from 'got';
import { stats } from './lib/handler';

// event.queryStringParameters
// event.pathParameters

const func: Handler = async (event, context, callback) => {
  const done = (err, res, notJSON = false) => callback(null, {
    body: err ? (err.message ? err.message : err) : (notJSON ? res : JSON.stringify(res)),
    headers: {
      'Content-Type': notJSON ? 'image/svg+xml;charset=utf-8' : 'application/json',
    },
    statusCode: err ? '400' : '200',
  });
  try {
    const result = await stats(event.queryStringParameters.itemName);
    const property = result.find((f) => typeof event.queryStringParameters[f.statisticName] !== 'undefined');
    // if property exists
    if (property) {
      // if badge
      if (typeof event.queryStringParameters.badge !== 'undefined') {
        const url: any = `https://img.shields.io/badge/installs-${property.value}-brightgreen.svg`;
        const response = await got(url);
        return done(null, response.body, true);
      }
      return done(null, property);
    }
    // return full result
    done(null, { result });
  } catch (error) {
    console.error(error);
    return done(boom.badGateway(), null);
  }
};

export default func;
