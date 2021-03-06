import * as f from '@kuba/f'

export default f.once((breadcrumb) =>
  ({
    '@id': '#breadcrumb',
    '@type': 'BreadcrumbList',
    'itemListElement': f.map(breadcrumb.paths, (path, i) => ({
      '@type': 'ListItem',
      item: f.add(__settings.app.url, path.url),
      name: path.title,
      position: f.inc(i)
    }))
  })
)
