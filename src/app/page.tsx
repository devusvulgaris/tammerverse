import Image from 'next/image'
// import styles from './page.module.css'
import Web3Section from '@/components/landing/web3Section'
import WhySection from '@/components/landing/whySection'
import HeroSection from '@/components/landing/heroSection'
import TeamSection from '@/components/landing/teamSection'
import ProjectSection from '@/components/landing/projectSection'
import QuizzesSection from '@/components/landing/quizzesSection'
import LandingContent
 from '@/components/landing'
export default function Home() {
  return (
    <main>
      <HeroSection />
      <Web3Section />
      <WhySection />
      <TeamSection />
      <ProjectSection />
      <QuizzesSection />
      <LandingContent />
    </main>
  )
}
