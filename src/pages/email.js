// @format
//
import styled from '@emotion/styled'
import { withPrefix } from 'gatsby'
import { PropTypes } from 'prop-types'
import React from 'react'

import Layout from '../components/Layout.jsx'
import StyledButton from '../components/StyledButton.jsx'

const MyLabel = styled.label`
  display: inline-block;
  flex: 0 0 25%;
`

const MyInput = styled.input`
  flex: 1 1 75%;
`

const ContactForm = (props) => (
  <Layout location={props.location}>
    <form action="https://formspree.io/f/xleoyeep" method="POST">
      <input name="_next" value={withPrefix(`/thanks`)} type="hidden" />

      <div>
        <p>
          I like to help people. If you want to reach me about something, feel
          free to use the form below.
        </p>
        <p>
          It’s a hotline straight to my inbox. Think of it as a{` `}
          <em>Bat Phone</em>, like a <em>What Phone</em>. Uh, but it’s email;
          {` `}
          <em>What Email</em> … uhm … <em>What Email Form</em>
        </p>
        <p>Okay, nevermind that.</p>
        <p>
          If you put your email address in the form below and I’ll send you a
          reply.
          <span role="img" aria-label="Slightly Smiling Face">
            🙂
          </span>
        </p>
      </div>

      <div
        css={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          '& > *': {
            margin: `calc(var(--font-size) / 2) 0`,
          },
        }}
      >
        <MyLabel htmlFor="name">Name</MyLabel>
        <MyInput name="name" id="name" type="text" />

        <MyLabel htmlFor="_replyTo">Email</MyLabel>
        <MyInput name="_replyTo" id="_replyTo" type="email" />
      </div>

      <label css={{ display: 'block' }} htmlFor="message">
        Message
      </label>
      <textarea
        name="message"
        id="message"
        placeholder="Your message"
        required
        css={{
          width: '100%',
          height: '30vw',
          minHeight: '10em',
        }}
      />

      <div css={{ textAlign: `right` }}>
        <StyledButton>Send</StyledButton>
      </div>
    </form>
  </Layout>
)

ContactForm.propTypes = {
  location: PropTypes.object.isRequired,
}

export default ContactForm
