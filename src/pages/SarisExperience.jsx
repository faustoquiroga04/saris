import { Link } from 'react-router-dom'
import '../styles/saris.css'

const SarisExperience = () => {
  return (
    <div className='experience'>
        <div className='img__container'>
            <img src="https://framerusercontent.com/images/ZNS795sCX3LBuDEgGsqmxtDk8Hw.png?width=2246&height=1562" alt="your journey to confidence" />
        </div>

        <div className='content'>
            <div className='package'>
                <h2>What’s Included in the SARIS Package</h2>
                <p>At <strong>SARIS</strong>, every step of your transformation is designed for ease, privacy, and care. From your first consultation to your post-procedure recovery, our team ensures a seamless, world-class experience that blends medical precision with five-star comfort.</p>
                <p>Our curated packages are <strong>all-inclusive</strong> and thoughtfully designed to make your transformation effortless and enjoyable.</p>
                <div className='package__list'>
                    <p>Each package includes:</p>
                    <ul>
                        <li><strong>Consultation & medical evaluation</strong></li>
                        <li><strong>Procedure & medical team fees</strong></li>
                        <li><strong>5-star hotel accommodations</strong></li>
                        <li><strong>Private airport transfers</strong></li>
                        <li><strong>Concierge nurse support</strong></li>
                        <li><strong>Aftercare & follow-up video consultations</strong></li>
                    </ul>
                </div>
                <p>Every detail, from your first conversation to your final check-in, is arranged with precision, discretion, and care.</p>
            </div>

            <div className='process'>
                <h2>A quick breakdown of the process:</h2>
                <h3>Step 1: Consultation & Evaluation</h3>
                <p>Your journey begins with a personalized consultation with our SARIS medical team. We’ll review your goals, analyze your scalp and hair health, and design a treatment plan tailored to you.</p>

                <h3>Step 2: Personalized Itinerary</h3>
                <p>After your consultation, you’ll receive your customized plan that outlines every detail of your procedure and travel. We handle everything: booking your 5-star hotel stay, arranging private airport transfers, and confirming your procedure date.</p>

                <h3>Step 4: Procedure Day</h3>
                <p>On the day of your treatment, you’ll arrive at our <strong>modern São Paulo clinic</strong>, where comfort and excellence meet. Our doctors will perform your procedure with precision and artistry.</p>
                <p>Learn more about the <Link to={'/technique'}><strong>hair restoration technique here.</strong></Link></p>

                <h3>Step 5: Recovery & Aftercare</h3>
                <p>Following your procedure, you’ll recover at your hotel with guidance from your SARIS nurse. Our team checks in regularly, providing tailored aftercare instructions to support healing and comfort.</p>

                <h3>Step 6: Follow-Ups & Growth</h3>
                <p>Your journey continues well beyond your stay. SARIS provides virtual follow-ups and ongoing support as your new growth emerges. Most patients see <strong>visible results within 3–4 months</strong>, with full transformation in 9–12 months.</p>
            </div>
        </div>
    </div>
  )
}

export default SarisExperience
