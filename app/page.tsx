import Header from './components/Header'
import Hero from './components/Hero'
import Testimonial from './components/Testimonial'
import Benefits from './components/Benefits'
import Services from './components/Services'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Testimonial />
        <Benefits />
        <Services />
      </main>
    </>
  );
}