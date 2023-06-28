import React, { useState } from 'react'
import type { HeadFC, PageProps } from 'gatsby'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

import Layout from '../components/Layout'

const baseTexts = [
  {
    text:    '> Tokyo-based Mt. Gox filed for bankruptcy after some 850,000 BTC went missing - Feb, 2014',
    timeout: 2000,
    wrapper: (text: string, cursor: boolean) => (
      <div className="mt-5 ml-3">
        <span className="has-text-weight-light">{text}</span>
        <span className={cursor ? '' : 'has-text-black'}>
          <Cursor cursorStyle="_" />
        </span>
      </div>
    )
  },
  {
    text:    '> 76,000 investors collectively lost at least $124M with Quadriga Crypto Exchange fraud - Jan, 2019',
    timeout: 2000,
    wrapper: (text: string, cursor: boolean) => (
      <div className="mt-5 ml-3">
        <span className="has-text-weight-light">{text}</span>
        <span className={cursor ? '' : 'has-text-black'}>
          <Cursor cursorStyle="_" />
        </span>
      </div>
    )
  },
  {
    text:    '> Stakehound Accuses Fireblocks of Losing $74M of ETH - Jun, 2021',
    timeout: 2000,
    wrapper: (text: string, cursor: boolean) => (
      <div className="mt-5 ml-3">
        <span className="has-text-weight-light">{text}</span>
        <span className={cursor ? '' : 'has-text-black'}>
          <Cursor cursorStyle="_" />
        </span>
      </div>
    )
  },
  {
    text:    '> FTX reports $8bn "lost" in customers funds - Nov, 2022',
    timeout: 2000,
    wrapper: (text: string, cursor: boolean) => (
      <div className="mt-5 ml-3">
        <span className="has-text-weight-light">{text}</span>
        <span className={cursor ? '' : 'has-text-black'}>
          <Cursor cursorStyle="_" />
        </span>
      </div>
    )
  },
  {
    text:    'Join us to stop this',
    timeout: 500,
    wrapper: (text: string) => (
      <div className="columns is-mobile is-centered mt-5 pt-5">
        <div className="column is-three-quarters-mobile is-two-thirds-tablet is-half-desktop is-one-third-widescreen is-one-third-fullhd">
          <div className="has-text-centered is-size-5-desktop is-size-5-tablet is-size-6-mobile mt-5">
            <span className="has-text-weight-light">{text}</span>
            <Cursor cursorStyle="_" />
          </div>
        </div>
      </div>
    )
  }
]

const Typed: React.FC<{
  words:   string[],
  wrapper: (text: string) => JSX.Element
}> = ({ words, wrapper }) => wrapper(words.join(''))

const Typewriter: React.FC<{
  words:         string[],
  timeout:       number,
  wrapper:       (text: string) => JSX.Element,
  completedText: (text: string) => void
}> = ({words, timeout, wrapper, completedText}) => {
  const [text] = useTypewriter({
    words:       words,
    loop:        1,
    typeSpeed:   35,
    deleteSpeed: 0,
    onLoopDone:  () => {
      setTimeout(() => completedText({text, wrapper, timeout}), timeout)
    }
  })

  return (
    <React.Fragment>
      {wrapper(text, true)}
    </React.Fragment>
  )
}

const LitepaperLink: React.FC<{
  className: string
}> = ({className, children}) => (
  <a className={className}
     href="https://raw.githubusercontent.com/dcustody-xyz/papers/master/litepaper.pdf"
     target="_blank"
     rel="noopener noreferrer">
    {children}
  </a>
)

