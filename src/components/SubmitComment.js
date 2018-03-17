import g, { Div, Label, Input, Span, Form, Legend, Textarea } from 'glamorous'
import React from 'react'
import Helmet from 'react-helmet'
import gray from 'gray-percentage'
import { rhythm } from '../utils/typography'
import { heroColor } from '../utils/colors.js'
import StyledButton from './StyledButton.js'

// TODO: Move the reCapcha into a separate component.
// TODO: Get reCaptcha siteKey and secret from staticman.yml instead.
// TODO: Use a GraphQL Fragment

const FormOption = props => {
  const optParts = props.option.split('.')
  const name = `options[${optParts.join('][]')}]`
  return <Input name={name} value={props.value} type="hidden" />
}

const Labelled = props => {
  var requiredText = ''
  if (!props.required) {
    requiredText = (
      <Span
        css={{
          fontStyle: 'italic',
          color: heroColor.darken(0.5).string(),
        }}
      >
        (optional)
      </Span>
    )
  }

  const css = props['css'] || {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    margin: '1em 0',
  }

  const divCss = props['divCss'] || {
    display: 'inline-block',
    flex: '0 0 30%',
  }
  return (
    <Label css={css}>
      <Div css={divCss}>
        {props.label} {requiredText}
      </Div>
      {props.children}
    </Label>
  )
}

const LabelledInput = props => {
  return (
    <Labelled label={props.label} required={props.required}>
      <Input
        css={{
          flex: '0 0 70%',
        }}
        name={props.name}
        type={props.type}
        placeholder={props.placeholder}
      />
    </Labelled>
  )
}

const ReCaptcha = () => {
  return null
  const siteKey = '6LeIP0oUAAAAANRB2QX0a3ItZkkiBJsmEs9pel4P'
  const secret =
    'HxjRkHBC9KGoa7rBLWS5L6mmWcIem/aJewy+hvao4gwXNengRVD+Xgjqffkt1JSzVr20wGWc1kG6RDx8y79kUyLGfcrUDro127Hvi+U7A8gnE4snDsXeYUPTnTxR0nbUqO4PmUApmNZf54IOtOyHZHmTFdV19/dvqJopL1jhByo='
  return (
    <Div>
      <Helmet>
        <script src="https://www.google.com/recaptcha/api.js" />
      </Helmet>
      <Div className="g-recaptcha" data-sitekey={siteKey} />
      <FormOption option="reCaptcha.siteKey" value={siteKey} />
      <FormOption option="reCaptcha.secret" value={secret} />
    </Div>
  )
}

class SubmitComment extends React.Component {
  render() {
    const formUrl =
      'https://api.staticman.net/v2/entry/docwhat/docwhat/master/comments'
    const returnUrl = this.props.url
    const slug = this.props.slug
    return (
      <Form method="POST" action={formUrl} css={{}}>
        <Legend
          css={{
            fontSize: rhythm(1),
            flex: '0 0 100%',
          }}
        >
          Submit a Comment
        </Legend>
        <FormOption option="redirect" value={returnUrl} />
        <FormOption option="slug" value={slug} />

        <LabelledInput
          label="Name"
          name="fields[name]"
          type="text"
          placeholder="Joe Cool"
          required
        />

        <LabelledInput
          label="E-mail"
          name="fields[email]"
          type="email"
          placeholder="joe.cool@example.com"
          required
        />

        <LabelledInput
          label="Website"
          name="fields[url]"
          type="url"
          placeholder="http://joecool.example.com/"
        />

        <Labelled label="Message" required>
          <Textarea
            name="fields[message]"
            placeholder="I really like that the messages can be in **Markdown**."
            css={{
              flex: '0 1 70%',
              width: '100%',
              minWidth: rhythm(10),
            }}
          />
        </Labelled>

        <Labelled
          label="I want to be notified of new comments"
          divCss={{
            display: 'inline-block',
            flex: '1 0 80%',
          }}
          required
        >
          <Div
            css={{
              flex: '0 1 20%',
              textAlign: 'right',
            }}
          >
            <Input type="checkbox" name="options[subscribe]" css={{}} />
          </Div>
        </Labelled>

        <ReCaptcha />

        <Div
          css={{
            textAlign: 'right',
          }}
        >
          <StyledButton>Comment</StyledButton>
        </Div>
      </Form>
    )
  }
}

export default SubmitComment
