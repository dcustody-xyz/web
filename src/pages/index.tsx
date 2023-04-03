import React, { useState } from 'react'
import type { HeadFC, PageProps } from 'gatsby'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import { Navigation, Scrollbar } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import Layout from '../components/Layout'

import 'swiper/scss'
import 'swiper/scss/navigation'

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
  },
  {
    text: 'Custody is broken by design!',
    wrapper: (text: string, cursor: boolean) => (
      <div className="mt-3 is-size-6 has-text-centered is-family-sans-serif">
        <span className="has-text-weight-light">{text}</span>
        {cursor && <Cursor />}
      </div>
    )
  },
  {
    text: '"Benefits are lost if a trusted third party is still required" - Satoshi Nakamoto',
    wrapper: (text: string, cursor: boolean) => (
      <div className="mt-5 ml-3 is-size-6 has-text-centered-desktop is-family-sans-serif">
        <span className="has-text-weight-light">{text}</span>
        {cursor && <Cursor />}
      </div>
    )
  },
  {
    text: 'Join us to change reality!',
    wrapper: (text: string, cursor: boolean) => (
      <div className="mt-5 ml-3 is-size-2 has-text-centered-desktop is-family-sans-serif">
        <span className="has-text-weight-light">{text}</span>
        {cursor && <Cursor />}
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
      swiper?.changeDirection('vertical')
      swiper?.updateSize()
      // swiper?.enable()
    }, 100)
  }

  return (
    <Swiper spaceBetween={50}
            modules={[Navigation, Scrollbar]}
            navigation
            scrollbar={{ draggable: true }}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => { swiper.disable(); setSwiper(swiper) }} >
      <SwiperSlide>
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
        </Layout>
      </SwiperSlide>
    </Swiper>
  )
}

export default IndexPage

export const Head: HeadFC = () => (
  <React.Fragment>
    <html lang="en" className="has-background-dark" />
    <title>dCustody</title>
  </React.Fragment>
)
