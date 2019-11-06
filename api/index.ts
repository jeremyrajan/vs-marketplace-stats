import { NowRequest, NowResponse } from '@now/node';
import got from 'got';
import { stats } from './_utils/handler';

export default async (req: NowRequest, res: NowResponse) => {
  try {
    if (!req.query.itemName) {
      throw Error('No ext defined');
    }

    const result = await stats(req.query.itemName);
    const property = result.find((f) => typeof req.query[f.statisticName] !== 'undefined');

    if (req.url && req.url.includes('badge.svg')) {
      if (property) {
        const propertyName = property.statisticName.toLowerCase();
        const url = `https://img.shields.io/badge/${propertyName}-${property.value}-brightgreen.svg`;
        const response = await got(url);
        res.setHeader('Content-Type', 'image/svg+xml;charset=utf-8');
        return res.status(200).end(response.body);
      } else {
        throw Error('No valid property defined');
      }
    }

    if (property) {
      return res.json(property);
    }

    res.json(result);

  } catch (error) {
    console.error(error);
    return res.status(400).json({ status: error.message, url: req.url });
  }
};
