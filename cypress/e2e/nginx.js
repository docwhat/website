const itShouldPermanentlyRedirect = (initialPath, finalPath) =>
  it(`permanently redirects ${initialPath} to ${finalPath}`, () =>
    cy
      .request({
        url: initialPath,
        followRedirect: false, // turn off following redirects
      })
      .then(resp => {
        expect(resp.status).to.eq(301)
        expect(resp.redirectedToUrl).to.eq(`http://localhost${finalPath}`)
      }))

const itShouldRedirect = (initialPath, finalPath) =>
  it(`redirects ${initialPath} to ${finalPath}`, () =>
    cy
      .request({
        url: initialPath,
        followRedirect: false, // turn off following redirects
      })
      .then(resp => {
        expect(resp.status).to.eq(302)
        expect(resp.redirectedToUrl).to.eq(`http://localhost${finalPath}`)
      }))

const itShouldReturnHttpStatus = (path, httpStatus = 200) =>
  it(`${path} returns HTTP ${httpStatus}`, () =>
    cy.request({ url: path }).then(resp => {
      expect(resp.status).to.eq(200)
    }))

const itShouldBeMimeType = (path, mimeType) =>
  it(`${path} is MIME type ${mimeType}`, () =>
    cy.request({ url: path }).then(resp => {
      expect(resp.headers['content-type']).to.include(mimeType)
    }))

const itShouldBeUtf8 = path =>
  it(`${path} is utf-8`, () => {
    cy.request({ url: path }).then(resp => {
      expect(resp.headers['content-type']).to.include('charset=utf-8')
    })
  })

describe('NGiNX', () => {
  itShouldPermanentlyRedirect('/contact', '/email')
  itShouldPermanentlyRedirect('/contact/', '/email')
  itShouldPermanentlyRedirect('/mail', '/email')
  itShouldPermanentlyRedirect('/mail/', '/email')

  itShouldRedirect('/blog', '/')
  itShouldRedirect('/blog/', '/')
  itShouldRedirect('/blog/spore', '/spore')

  itShouldRedirect('/reward', '/')
  itShouldRedirect('/reward/', '/')

  itShouldPermanentlyRedirect('/spore-drm/feed', '/spore-drm')
  itShouldPermanentlyRedirect('/spore-drm/feed/', '/spore-drm')

  itShouldPermanentlyRedirect('/2008/09/spore-drm', '/spore-drm')
  itShouldPermanentlyRedirect('/2008/09/spore-drm/', '/spore-drm')

  itShouldRedirect('/tag/mouse', '/')

  itShouldPermanentlyRedirect('/feed', '/feed.atom')
  itShouldPermanentlyRedirect('/feed/', '/feed.atom')

  itShouldPermanentlyRedirect('/atom.xml', '/feed.atom')
  itShouldPermanentlyRedirect('/rss.xml', '/feed.rss')

  itShouldReturnHttpStatus('/')
  itShouldReturnHttpStatus('/feed.atom')
  itShouldReturnHttpStatus('/feed.rss')
  itShouldReturnHttpStatus('/feed.json')

  itShouldBeMimeType('/', 'text/html')
  itShouldBeMimeType('/feed.atom', 'application/atom+xml')
  itShouldBeMimeType('/feed.rss', 'application/rss+xml')
  itShouldBeMimeType('/feed.json', 'application/json')

  itShouldBeUtf8('/')
  itShouldBeUtf8('/feed.atom')
  itShouldBeUtf8('/feed.rss')
  itShouldBeUtf8('/feed.json')
})
