export function generatePOSTRequest(itemName) {
  return {
    payload: {
      filters: [
        {
          criteria: [
            {
              filterType: 7,
              value: itemName // jeremyrajan.webpack
            },
            {
              filterType: 12,
              value: '4096'
            }
          ]
        }
      ],
      flags: 914,
    },
    type: 'POST',
    url: 'https://marketplace.visualstudio.com/_apis/public/gallery/extensionquery',
  };
}
