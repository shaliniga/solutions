import { motion } from 'framer-motion'
import Hero from '../components/sections/Hero'
import TrustStrip from '../components/sections/TrustStrip'
import IntroSection from '../components/sections/IntroSection'
import ServicesSection from '../components/sections/ServicesSection'
import EngagementSection from '../components/sections/EngagementSection'
import ProcessSection from '../components/sections/ProcessSection'
import ProjectsSection from '../components/sections/ProjectsSection'
import WhyUsSection from '../components/sections/WhyUsSection'
import CTASection from '../components/sections/CTASection'

const pageVariants = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
}

const Home = () => {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.35 }}
    >
      <Hero />
      <TrustStrip />
      <IntroSection />
      <ServicesSection preview />
      <EngagementSection />
      <ProcessSection />
      <ProjectsSection preview />
      <WhyUsSection />
      <CTASection />
    </motion.div>
  )
}

export default Home
