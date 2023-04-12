import React, { useState } from 'react'
import type { HeadFC, PageProps } from 'gatsby'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

import Layout from '../components/Layout'

const baseTexts = [
  {
    text: '> Tokyo-based Mt. Gox filed for bankruptcy after some 850,000 BTC went missing - Feb, 2014',
    wrapper: (text: string, cursor: boolean) => (
      <div className="mt-5 ml-3">
        <span className="has-text-weight-light">{text}</span>
        <span className={cursor || 'has-text-black'}>
          <Cursor cursorStyle="_" />
        </span>
      </div>
    )
  },
  {
    text: '> 76,000 investors collectively lost at least $124M with Quadriga Crypto Exchange fraud - Jan, 2019',
    wrapper: (text: string, cursor: boolean) => (
      <div className="mt-5 ml-3">
        <span className="has-text-weight-light">{text}</span>
        <span className={cursor || 'has-text-black'}>
          <Cursor cursorStyle="_" />
        </span>
      </div>
    )
  },
  {
    text: '> Stakehound Accuses Fireblocks of Losing $74M of ETH - Jun, 2021',
    wrapper: (text: string, cursor: boolean) => (
      <div className="mt-5 ml-3">
        <span className="has-text-weight-light">{text}</span>
        <span className={cursor || 'has-text-black'}>
          <Cursor cursorStyle="_" />
        </span>
      </div>
    )
  },
  {
    text: '> FTX reports $8bn "lost" in customers funds - Nov, 2022',
    wrapper: (text: string, cursor: boolean) => (
      <div className="mt-5 ml-3">
        <span className="has-text-weight-light">{text}</span>
        <span className={cursor || 'has-text-black'}>
          <Cursor cursorStyle="_" />
        </span>
      </div>
    )
  },
  {
    text: 'Want to stop this?',
    wrapper: (text: string) => (
      <div className="columns is-mobile is-centered mt-5 pt-5">
        <div className="column is-three-quarters-mobile is-two-thirds-tablet is-half-desktop is-one-third-widescreen is-one-quarter-fullhd">
          <div className="is-size-5-desktop is-size-5-tablet is-size-6-mobile mt-5">
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
  wrapper:       (text: string) => JSX.Element,
  completedText: (text: string) => void
}> = ({words, wrapper, completedText}) => {
  const [text] = useTypewriter({
    words:       words,
    loop:        1,
    typeSpeed:   50,
    deleteSpeed: 0,
    onLoopDone:  () => {
      setTimeout(() => completedText({text, wrapper}), 2000)
    }
  })

  return (
    <React.Fragment>
      {wrapper(text, true)}
    </React.Fragment>
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
                        completedText={completedText} />
          )}
        </div>
        {! currentText && (
          <div className="has-text-success has-appear-effect">
            <div className="columns is-mobile is-centered">
              <div className="column is-three-quarters-mobile is-two-thirds-tablet is-half-desktop is-one-third-widescreen is-one-quarter-fullhd">
                <form className="has-text-centered">
                  <div className="control has-icons-left has-icons-right mt-5">
                    <input className="input" type="email" placeholder="Email" />
                    <span className="icon is-small is-left">
                      <FontAwesomeIcon icon={faEnvelope} />
                    </span>
                  </div>

                  <div className="control my-5">
                    <button className="button is-primary">Join us!</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
      </Layout>
    </React.Fragment>
  )
}

export default IndexPage

export const Head: HeadFC = () => (
  <React.Fragment>
    <html lang="en" className="has-background-black has-text-light" />
    <title>dCustody</title>
  </React.Fragment>
)
