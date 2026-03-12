const vtexAccount = process.env.FASTSTORE_ACCOUNT || 'storeframework'

const vtexWorkspace = process.env.VTEX_WORKSPACE || 'master'
const vtexEnv = process.env.VTEX_ENV || 'stable'
const vtexApiEnvironment =
  vtexEnv === 'stable' ? 'vtexcommercestable' : vtexEnv

const siteHost = process.env.SITE_HOST || 'homebrewqa.fast.store'
const storeUrl = `https://${siteHost}`

module.exports = {
  seo: {
    title: 'Signature Parts',
    description: 'Repuestos premium para Mercedes-Benz y BMW',
    titleTemplate: '%s | Signature Parts',
    author: 'Signature Parts',
  },

  // Theming
  theme: 'custom-theme',

  // Ecommerce Platform
  platform: 'vtex',

  // Platform specific configs for API
  api: {
    storeId: vtexAccount,
    workspace: vtexWorkspace,
    environment: vtexApiEnvironment,
    hideUnavailableItems: true,
    incrementAddress: false,
  },

  // Default session
  session: {
    currency: {
      code: 'BRL',
      symbol: 'R$',
    },
    locale: 'pt-BR',
    channel: '{"salesChannel":"1","regionId":""}',
    country: 'BRA',
    deliveryMode: null,
    addressType: null,
    postalCode: null,
    geoCoordinates: null,
    person: null,
  },

  cart: {
    id: '',
    items: [],
    messages: [],
    shouldSplitItem: true,
  },

  // Production URLs
  storeUrl,
  secureSubdomain: storeUrl,
  checkoutUrl: `${storeUrl}/checkout`,
  loginUrl: `${storeUrl}/api/io/login`,
  accountUrl: `${storeUrl}/api/io/account`,

  previewRedirects: {
    home: '/',
    plp: '/headphones',
    search: '/s?q=repuestos',
    pdp: '/headphone-white-10000006/p',
  },

  // Lighthouse CI
  lighthouse: {
    server: process.env.BASE_SITE_URL || 'http://localhost:3000',
    pages: {
      home: '/',
      pdp: '/headphone-white-10000006/p',
      collection: '/headphones',
    },
  },

  // E2E CI
  cypress: {
    pages: {
      home: '/',
      pdp: '/headphone-white-10000006/p',
      collection: '/headphones',
      collection_filtered:
        '/headphones?category-1=headphones&fuzzy=0&operator=and&facets=category-1%2Cfuzzy%2Coperator&sort=score_desc&page=0',
      search: '/s?q=repuestos',
    },
    browser: 'electron',
  },

  analytics: {
    // https://developers.google.com/tag-platform/tag-manager/web#standard_web_page_installation
    gtmContainerId: 'GTM-1234567',
  },

  experimental: {
    nodeVersion: 18,
    cypressVersion: 12,
    enableFaststoreMyAccount: false,
  },

  vtexHeadlessCms: {
    webhookUrls: [`https://${vtexAccount}.myvtex.com/cms-releases/webhook-releases`],
  },
}
