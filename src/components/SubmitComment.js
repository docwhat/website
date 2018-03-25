// @flow
// @format
import g, { Div, Form, Input, Legend, Textarea, Span } from 'glamorous'
import { css } from 'glamor'
import React from 'react'
import PropTypes from 'prop-types'
import { rhythm } from '../utils/typography'
import { heroColor } from '../utils/colors'
import StyledButton from './StyledButton'

import CaretRightIcon from '../icons/caret-right.svg'
import CommentIcon from '../icons/comment-alt.svg'

// TODO: Move the reCapcha into a separate component.
// TODO: Get reCaptcha siteKey and secret from staticman.yml instead.
// TODO: Use a GraphQL Fragment

const textBoxCss = css({
  '::placeholder': {
    color: heroColor.darken(0.7).string(),
    fontStyle: `italic`,
  },
  padding: `0 ${rhythm(1 / 4)}`,
})

const FormOption = props => {
  const optParts = props.option.split(`.`)
  const name = `options[${optParts.join(`][]`)}]`
  return <Input name={name} value={props.value} type="hidden" />
}

FormOption.propTypes = {
  option: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
}

const StyledLabel = g.label(props => {
  const styles = [
    {
      ':focus': {
        background: heroColor.string(),
      },
      display: `flex`,
      flexDirection: `row`,
      flexWrap: `wrap`,
      justifyContent: `flex-start`,
      margin: `1em 0`,
    },
  ]

  styles.push(props.css)

  return styles
})

const StyledLabelDiv = g.label(props => {
  const styles = [
    {
      display: `inline-block`,
      flex: `0 0 30%`,
    },
  ]

  styles.push(props.css)

  return styles
})

const Labelled = props => {
  let requiredText = ``

  if (!props.required) {
    requiredText = (
      <Span
        css={{
          color: heroColor.darken(0.5).string(),
          fontStyle: `italic`,
        }}
      >
        (optional)
      </Span>
    )
  }

  return (
    <StyledLabel css={props.labelCss}>
      <StyledLabelDiv css={props.divCss}>
        {props.label}
        {requiredText}
      </StyledLabelDiv>
      {props.children}
    </StyledLabel>
  )
}

Labelled.propTypes = {
  required: PropTypes.bool,
  label: PropTypes.string.isRequired,
  children: PropTypes.object,
  labelCss: PropTypes.object,
  divCss: PropTypes.object,
}

const LabelledInput = props => (
  <Labelled label={props.label} required={props.required}>
    <Input
      css={{
        flex: `0 0 70%`,
      }}
      {...textBoxCss}
      name={props.name}
      type={props.type}
      placeholder={props.placeholder}
    />
  </Labelled>
)

LabelledInput.propTypes = {
  label: PropTypes.string.isRequired,
  required: PropTypes.bool,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
}

const ReCaptcha = () => null

// const ReCaptcha = () => {
//   return null
//   const siteKey = `6LeIP0oUAAAAANRB2QX0a3ItZkkiBJsmEs9pel4P`
//   const secret =
//     `HxjRkHBC9KGoa7rBLWS5L6mmWcIem/aJewy+hvao4gwXNengRVD+Xgjqffkt1JSzVr20wGWc1kG6RDx8` +
//     `y79kUyLGfcrUDro127Hvi+U7A8gnE4snDsXeYUPTnTxR0nbUqO4PmUApmNZf54IOtOyHZHmTFdV19/dv` +
//     `qJopL1jhByo=`
//   return (
//     <Div>
//       <Helmet>
//         <script src="https://www.google.com/recaptcha/api.js" />
//       </Helmet>
//       <Div className="g-recaptcha" data-sitekey={siteKey} />
//       <FormOption option="reCaptcha.siteKey" value={siteKey} />
//       <FormOption option="reCaptcha.secret" value={secret} />
//     </Div>
//   )
// }

class SubmitComment extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isOpen: false,
    }

    this.toggleForm = this.toggleForm.bind(this)
  }

  toggleForm() {
    if (this.props.closeSection) {
      if (this.props.onCloseSectionClick) {
        this.props.onCloseSectionClick()
      }
    } else {
      this.setState({
        isOpen: !this.state.isOpen,
      })
    }
  }

  render() {
    const formUrl = `https://api.staticman.net/v2/entry/docwhat/docwhat/master/comments`
    const { url: returnUrl, slug } = this.props
    const slugdir = slug.replace(/^\/+|\/+$/g, ``)

    return (
      <Form method="POST" action={formUrl}>
        <Legend
          css={{
            ':hover': {
              textDecoration: `underline`,
            },
            cursor: `pointer`,
            flex: `0 0 100%`,
            fontSize: rhythm(1),
          }}
          onClick={this.toggleForm}
        >
          <CommentIcon css={{ width: `1.125em` }} /> Submit a Comment{` `}
          <CaretRightIcon
            css={{
              transform: this.state.isOpen ? `rotate(90deg)` : null,
            }}
          />
        </Legend>
        {this.state.isOpen ? (
          <div>
            <FormOption option="redirect" value={returnUrl} />
            <FormOption option="slug" value={slug} />
            <FormOption option="slugdir" value={slugdir} />

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
                placeholder="Type your message. You can use **Markdown**!"
                css={{
                  flex: `0 1 70%`,
                  height: rhythm(5),
                  minWidth: rhythm(10),
                  width: `100%`,
                }}
                {...textBoxCss}
              />
            </Labelled>

            <Labelled
              label="I want to be notified of new comments"
              divCss={{
                display: `inline-block`,
                flex: `1 0 80%`,
              }}
              required
            >
              <Div
                css={{
                  flex: `0 1 20%`,
                  textAlign: `right`,
                }}
              >
                <Input type="checkbox" name="options[subscribe]" css={{}} />
              </Div>
            </Labelled>

            <ReCaptcha />

            <Div
              css={{
                textAlign: `right`,
              }}
            >
              <StyledButton>Comment</StyledButton>
            </Div>
          </div>
        ) : null}
      </Form>
    )
  }
}

SubmitComment.propTypes = {
  closeSection: PropTypes.bool,
  onCloseSectionClick: PropTypes.func,
  url: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
}

export default SubmitComment
