import NavBar from '@/components/NavBar';
import Hero from '@/components/Hero';
import OurImpact from '@/components/OurImpact';
import WhatWeDo from '@/components/WhatWeDo';
import FeaturedProject from '@/components/FeaturedProject';
import Projects from '@/components/Projects';
import Partners from '@/components/Partners';
import InvestmentOps from '@/components/InvestmentOps';
import AboutUs from '@/components/AboutUs';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <NavBar />
      <main>
        <Hero />
        <OurImpact />
        <WhatWeDo />
        <FeaturedProject />
        <Projects />
        <Partners />
        <InvestmentOps />
        <AboutUs />
      </main>
      <Footer />
    </>
  );
}
