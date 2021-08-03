export default {
  methods: {
    getHeadData: seo => {
      if (seo === null) {
        seo = {
          og: {
            image: {},
          },
        }
      }
      return {
        title: seo.title,
        meta: [
          {
            hid: 'robots',
            name: 'robots',
            content: seo.robots ? 'index, follow' : 'noindex, nofollow',
          },
          {
            hid: 'description',
            name: 'description',
            content: seo.description,
          },
          {
            hid: 'og:locale',
            name: 'og:locale',
            content: 'ru_RU',
          },
          {
            hid: 'og:type',
            name: 'og:type',
            content: 'article',
          },
          {
            hid: 'og:site_name',
            name: 'og:site_name',
            content: 'EdVisor',
          },
          {
            hid: 'og:url',
            name: 'og:url',
            content: seo.og.url,
          },
          {
            hid: 'article:modified_time',
            name: 'article:modified_time',
            content:
              seo.modifiedTime === ''
                ? '0000-00-00T00:00:00+00:00'
                : seo.modifiedTime,
          },
          {
            hid: 'og:image',
            name: 'og:image',
            content: seo.og.image.path === '' ? '' : seo.og.image.path,
          },
          {
            hid: 'og:image:width',
            name: 'og:image:width',
            content: seo.og.image.width === '' ? 0 : seo.og.image.width,
          },
          {
            hid: 'og:image:height',
            name: 'og:image:height',
            content: seo.og.image.height === '' ? 0 : seo.og.image.height,
          },
          {
            hid: 'og:description',
            name: 'og:description',
            content:
              seo.og.description === '' ? seo.og.description : seo.description,
          },
          {
            hid: 'og:title',
            name: 'og:title',
            content: seo.og.title === '' ? seo.title : seo.og.title,
          },
          {
            hid: 'twitter:card',
            name: 'twitter:card',
            content: 'summary_large_image',
          },
          {
            hid: 'twitter:site',
            name: 'twitter:site',
            content: '',
          },
          {
            hid: 'twitter:title',
            name: 'twitter:title',
            content: seo.og.title === '' ? seo.title : seo.og.title,
          },
          {
            hid: 'twitter:description',
            name: 'twitter:description',
            content:
              seo.og.description === '' ? seo.description : seo.og.description,
          },
        ],
      }
    },
    getSeoData: (seo, url) => {
      seo.og.url = process.env.baseUrl + url
      return seo
    },
  },
}
