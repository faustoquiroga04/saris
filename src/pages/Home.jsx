import { Link } from 'react-router-dom';
import logo_saris from '../assets/logo_blue.png'
import '../styles/home.css'
import flyer from '../assets/flyer.png'

const Home = () => {
  return (
    <main className="home">
      <section className='hero'>
        <Link to='/'><img src={logo_saris} alt='Logo' /></Link>
        <h1>A NEW ERA OF CONFIDENCE BEGINS</h1>
        <p>A lifestyle treatment is the catalyst for restoring self-confidence. It’s time to feel proud of your appearance and empowered in your reality. Whether it’s a new hairline, a brighter smile, or any part of you that’s ready to feel renewed, SARIS will lead the way.</p>
        <Link to='/waitlist' className='button'><button className='btn'>Sign Up</button></Link>
      </section>

      <section className='content__module'>
        <Link to="/waitlist"><img src={flyer} alt="flyer" /></Link>
        <div className='celebration'>
          <p><span>This is a celebration of self-transformation, innovation, and restored confidence.</span> The launch weekend will feature an exclusive series of events, including talks and live Q&As with the SARIS medical team, informational sessions on our signature treatments, and early sign-up opportunities for new patients.</p>
          <br />
          <p>Guests will enjoy curated experiences, private consultations, and a first look at how SARIS is redefining confidence and restoration through modern aesthetics. From science to artistry, SARIS introduces a new way to restore confidence.</p>
        </div>
      </section>

      <section className='section__saris'>
        <h2>YOUR JOURNEY WITH SARIS</h2>
        <h3>SARIS offers an array of lifestyle treatments abroad meant to empower your sense of self and embolden your reality.</h3>
  
        <div>
          <h4>Perfected with AI, personalized with care</h4>
          <p>SARIS is AI powered by personalization. Our technology streamlines every aspect of your lifestyle treatment journey (from surgical planning to concierge services), ensuring a flawless, fully guided experience in minutes.</p>
          <ul className="bullet-list indented">
            <li>Itinerary built around your schedule, preferences, and privacy needs.</li>
            <li>Business or first-class travel and transfer, including VIP airport service and luxury ground transport.</li>
          </ul>
        </div>

        <div>
          <h4>World-class Medical Professionals & Experiences</h4>
          <p>
            With elite clinical care, renowned specialists, and profound precision and compassion, our results speak
            for themselves.
          </p>
          <ul className="bullet-list indented">
            <li>Private consultations, aftercare kits, and optional wellness add-ons like massage, nutrition, or IV therapy.</li>
            <li>Exclusive medical facilities and luxury recovery accommodations.</li>
          </ul>
        </div>
    </section>

    </main>
  );
};

export default Home;
