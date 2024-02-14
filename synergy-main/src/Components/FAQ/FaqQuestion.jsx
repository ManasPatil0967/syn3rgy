import { useState } from 'react'

const Faq_Question = ({ question, answer, idx }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    function formatIdx(num) {
        return (num < 10 ? '0' : '') + num;
    }

    return (
        <div className="faq-ques flex flex-col md:flex-row flex-wrap w-full md:3/4">
            <div className="flex flex-col flex-wrap gap-6 md:items-center justify-center md:w-1/12 mb-6 md:mb-0">
                <p className='text-6xl text-blue-600'>{formatIdx(idx)}</p>
                <div className={`border-2 md:w-1 w-full flex-1 border-blue-600 ${isOpen ? '' : 'md:hidden md:w-0 '}`}></div>
            </div>
            <div className="md:w-11/12 ">
                <p className={`faq-question font-medium application-font ${isOpen ? 'faq-open ' : ''}text-4xl text-white tracking-widest`} onClick={toggleAccordion}>
                    <p className='w-11/12'>
                        {question}
                    </p>
                </p>
                <p className={`faq-answer ${isOpen ? 'faq-open ' : ''}text-xl font-thin text-white  tracking-widest mt-4 leading-relaxed`}>{answer}</p>
            </div>
        </div>
    )
}

export default Faq_Question