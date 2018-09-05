import got from 'got';
import { generatePOSTRequest } from './config';

async function doPost(config) {
  try {
    const result = await got(config.url, {
      body: JSON.stringify(config.payload),
      headers: {
        'accept': 'application/json;api-version=3.0-preview.1',
        'content-type': 'application/json'
      },
      method: 'POST'
    });
    return result.body;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function stats(itemName) {
  if (!itemName) {
    return { status: 'Fail', error: 'invalid request' };
  }

  if (!itemName.includes('.')) {
    return { status: 'Fail', error: 'invalid request' };
  }

  const config = generatePOSTRequest(itemName);
  const result: any = await doPost(config);
  const resultJSON = JSON.parse(result);
  return resultJSON.results[0].extensions[0].statistics;
}
