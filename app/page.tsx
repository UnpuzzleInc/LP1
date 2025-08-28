import Header from './components/Header'
import Hero from './components/Hero'
import Testimonial from './components/Testimonial'
import Benefits from './components/Benefits'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Testimonial />
        <Benefits />
      </main>
    </>
  );
}