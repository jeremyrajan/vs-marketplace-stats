# VSCode Extension Stats + Badge

VSCode extension install stats + shields.io badge generator for stats.

> Please make sure that you use a fully qualified name. Eg: `jeremyrajan.webpack`.

### Install Stats
URL: `https://vsmarketplacebadge.jeremyrajan.com/v1/VSMarketplaceBadge?itemName=<ext_name>`

![image](https://user-images.githubusercontent.com/2890683/45105414-c71ac100-b166-11e8-979c-5f23e7b8bc32.png)

> Replace `jeremyrajan.webpack` with your favorite ext.

## Badge Generator for Stats
URL: https://vsmarketplacebadge.jeremyrajan.com/v1/VSMarketplaceBadge/badge.svg?itemName=<ext_name>&install

![image](https://user-images.githubusercontent.com/2890683/45105501-f6313280-b166-11e8-81ac-2c45538d8483.png)


> Please note that you can get the badge stats according to the property. Supported properties are listed below.

## Get stats for Property
URL: `https://vsmarketplacebadge.jeremyrajan.com/v1/VSMarketplaceBadge?itemName=<ext_name>&averagerating`

![image](https://user-images.githubusercontent.com/2890683/45105707-6c359980-b167-11e8-81a7-26d1098119f0.png)


Following properties are supported now:
* install
* averagerating
* ratingcount
* trendingdaily
* trendingmonthly
* trendingweekly
* updateCount

## Infra
Currently running on AWS API Gateway + Lambda

## Development
Clone the repo, `npm install` and `npm start`.
