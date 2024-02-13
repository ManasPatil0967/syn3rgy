import React, { useState } from 'react';

const FaqAccordion = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = ({question,answer}) => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className={`faq-question ${isOpen ? 'open' : ''}`} onClick={toggleAccordion}>
        What will be the mode and location of the hackathon?
      </div>
      <div className={`faq-answer ${isOpen ? 'open' : ''}`}>
        SYN3RGY will be conducted in OFFLINE mode. Primarily held offline at SVKM's Dwarkadas J. Sanghvi College of Engineering campus, Vile Parle, Mumbai, India.
      </div>
      </>

  );
};

export default FaqAccordion;