const JoinForm: React.FC = () => {
  const apiEndpoint = 'https://email-api.dcustody.xyz/save'

  const [ email, setEmail ]               = useState<string>('')
  const [ message, setMessage ]           = useState<string>('')
  const [ submitStatus, setSubmitStatus ] = useState<'idle' | 'submitting' | 'submitted'>('idle')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    setSubmitStatus('submitting')

    const response = await fetch(apiEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email })
    })

    if (response.ok) {
      setMessage('You are in, thanks!')
      setEmail('')
      setSubmitStatus('submitted')
    } else if (response.status === 400 || response.status === 409) {
      const { message } = await response.json()

      setMessage(message)
      setEmail('')
      setSubmitStatus(response.status === 400 ? 'idle' : 'submitted')
    } else {
      setMessage('Something went wrong. Please try again later.')
      setSubmitStatus('idle')
    }
  }

  return (
    <div className="columns is-mobile is-centered">
      <div className="column is-three-quarters-mobile is-two-thirds-tablet is-half-desktop is-one-third-widescreen is-one-third-fullhd">
        <div className="is-size-5-desktop is-size-5-tablet is-size-6-mobile mt-5">
          <form onSubmit={handleSubmit}>
            <div className="field">
              <div className="control has-icons-left mt-5">
                <input className="input is-family-monospace"
                       type="email"
                       placeholder="Email"
                       value={email}
                       disabled={submitStatus !== 'idle'}
                       onChange={e => setEmail(e.target.value)} />
                <span className="icon is-small is-left">
                  <FontAwesomeIcon icon={faEnvelope} />
                </span>
              </div>
            </div>
            {submitStatus !== 'submitted' && (
              <div>
                <div className="field has-text-centered">
                  <div className="control mt-5 mb-3">
                    <button className={`button is-primary is-family-monospace ${submitStatus === 'submitting' ? 'is-loading' : ''}`} type="submit">
                      Join us!
                    </button>
                  </div>
                </div>

                <div className="mt-5 pt-4 has-text-centered has-text-success is-hidden-desktop">
                  <LitepaperLink className="has-text-success">
                    Litepaper
                  </LitepaperLink>
                </div>

                <nav className="navbar is-black is-fixed-bottom is-hidden-touch" role="navigation" aria-label="main navigation">
                  <div className="navbar-menu">
                    <div className="navbar-end">
                      <LitepaperLink className="navbar-item has-text-success">
                        Litepaper
                      </LitepaperLink>
                    </div>
                  </div>
                </nav>
              </div>
            )}
          </form>
          {message && (
            <div className="is-size-6 has-text-centered has-text-success mt-3 mb-5">
              <Typewriter key={message}
                          words={[message]}
                          wrapper={text => <div className="mt-5 ml-3">{text}</div>}
                          timeout={0}
                          completedText={() => {}} />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}


const IndexPage: React.FC<PageProps> = () => {
  const [completedTexts, setCompletedTexts] = useState<string[]>([])

  const completedText = (text: string) => setCompletedTexts(completedTexts.concat(text))
  const currentText   = baseTexts[completedTexts.length]

  return (
    <React.Fragment>
      <Layout>
        <div className="has-text-success is-size-3-desktop is-size-5-mobile is-size-4-tablet p-2">
          {completedTexts.map((text, index) => (
            <Typed key={index} words={[text.text]} wrapper={text.wrapper} />
          ))}
          {currentText && (
            <Typewriter key={completedTexts.length}
                        words={[currentText.text]}
                        wrapper={currentText.wrapper}
                        timeout={currentText.timeout}
                        completedText={completedText} />
          )}
        </div>
        {! currentText && (
          <div className="has-appear-effect">
            <JoinForm />
          </div>
        )}
      </Layout>
    </React.Fragment>
  )
}

export default IndexPage

export const Head: HeadFC = () => (
  <React.Fragment>
    <html lang="en" className="has-background-black has-text-light has-navbar-fixed-bottom" />
    <title>dCustody</title>

    <meta name="description" content="dCustody: Infrastructure for Trustless Digital Asset Custody" />

    <meta property="og:local" content="en_US" />
    <meta property="og:title" content="dCustody" />
    <meta property="og:description" content="dCustody: Infrastructure for Trustless Digital Asset Custody" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://dcustody.xyz" />
    <meta property="og:image" content="https://dcustody.xyz/icons/icon-512x512.png" />
  </React.Fragment>
)
