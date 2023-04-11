import React, { useState } from 'react'
import type { HeadFC, PageProps } from 'gatsby'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import { Mousewheel, Virtual } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

import Layout from '../components/Layout'

import 'swiper/scss'
import 'swiper/scss/virtual'

const baseTexts = [
  {
    text: '- Stakehound Accuses Fireblocks of Losing $74M of ETH.',
    wrapper: (text: string, cursor: boolean) => (
      <div className="mt-5 ml-3">
        <span className="has-text-weight-light">{text}</span>
        {cursor && <Cursor />}
      </div>
    )
  },
  {
    text: '- Distressed crypto exchange FTX files for bankruptcy.',
    wrapper: (text: string, cursor: boolean) => (
      <div className="mt-5 ml-3">
        <span className="has-text-weight-light">{text}</span>
        {cursor && <Cursor />}
      </div>
    )
  },
  {
    text: '- Credit Suisse to borrow up to $54bn amid banking crisis fears.',
    wrapper: (text: string, cursor: boolean) => (
      <div className="mt-5 ml-3">
        <span className="has-text-weight-light">{text}</span>
        {cursor && <Cursor />}
      </div>
    )
  },
  {
    text: 'Is the money in your bank account safe?',
    wrapper: (text: string, cursor: boolean) => (
      <div className="mt-5 pt-5 is-size-6 has-text-centered is-family-sans-serif">
        <div className="mt-5 has-text-warning">
          <span className="has-text-weight-light">{text}</span>
          {cursor && <Cursor />}
        </div>
      </div>
    )
  }
]

const Typed: React.FC<{
  words:   string[],
  wrapper: (text: string) => JSX.Element
}> = ({words, wrapper}) => {
  return (
    wrapper(words.join(''))
  )
}

const Typewriter: React.FC<{
  words:   string[],
  wrapper: (text: string) => JSX.Element,
  completedText: (text: string) => void
}> = ({words, wrapper, completedText}) => {
  const [text] = useTypewriter({
    words: words,
    loop: 1,
    typeSpeed: 50,
    deleteSpeed: 0,
    onLoopDone: () => {
      setTimeout(() => {
        completedText({text, wrapper})
      }, 2000)
    }
  })

  return (
    <React.Fragment>
      {wrapper(text, true)}
    </React.Fragment>
  )
}

const IndexPage: React.FC<PageProps> = () => {
  const [swiper, setSwiper]                 = useState<SwiperCore | null>(null)
  const [completedTexts, setCompletedTexts] = useState<string[]>([])

  const completedText = (text: string) => setCompletedTexts(completedTexts.concat(text))
  const currentText   = baseTexts[completedTexts.length]

  if (! currentText) {
    setTimeout(() => {
      // swiper?.changeDirection('vertical')
      swiper?.updateSize()
      swiper?.enable()
    }, 100)
  }

  return (
    <React.Fragment>
      <Swiper spaceBetween={50}
              modules={[Mousewheel, Virtual]}
              className={'h-screen'}
              direction={'vertical'}
              slidesPerView={1}
              mousewheel={true}
              history={{key: 'slide'}}
              virtual={true}
              enabled={false}
              grabCursor={true}
              onSlideChange={() => console.log('slide change')}
              onSwiper={swiper => { setSwiper(swiper) }} >
        <SwiperSlide data-history="main" virtualIndex={0}>
          <Layout>
            <div className="has-text-success is-family-monospace is-size-5 p-2">
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
              <div className="has-text-centered mt-5 pt-5">
                <div className="it-moves-up-and-down mt-5 pt-5">
                  <button className="button is-success is-rounded is-large is-outlined py-0" onClick={() => swiper?.slideNext()}>
                    <span className="arrow-down"></span>
                  </button>
                </div>
              </div>
            )}
          </Layout>
        </SwiperSlide>
          <SwiperSlide data-history="conclusion" virtualIndex={1}>
              <Layout>
                {! currentText && (
                  <div className="has-text-success mt-5 pt-5">
                    <div className="mt-3 is-size-2 has-text-centered is-family-sans-serif">
                      <span className="has-text-weight-light">
                        Custody is broken by design!
                      </span>
                    </div>

                    <div className="mt-5 ml-3 is-size-6 has-text-centered is-family-sans-serif">
                      <span className="has-text-weight-light">
                        "Benefits are lost if a trusted third party is still required" - Satoshi Nakamoto
                      </span>
                    </div>

                    <div className="columns is-mobile is-centered mt-5 pt-5">
                      <div className="column is-three-quarters-mobile is-two-thirds-tablet is-half-desktop is-one-third-widescreen is-one-quarter-fullhd">
                        <form className="mt-5 pt-5 has-text-centered">
                          <div className="control has-icons-left has-icons-right">
                            <input className="input" type="email" placeholder="Email" autoFocus />
                            <span className="icon is-small is-left">
                              <FontAwesomeIcon icon={faEnvelope} />
                            </span>
                          </div>

                          <div className="control mt-5">
                            <button className="button is-primary">Join the wait list!</button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                )}
              </Layout>
          </SwiperSlide>
      </Swiper>
    </React.Fragment>
  )
}

export default IndexPage

export const Head: HeadFC = () => (
  <React.Fragment>
    <html lang="en" className="has-background-dark" />
    <title>dCustody</title>
  </React.Fragment>
)
