import AboutSection from '@/components/home/AboutSection'
import Faq from '@/components/home/Faq'
import HeroSection from '@/components/home/HeroSection'
import OurOffersSection from '@/components/home/OurOffersSection'
import ReviewSection from '@/components/home/ReviewSection'
import React from 'react'

type Props = {}


const Page = (props: Props) => {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <HeroSection />
      <div id='about'>
        <AboutSection />
      </div>
      <OurOffersSection />
      <ReviewSection />
      <div id='faq'>
          <Faq />
      </div>
    </div>
  )
}

export default Page