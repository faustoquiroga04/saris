import '../styles/waitlist.css'

const Waitlist = () => {
  return (
    <div className='waitlist'>
        <div className='waitlist__title'>
            <h1>Get in touch with us!</h1>
            <h5>Enter your details below to start your journey toward renewed confidence and world-class care.</h5>
        </div>

        <form action="https://forms-eu1.hsforms.com/submissions/v3/public/submit/formsnext/multipart/147137397/7416632e-d21e-4c6d-93e6-8d0cd89f302d">
            <div className='form__name'>
                <div className='form__first'>
                    <label htmlFor="">First Name<span>*</span></label>
                    <input type="text" />
                </div>
                <div className='form__last'>
                    <label htmlFor="">Last Name<span>*</span></label>
                    <input type="text" />
                </div>
            </div>

            <div className='form__email'>
                <label htmlFor="">Email<span>*</span></label>
                <input type="email" />
            </div>

            <div className='form__number'>
                <label htmlFor="">Phone Number</label>
                <input type="tel" />
            </div>
            <button className='waitlist__button'>Submit</button>
        </form>
    </div>
  )
}

export default Waitlist