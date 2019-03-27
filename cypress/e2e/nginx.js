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

describe('NGiNX', () => {
  itShouldPermanentlyRedirect('/contact', '/email')
  itShouldPermanentlyRedirect('/contact/', '/email')
  itShouldPermanentlyRedirect('/mail', '/email')
  itShouldPermanentlyRedirect('/mail/', '/email')

  itShouldRedirect('/blog', '/')
  itShouldRedirect('/blog/spore', '/spore')

  itShouldPermanentlyRedirect('/spore-drm/feed', '/spore-drm')
  itShouldPermanentlyRedirect('/spore-drm/feed/', '/spore-drm')

  itShouldPermanentlyRedirect('/2008/09/spore-drm', '/spore-drm')
  itShouldPermanentlyRedirect('/2008/09/spore-drm/', '/spore-drm')

  itShouldRedirect('/tag/mouse', '/')

  itShouldPermanentlyRedirect('/feed', '/feed.atom')
  itShouldPermanentlyRedirect('/feed/', '/feed.atom')

  itShouldPermanentlyRedirect('/atom.xml', '/feed.atom')
  itShouldPermanentlyRedirect('/rss.xml', '/feed.rss')

  it('/feed.atom is application/atom+xml', () => {
    cy.request({ url: '/feed.atom' }).then(resp => {
      expect(resp.status).to.eq(200)
      expect(resp.headers['content-type'].split(';')[0]).to.eq(
        'application/atom+xml'
      )
    })
  })

  it('/feed.rss is application/rss+xml', () => {
    cy.request({ url: '/feed.rss' }).then(resp => {
      expect(resp.status).to.eq(200)
      expect(resp.headers['content-type'].split(';')[0]).to.eq(
        'application/rss+xml'
      )
    })
  })
})
