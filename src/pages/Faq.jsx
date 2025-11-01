import '../styles/faq.css';
import { useState } from 'react';

const faq = [
  {
    question: "What is a hair transplant?",
    answer:
      "A hair transplant is a minimally invasive procedure that restores hair to thinning or balding areas by relocating healthy follicles from a donor area (usually the back or sides of the scalp) to areas where growth has slowed or stopped. The result is natural, permanent hair that grows and can be styled just like your own."
  },
  {
    question: "Who is a good candidate for a hair transplant?",
    answer:
      "Ideal candidates are individuals experiencing pattern baldness, thinning hair, or hair loss due to trauma or surgery. During your consultation, our medical team will assess your hair type, density, and scalp condition to determine the best treatment plan for your needs."
  },
  {
    question: "What makes SARIS different?",
    answer:
      "SARIS combines elite medical expertise with a fully curated travel and wellness experience. From your initial consultation to your recovery stay, every detail — travel, accommodation, and post-care — is handled with precision and care. It’s not just a treatment — it’s a journey to confidence restored."
  },
  {
    question: "What techniques do you use?",
    answer:
      "We specialize in the most advanced techniques, including FUE (Follicular Unit Extraction) and DHI (Direct Hair Implantation). These methods provide natural results, minimal scarring, and a faster recovery compared to traditional procedures. Each treatment is customized based on your goals and the expertise of your doctor."
  },
  {
    question: "Will I need to shave my head?",
    answer:
      "No. Depending on your case, our doctors can perform no-shave or partial-shave techniques for discreet results. This is ideal for professionals or public figures who prefer a subtle approach."
  },
  {
    question: "Is the procedure painful?",
    answer:
      "Most patients experience little to no discomfort. Local anesthesia is used throughout the procedure, and post-treatment care is designed to keep you comfortable. Mild soreness or swelling may occur but typically resolves within a few days."
  },
  {
    question: "How long does the procedure take?",
    answer:
      "Depending on the number of grafts and technique used, a typical session can take anywhere from 4 to 8 hours. Our team ensures you’re comfortable throughout, with breaks, refreshments, and full post-care support."
  },
  {
    question: "What is the recovery time?",
    answer:
      "You can return to most normal activities within a few days. Full healing and natural growth occur gradually — most patients notice visible growth within 3 to 4 months, with full results appearing around 12 months post-procedure."
  },
  {
    question: "Will people be able to tell I had a transplant?",
    answer:
      "Our goal is seamless, natural restoration. With modern techniques, visible signs are minimal. You’ll experience subtle regrowth that looks and feels like your own hair — simply healthier and fuller."
  },
  {
    question: "How long do results last?",
    answer:
      "A hair transplant is permanent. The transplanted follicles are resistant to the hormone that causes pattern hair loss, so once they take root, they continue growing for life."
  },
  {
    question: "Are there non-surgical options?",
    answer:
      "Yes. Depending on your needs, our doctors may recommend PRP (Platelet-Rich Plasma) therapy, stem-cell treatments, or other supportive therapies to enhance or maintain results."
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq">
        <h1>Frequently Asked Questions</h1>

        <div className='question__container'>
            {faq.map((faq, index) => (
                <div key={index} className={`faq__item ${activeIndex === index ? 'active' : ''}`}>
                <button className="faq__question" onClick={() => toggleFAQ(index)}>
                    <span>{faq.question}</span>
                    <span className="faq__icon">{activeIndex === index ? '−' : '+'}</span>
                </button>
                <div className="faq__answer">
                    <p>{faq.answer}</p>
                </div>
                </div>
            ))}
        </div>
    </div>
  );
};

export default FAQ;
