// @format
// @flow
import React from 'react'
import g from 'glamorous'
import { withPrefix } from 'gatsby-link'
import { rhythm } from '../utils/typography'
import StyledButton from '../components/StyledButton'

const labelCSS = {
  display: `inline-block`,
  flex: `0 0 25%`,
}

const inputCSS = {
  flex: `1 1 75%`,
}

const ContactForm = () => (
  <g.Form
    action="https://formspree.io/%64%6f%63%77%68%61%74%40%67%65%72%66%2e%6f%72%67"
    method="POST"
  >
    <input type="hidden" name="_subject" value="Contact Form" />
    <input name="_next" value={withPrefix(`/thanks`)} type="hidden" />

    <g.Div>
      <p>
        I like to help people. If you want to reach me about something, feel
        free to use the form below.
      </p>
      <p>
        It’s a hotline straight to my inbox. Think of it as a{` `}
        <em>Bat Phone</em>, like a <em>What Phone</em>. Uh, but it’s email;{` `}
        <em>What Email</em> … uhm … <em>What Email Form</em>
      </p>
      <p>Okay, nevermind that.</p>
      <p>
        You put your email address and question in the form below and I’ll read
        it and send you a reply.
        <span role="img" aria-label="Slightly Smiling Face">
          🙂
        </span>
      </p>
    </g.Div>

    <g.Div
      display="flex"
      flexDirection="row"
      flexWrap="wrap"
      css={{
        '& > *': {
          margin: `${rhythm(1 / 2)} 0`,
        },
      }}
    >
      <g.Label css={labelCSS} htmlFor="name">
        Name
      </g.Label>
      <g.Input css={inputCSS} name="name" id="name" type="text" />

      <g.Label css={labelCSS} htmlFor="_replyTo">
        Email
      </g.Label>
      <g.Input css={inputCSS} name="_replyTo" id="_replyTo" type="email" />
    </g.Div>

    <g.Label display="block" htmlFor="message">
      Message
    </g.Label>
    <g.Textarea
      name="message"
      id="message"
      placeholder="Your message"
      width="100%"
      height="30vw"
      minHeight="10em"
      required
    />

    <g.Div css={{ textAlign: `right` }}>
      <StyledButton>Send</StyledButton>
    </g.Div>
  </g.Form>
)

export default ContactForm
