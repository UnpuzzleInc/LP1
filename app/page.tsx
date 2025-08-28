import Header from './components/Header'
import Hero from './components/Hero'
import Testimonial from './components/Testimonial'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Testimonial />
      </main>
    </>
  );
}