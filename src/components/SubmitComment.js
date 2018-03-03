import React from 'react'
import Helmet from 'react-helmet'

// TODO: Move the reCapcha into a separate component.
// TODO: Get reCaptcha siteKey and secret from staticman.yml instead.

class SubmitComment extends React.Component {
  render() {
    const formUrl = "https://api.staticman.net/v2/entry/docwhat/docwhat/master/comments"
    const returnUrl = this.props.url
    const slug = this.props.slug
    return (
      <div>
        <Helmet>
          <script src="https://www.google.com/recaptcha/api.js"></script>
        </Helmet>
        <form method="POST" action={formUrl} style={{
          border: '1px solid green'
        }}>
          <input name="options[redirect]" type="hidden" value={returnUrl} />
          <input name="options[slug]" type="hidden" value={slug} />

          <label style={{ display: 'block' }} >
            <input name="fields[name]" type="text" placeholder="Joe Cool" />Name
          </label>

          <label style={{ display: 'block' }} >
            <input name="fields[email]" type="email" placeholder="joecool@example.com" />E-mail
          </label>

          <label style={{ display: 'block' }} >
            <input name="fields[url]" type="url" placeholder="http://joecool.example.com/" />Website (optional)
          </label>

          <label style={{ display: 'block' }} >
            <textarea name="fields[message]" placeholder="I really like that the messages can be in **Markdown**." >
            </textarea>Message
          </label>

          <label style={{ display: 'block' }} >
            <input type="checkbox" name="options[subscribe]" value="email" className="checkbox" />
            I want to be notified of new comments
          </label>

          <div className="g-recaptcha" data-sitekey="6LeIP0oUAAAAANRB2QX0a3ItZkkiBJsmEs9pel4P"></div>
          <input type="hidden" name="options[reCaptcha][siteKey]" value="6LeIP0oUAAAAANRB2QX0a3ItZkkiBJsmEs9pel4P" />
          <input type="hidden" name="options[reCaptcha][secret]"  value="HxjRkHBC9KGoa7rBLWS5L6mmWcIem/aJewy+hvao4gwXNengRVD+Xgjqffkt1JSzVr20wGWc1kG6RDx8y79kUyLGfcrUDro127Hvi+U7A8gnE4snDsXeYUPTnTxR0nbUqO4PmUApmNZf54IOtOyHZHmTFdV19/dvqJopL1jhByo=" />

          <button type="submit">Post</button>
        </form>
      </div>
    )
  }

}

export default SubmitComment
