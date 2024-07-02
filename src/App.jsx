
import SEDANS from './assets/images/icon-sedans.svg'
import SUVS from './assets/images/icon-suvs.svg'
import LUXURY from './assets/images/icon-luxury.svg'
import Section from '../src/components/Section' 
import './Sass/Main.scss'


function App() {
  return (
    <div className="container">
      <main>
        <Section 
          Img={SEDANS} 
          title="SEDANS" 
          paragraph="Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip." 
          primarycolor="hsl(31, 77%, 52%)"
        />
        <Section 
          Img={SUVS} 
          title="SUVS" 
          paragraph="Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures." 
          primarycolor="hsl(184, 100%, 22%)"
        />
        <Section 
          Img={LUXURY} 
          title="LUXURY" 
          paragraph="Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style" 
          primarycolor="hsl(179, 100%, 13%)"
        />
      </main>
    </div>
  )
}

export default App
