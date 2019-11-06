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
  const result = await doPost(config);
  const resultJSON = JSON.parse(result);
  /** Not required anymore */
  // const installs = resultJSON.results[0].extensions[0].statistics.find((s) => s.statisticName === 'install');
  // const updateCount = resultJSON.results[0].extensions[0].statistics.find((s) => s.statisticName === 'updateCount');
  // // calculate the right install count
  // if (installs && updateCount) {
  //   installs.value = installs.value + updateCount.value;
  // }

  resultJSON.results[0].extensions[0].statistics.unshift({
    statisticName: 'version',
    value: resultJSON.results[0].extensions[0].versions[0].version
  });
  return resultJSON.results[0].extensions[0].statistics;
}
