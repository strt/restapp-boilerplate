# restapp-boilerplate

Boilerplate code for a simple RESTApp

## Setup

- `git clone https://github.com/strt/restapp-boilerplate.git`
- `cd restapp-boilerplate`
- `npm install`
- `npm run setup`

## Building

Uses [sitevision-scripts](https://github.com/strt/sitevision-scripts) under the hood.

- `npm run create-addon` create an addon with the name configured in the setup task
- `npm run build` builds `/src` into `/dist`
- `npm run deploy` builds `/src` into `/dist` and upload to the addon configured in the setup task
- `npm run sign` compress `/src` into `/dist` and invoke the signing endpoint of the SiteVision developer REST API. A signed version of the RESTApp will be created in the `/dist` folder

[Visit developer.sitevision.se for more information](https://developer.sitevision.se)
