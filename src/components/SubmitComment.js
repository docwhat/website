import React from 'react'
import Helmet from 'react-helmet'
import gray from 'gray-percentage'
import { rhythm } from '../utils/typography'
import { heroColor } from '../utils/colors.js'
import PrimaryButton from './PrimaryButton.js'

// TODO: Move the reCapcha into a separate component.
// TODO: Get reCaptcha siteKey and secret from staticman.yml instead.
// TODO: Use a GraphQL Fragment

const FormOption = (props) => {
  const optParts = props.option.split('.')
  const name=`options[${optParts.join('][]')}]`
  return(
    <input name={name} value={props.value} type="hidden" />
  )
}

const Labelled = (props) => {
  var requiredText = ""
  if (!props.required) {
    requiredText = <span
      style={{ fontStyle: "italic", color: heroColor.darken(0.5).string() }}
    >(optional)</span>
  }
  return (
    <label><div
        style={{  }}
      >
        {props.label} {requiredText}
      </div>
      {props.children}
    </label>
  )
}

const LabelledInput = (props) => {
  return (
    <Labelled label={props.label} required={props.required} >
      <input
        style={{
          width: '100%',
        }}
        name={props.name}
        type={props.type}
        placeholder={props.placeholder} />
    </Labelled>
  )
}

const ReCaptcha = () => {
  return null
  const siteKey = "6LeIP0oUAAAAANRB2QX0a3ItZkkiBJsmEs9pel4P"
  const secret = "HxjRkHBC9KGoa7rBLWS5L6mmWcIem/aJewy+hvao4gwXNengRVD+Xgjqffkt1JSzVr20wGWc1kG6RDx8y79kUyLGfcrUDro127Hvi+U7A8gnE4snDsXeYUPTnTxR0nbUqO4PmUApmNZf54IOtOyHZHmTFdV19/dvqJopL1jhByo="
  return (
    <div>
      <Helmet>
        <script src="https://www.google.com/recaptcha/api.js"></script>
      </Helmet>
      <div className="g-recaptcha" data-sitekey={siteKey}></div>
      <FormOption option="reCaptcha.siteKey" value={siteKey} />
      <FormOption option="reCaptcha.secret" value={secret} />
</div>
  )
}

class SubmitComment extends React.Component {
  render() {
    const formUrl = "https://api.staticman.net/v2/entry/docwhat/docwhat/master/comments"
    const returnUrl = this.props.url
    const slug = this.props.slug
    return (
      <div>
        <form method="POST" action={formUrl} style={{
        }}>
          <legend style={{ fontSize: rhythm( 1 ) }} >
            Submit a Comment
          </legend>
          <FormOption option="redirect" value={returnUrl} />
          <FormOption option="slug"     value={slug} />

          <LabelledInput
            label="Name"
            name="field[name]"
            type="text"
            placeholder="Joe Cool"
            required />

          <LabelledInput
            label="E-mail"
            name="field[email]"
            type="email"
            placeholder="joe.cool@example.com"
            required />

          <LabelledInput
            label="Website"
            name="fields[url]"
            type="url"
            placeholder="http://joecool.example.com/" />

          <Labelled
            label="Message"
            required
          >
            <textarea name="fields[message]" placeholder="I really like that the messages can be in **Markdown**." >
            </textarea>
          </Labelled>

          <Labelled
            label="I want to be notified of new comments"
            required
          >
            <input type="checkbox" name="options[subscribe]" value="email" className="checkbox" />
          </Labelled>

          <ReCaptcha />

          <PrimaryButton>Comment</PrimaryButton>
        </form>
      </div>
    )
  }

}

export default SubmitComment
