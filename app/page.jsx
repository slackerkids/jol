import Hero from '@/components/landing/Hero'
import Features from '@/components/landing/Features'
import Cta from '@/components/landing/Cta'
import Footer from '@/components/landing/Footer'
import Navbar from '@/components/landing/Navbar'



export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <Cta />
      <Footer />
    </div>
  );
}
