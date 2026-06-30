import { Hero } from '@/components/home/hero'
import { StorySection } from '@/components/home/story'
import {
  PillarsSection,
  EcosystemSection,
  WhySection,
  LegacySection,
  ClosingCta,
} from '@/components/home/sections'

export default function HomePage() {
  return (
    <>
      <Hero />
      <StorySection />
      <PillarsSection />
      <EcosystemSection />
      <WhySection />
      <LegacySection />
      <ClosingCta />
    </>
  )
}
